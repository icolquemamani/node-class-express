import express from 'express';
import { IConfig } from 'interfaces/config.interface';
class Server {
  private _config: IConfig;
  private _express;

  constructor(config: IConfig) {
    this._config = config;
    this._express = express();
  }

  start() {
    return new Promise((resolve, reject) => {
      const http = this._express.listen(this._config.PORT, () => {
        const { port } = http.address();
        console.log(`Server started on port ${port}`);
        resolve(null);
      });
    });
  }
}


export default Server;
