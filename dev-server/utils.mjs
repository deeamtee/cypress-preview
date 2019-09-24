import { promisify } from 'util';
import r from 'request';
import os from 'os';

export const request = promisify(r);

export const isDefined = value => value !== undefined && value !== null;

export const getLocalsIP = () => {
    const ifaces = os.networkInterfaces();
    const addresses = [];
    Object.keys(ifaces).forEach(ifname => {
        let alias = 0;
        ifaces[ifname].forEach((iface) => {
            if ('IPv4' !== iface.family || iface.internal !== false) { // eslint-disable-line
                // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
                return;
            }

            if (alias >= 1) {
                // this single interface has multiple ipv4 addresses
                // console.log(ifname + ':' + alias, iface.address);
                addresses.push(iface.address);
            } else {
                // this interface has only one ipv4 adress
                addresses.push(iface.address);
            }
            ++alias;
        });
    });

    return addresses;
};
