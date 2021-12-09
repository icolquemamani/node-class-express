import Server from './server';
import config from './config/environments';
import router from './routes';

const server = new Server(config, router);

server.start().catch(err => {
  console.log(err);
});