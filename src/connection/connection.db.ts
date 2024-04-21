import mongoose from 'mongoose';
import 'dotenv/config';
import chalk from 'chalk';

mongoose.set('strictQuery', false);


const connectionLink: string = process.env.MY_DATABASE ?? 'mongodb://localhost:27017/alter_game';

mongoose.connect(connectionLink)
    .then(() => {
        console.log(chalk.underline.blackBright.bold("AutoBots, let's transform and roll out!"));
        console.log(`Press ${chalk.yellowBright.bold('CTRL + C')} Stop This Transformers War`);

    })
    .catch((error) => {
        console.log(error);
    });