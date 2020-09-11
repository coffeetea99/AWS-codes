const AWS = require('aws-sdk');
const config = require('../config');

AWS.config.update(config.key);
const S3 = new AWS.S3();

const getParams = {
    Bucket: config.S3.bucket,
    Key: 'nShopImage/testUpload.txt',
}

S3.getObject(getParams, (err, data) => {
    console.log('callback');
    console.log(data.Body.toString());
})

async function main() {
    const p = await S3.getObject(getParams).promise();
    console.log('async/await');
    console.log(p.Body.toString());
}

main();

/*
callback과 async/await의 순서는 언제든지 바꾸어 나올 수 있다.
*/