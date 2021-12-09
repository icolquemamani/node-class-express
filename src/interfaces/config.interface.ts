export declare interface IConfig {
  PORT: number;
  ENV: string;
  DB?: {
    host?: string;
    port?: number;
    user?: string;
    password?: string;
    database?: string;
  };
}