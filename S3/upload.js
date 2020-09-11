const fs = require('fs');
const path = require('path');
const AWS = require('aws-sdk');
const config = require('../config');

AWS.config.update(config.key);
const S3 = new AWS.S3();

const file = fs.readFileSync(path.join(__dirname, 'test.txt'));

S3.upload({
    Bucket: config.S3.bucket,
    Key: 'nShopImage/testUpload.txt',     // 파일을 업로드한 경로와 파일 이름
    Body: file,
}).on("httpUploadProgress", evt => {    //로딩 현황을 실시간으로 보여 줌
    parseInt((evt.loaded * 100) / evt.total);
}).send((err, data) => {
    console.log(data);
});

/*
Sample Output
{
    ETag: '"690d9bdaaf58060181f036b9fc593780"',
    Location: 'https://fetching-app.s3.amazonaws.com/nShopImage/testUpload.txt',
    key: 'nShopImage/testUpload.txt',
    Key: 'nShopImage/testUpload.txt',
    Bucket: 'fetching-app'
}
*/
