import { LogLevel } from '../logger/Logger';

export type EventCode = string;

export class Event<PayloadType> {
  public code: EventCode;

  public firedAt?: Date;

  public queuedAt?: Date;

  public payload?: PayloadType;

  public description: string;

  public logLevel: LogLevel;

  constructor(
    code: EventCode,
    description: string,
    payload?: PayloadType,
    logLevel?: LogLevel,
  ) {
    this.code = code;
    this.payload = payload;
    this.description = description;
    this.logLevel = logLevel ?? LogLevel.Debug;
  }
}

export type EventPayloadRecord<EventCodeEnum extends keyof any> = {
  [P in EventCodeEnum]: object
};

export type EventBuilder<PayloadType> = (payload?: PayloadType) => Event<PayloadType>;

export type EventBuilderRecord<
  EventCodeEnum extends keyof any,
  EventPayloadRecordType extends EventPayloadRecord<EventCodeEnum>,
> = {
  [P in keyof EventPayloadRecordType]: EventBuilder<EventPayloadRecordType[P]>;
};

export type EventCallback<PayloadType> = (event: Event<PayloadType>) => void;

export type EventCallbackRecord<
  EventCodeEnum extends keyof any,
  EventPayloadRecordType extends EventPayloadRecord<EventCodeEnum>
> = {
  [P in EventCodeEnum]: EventCallback<Event<EventPayloadRecordType[P]>>
};