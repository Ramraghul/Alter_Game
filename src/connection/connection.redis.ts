import * as redis from 'redis';
import chalk from 'chalk';

const redisConnectionUrl: string =  process.env.MY_DATABASE || 'redis://127.0.0.1:6379';

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
