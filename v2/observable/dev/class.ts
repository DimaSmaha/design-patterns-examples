export class Observer {
  subscribers: any[];

  constructor() {
    this.subscribers = [];
  }

  subscribe(fn: Function) {
    this.subscribers.push(fn);
  }

  unsubscribe(fn: Function) {
    this.subscribers = this.subscribers.filter((items) => items != fn);
  }

  broadcast(data: string) {
    for (let i = 0; i < this.subscribers.length; i++) {
      this.subscribers[i](data);
    }
  }
}
