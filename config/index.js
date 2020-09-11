const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    S3: {
        rootUrl: process.env.AWS_S3_ROOT_URL,
        AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
        AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
    }
};
