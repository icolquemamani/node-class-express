export declare interface IConnection {
  host?: string;
  port?: number;
  user?: string;
  password?: string;
  database?: string;
}

export declare interface IConfig {
  PORT: number;
  ENV: string;
  DB?: IConnection;
}