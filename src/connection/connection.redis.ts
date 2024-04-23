import * as redis from 'redis';
import chalk from 'chalk';
import dotenv from 'dotenv';
dotenv.config();

const redisUsername: string | undefined = process.env.REDIS_USERNAME;
const redisPassword: string | undefined = process.env.REDIS_PASSWORD;
const redisHost: string | undefined = process.env.REDIS_PUB_LINK;
const redisPort: string | undefined = process.env.REDIS_PORT;
const redisDatabaseIndex: string | undefined = process.env.REDIS_DB_INDEX;

let redisConnectionUrl: string;

if (redisUsername && redisPassword && redisHost && redisPort && redisDatabaseIndex) {
    redisConnectionUrl = `redis://${redisUsername}:${redisPassword}@${redisHost}:${redisPort}/${redisDatabaseIndex}`;
} else {
    console.warn(chalk.yellow.bold('Missing some or all environment variables. Falling back to default Redis URL.'));
    redisConnectionUrl = 'redis://127.0.0.1:6379';
}

const client = redis.createClient({
    url: redisConnectionUrl
});

client.connect();

client.on('connect', () => {
    console.log(chalk.green(`Connected to ${chalk.red.bold('Redis')} Successfully`));
});

client.on('error', (err) => {
    console.error(chalk.red.bold('Redis error:'));
    console.error(err);
});

export default client;
