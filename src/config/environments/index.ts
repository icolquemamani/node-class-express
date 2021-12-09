import dotenv from 'dotenv';
dotenv.config();

import development from './development';
import production from './production';


const { NODE_ENV } = process.env;

let currentEnv = development;

if (NODE_ENV === 'production') {
  currentEnv = production;
}

export default {...currentEnv, ENV: NODE_ENV };