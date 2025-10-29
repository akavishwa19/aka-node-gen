import { select } from '@inquirer/prompts';
import ora from 'ora';
import { saveConfig } from '../utils/config.util.js';

const init = async () => {

    const configs: Record<string, string> = {

    }
    configs.language = await select({
        message: 'Select base language',
        choices: [
            { name: 'javascript', value: 'javascript' },
            { name: 'typescript', value: 'typescript' },
        ],
    });

    configs.module = await select({
        message: 'Select base syntax',
        choices: [
            { name: 'commonJS', value: 'common_js' },
            { name: 'ESM', value: 'ESM' },
        ],
    });

    configs.database = await select({
        message: 'Select your database',
        choices: [
            { name: 'mongoDB', value: 'mongo_db' },
            { name: 'mongoose', value: 'mongoose' },
            { name: 'mySQL', value: 'my_sql' }
        ],
    });

    const spinner = ora('creating base project with selected configuration').start();

    const processDirectory = process.cwd();
    saveConfig(processDirectory, configs)

    spinner.succeed('created base project')


}


export default init;