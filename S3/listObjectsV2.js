// https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListObjectsV2.html

const AWS = require('aws-sdk');
const config = require('../config');

AWS.config.update(config.key);
const S3 = new AWS.S3();

S3.listObjectsV2(
    {
        Bucket: config.S3.bucket,   // 버킷 이름
        Prefix: 'nShopImage',       // 경로
    },
    (err, data) => {
        if (err) {
            throw err;
        }
        const contents = data.Contents;
        contents.forEach((content) => {
            console.log(content)
        });
    }
);

/*
Sample Output
{
    Key: 'nShopImage/',
    LastModified: 2020-07-14T02:40:26.000Z,
    ETag: '"d41d8cd98f00b204e9800998ecf8427e"',
    Size: 0,
    StorageClass: 'STANDARD'
}
{
    Key: 'nShopImage/188b20deef329e13c7368d66f7a183bf.jpg',
    LastModified: 2020-08-28T04:56:33.000Z,
    ETag: '"188b20deef329e13c7368d66f7a183bf"',
    Size: 348418,
    StorageClass: 'STANDARD'
}
{
    Key: 'nShopImage/549829095179571734473a6f795181ae.jpg',
    LastModified: 2020-08-28T04:55:07.000Z,
    ETag: '"549829095179571734473a6f795181ae"',
    Size: 252071,
    StorageClass: 'STANDARD'
}
{
    Key: 'nShopImage/bca3692e01fec63438edbb1d50f9c519.jpg',
    LastModified: 2020-08-28T04:54:50.000Z,
    ETag: '"bca3692e01fec63438edbb1d50f9c519"',
    Size: 348432,
    StorageClass: 'STANDARD'
}
*/