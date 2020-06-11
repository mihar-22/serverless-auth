import { injectable } from 'inversify';
import { Logger } from './Logger';

@injectable()
export class FakeLogger implements Logger {
  public level = 'debug';

  public silent = false;

  public transports = [];

  public error = jest.fn();

  public warn = jest.fn();

  public info = jest.fn();

  public http = jest.fn();

  public verbose = jest.fn();

  public debug = jest.fn();

  public silly = jest.fn();

  public log = jest.fn();

  public add = jest.fn();

  public remove = jest.fn();

  public clear = jest.fn();

  public close = jest.fn();
}