const keys = require('./keys.js');
const redis = require('redis');

const redisClient = redis.createClient({
    host: keys.redisHost,
    port: keys.redisPort,
    retry_strategy: () => 1000
});

const sub = redisClient.duplicate();

function calculateFibonacci(index){
    if(index < 2) return 1;
    return calculateFibonacci(index - 1) + calculateFibonacci(index -2);
}

sub.on('message', (channel, message) => {
    redisClient.hset('values', message, calculateFibonacci(parseInt(message)));
});

sub.subscribe('insert');