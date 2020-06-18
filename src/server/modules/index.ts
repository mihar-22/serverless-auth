import { ModuleProvider } from '../support/ModuleProvider';
import { MailModule } from './mail/MailModule';
import { AuthModule } from './auth/AuthModule';
import { SessionModule } from './session/SessionModule';
import { DatabaseModule } from './database/DatabaseModule';
import { HttpModule } from './http/HttpModule';
import { EventsModule } from './events/EventsModule';
import { EncryptionModule } from './encryption/EncryptionModule';
import { LoggerModule } from './logger/LoggerModule';
import { CookiesModule } from './cookies/CookiesModule';

export const coreModules: ModuleProvider<any>[] = [
  LoggerModule,
  EncryptionModule,
  EventsModule,
  CookiesModule,
  MailModule,
  HttpModule,
  DatabaseModule,
  SessionModule,
  AuthModule,
];
