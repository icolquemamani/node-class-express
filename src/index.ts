import Server from './server';
import config from './config/environments';

const server = new Server(config);

server.start().catch(err => {
  console.log(err);
});