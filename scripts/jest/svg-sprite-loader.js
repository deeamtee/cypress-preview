const path = require('path');

module.exports = {
    process(src, filename) {
        const result = {
            default: {
                id: path.basename(filename),
                viewbox: '0 0 16 16',
            },
        };

        return `module.exports = ${JSON.stringify(result)};`;
    },
};
