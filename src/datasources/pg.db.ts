import { IConnection } from '../interfaces/config.interface';
import {createConnection, Connection} from 'typeorm';

const connection = async (config: IConnection) => 
  await createConnection({
    type: 'postgres', 
    ...config,
    synchronize: true,
    entities: ['dist/entities/*.js'],
  });

export default connection;