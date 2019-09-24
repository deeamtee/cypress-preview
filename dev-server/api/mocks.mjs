import express from 'express';
import { isDefined } from '../utils';

const router = express.Router();

const getData = async (path, { id }) => {
    const [path_, id_] = path.split(`/${id}`);
    if (isDefined(id_)) {
        const data = await import(`./data/${path_}/id.json`);
        return data.default;
    }
    const data = await import(`./data/${path_}/index.json`);
    return data.default;
};

export default () => {
    router.get('/user', async (req, res) => {
        const data = await getData(req.path, req.params);
        return res.send(data);
    });

    return router;
};
