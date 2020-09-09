var redis = require('redis');
var redisClient = null;

function createRedisClient() {
    redisClient = redis.createClient({host : '127.0.0.1', port : 6379});

    redisClient.on('ready',function() {
        console.log("Redis is ready");
       });
       
       redisClient.on('error',function() {
        console.log("Error in Redis");
       });
}

async function insertToTable (key, object) {
    return new Promise((resolve, reject) => {
        redisClient.hmset(key, object);
        resolve();
    });
};

async function getAllByKey (key) {
    return new Promise((resolve, reject) => {
        redisClient.hgetall(key, (err, object) => {
            if (err) {
              reject(err);
            } else {
              resolve(object);
            }
          });
    });
};

async function getAllKeysByPrefix (prefix) {
    return new Promise((resolve, reject) => {
        redisClient.keys(`${prefix}*`, (err, object) => {
            if (err) {
              reject(err);
            } else {
              console.log(object);
              resolve(object);
            }
          });
    });
};

module.exports = {createRedisClient, insertToTable, getAllByKey, getAllKeysByPrefix};