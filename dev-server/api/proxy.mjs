import express from 'express';
import { request } from '../utils';
import config from '../config';

const router = express.Router();

const ENV_TARGETS = {
    dev: 'https://ppnode2.dev.rbp.raiffeisen.ru/personal-portal-v2-server',
    test: 'https://cpwww.test.rbp.raiffeisen.ru/personal-portal-v2-server',
};

const TARGET = ENV_TARGETS[config.proxyTarget];

const filterHeaders = (headers, filter) => {
    const keys = headers.filter((header, index) => index % 2 === 0);
    const values = headers.filter((header, index) => index % 2);
    return keys.reduce((acc, cur, index) => {
        if (filter.indexOf(cur) === -1) {
            return acc;
        }
        acc[cur] = values[index];
        return acc;
    }, {});
};

const allHeaders = headers => headers.reduce((acc, curr, index, arr) => { // eslint-disable-line no-unused-vars
    if (index % 2) {
        acc[arr[index - 1]] = curr;
        return acc;
    }
    acc[curr] = null;
    return acc;
}, {});

export default () => {
    router.all('*', async (req, res) => {
        const headers = filterHeaders(req.rawHeaders, ['Content-Type', 'Id-Token', 'Authorization', 'id-token', 'authorization']);

        try {
            const data = await request({
                method: req.method,
                url: `${TARGET}${req.url}`,
                strictSSL: false,
                headers: headers,
                json: req.body,
            });

            res.send(data.body);
        } catch (e) {
            console.log(e); // eslint-disable-line no-console
        }
    });

    return router;
};
