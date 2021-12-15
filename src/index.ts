import 'reflect-metadata';
import Server from './server';
import config from './config/environments';
import router from './routes';
import db from './datasources';

const server = new Server(config, router, db.pgDatasource);

server.start().then( async ()=>{
  await server.startConnection();
}).catch(err => {
  console.log(err);
});