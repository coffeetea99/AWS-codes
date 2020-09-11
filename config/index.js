const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    key: {
        AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
        AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
    },
    S3: {
        rootUrl: process.env.S3_ROOT_URL,
        bucket: process.env.S3_BUCKET
    }
};
