export class Logger {
  subscribers: Function[];

  constructor() {
    this.subscribers = [];
  }

  subscribe(logFn: Function) {
    this.subscribers.push(logFn);
  }

  unsubsribe(logFn: Function) {
    this.subscribers = this.subscribers.filter((el) => el != logFn);
  }

  broadcast(log: string) {
    for (let i = 0; i < this.subscribers.length; i++) {
      this.subscribers[i](log);
    }
  }

  log(message: string) {
    console.log(message);
  }
}
