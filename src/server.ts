import express, { IRouter } from 'express';
import { IConfig } from 'interfaces/config.interface';
class Server {
  private _config: IConfig;
  private _express;
  private _router: any;
  private _connection: any;
  private _dbConfig: any;

  constructor(config: IConfig, router: any, dbConfig: any) {
    this._config = config;
    this._express = express();
    this._router = router;
    this._express.use(this._router);
    this._dbConfig = dbConfig;
  }

  async startConnection() {
    this._connection = await this._dbConfig(this._config.DB);
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
