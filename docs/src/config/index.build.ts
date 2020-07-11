import type { IConfig } from './config.d';
import { name } from '../../../package.json';

class Config implements IConfig {
  readonly PREFIX: string = `/${name}`;
}

export default new Config();
