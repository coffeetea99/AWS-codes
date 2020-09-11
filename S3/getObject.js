const AWS = require('aws-sdk');
const config = require('../config');

AWS.config.update(config.key);
const S3 = new AWS.S3();

const getParams = {
    Bucket: config.S3.bucket,
    Key: 'nShopImage/testUpload.txt',
}

S3.getObject(getParams, (err, data) => {
    console.log(data.Body.toString());
})