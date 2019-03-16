/**
 * 日志记录工具
 */
import { environment } from 'src/environments/environment';

enum Level {
  OFF,
  ERROR,
  WARN,
  INFO,
  DEBUG,
  TRACE,
  ALL,
}

class LoggerService {
  private level: Level;

  readonly error: any;
  readonly warn: any;
  readonly info: any;
  readonly debug: any;
  readonly trace: any;

  constructor(level: string) {
    this.level = Level[level];

    this.error = this.isErrorEnabled && console.error || this.noop;
    this.warn = this.isWarnEnabled && console.warn || this.noop;
    this.info = this.isInfoEnabled && console.log || this.noop;
    this.debug = this.isDebugEnabled && console.log || this.noop;
    this.trace = this.isTraceEnabled && console.trace || this.noop;
  }

  private noop = (message?: any, ...optionalParams: any[]) => { }

  get isErrorEnabled() { return this.level >= Level.ERROR; }
  get isWarnEnabled() { return this.level >= Level.WARN; }
  get isInfoEnabled() { return this.level >= Level.INFO; }
  get isDebugEnabled() { return this.level >= Level.DEBUG; }
  get isTraceEnabled() { return this.level >= Level.TRACE; }
}

export const logger = new LoggerService(environment.loggerLevel);