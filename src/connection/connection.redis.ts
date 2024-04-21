import * as redis from 'redis';
import chalk from 'chalk';

const client = redis.createClient();
client.connect();

client.on('connect', () => {
    console.log(chalk.green(`Connected to ${chalk.red.bold('Redis')} Successfully`));
});

client.on('error', (err) => {
    console.error(chalk.red.bold('Redis error:'));
    console.error(err);
});

export default client;
