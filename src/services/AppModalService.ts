class AppModalPublishSubscriber {
  private modals: Map<string, any>;

  constructor() {
    this.modals = new Map();
  }

  publish = (key: string, data:any) => {
    const subscriber = this.modals.get(key);

    if (!subscriber) {
      return;
    }

    subscriber(data);
  }

  subscribe = (key:string, callback: any) => {
    const modal = this.modals.get(key);

    if (modal) {
      return;
    }
    this.modals.set(key, callback);
  }

  unsubscribe = (key:string) => {
    this.modals.delete(key);
  }
}

export const AppModalService = new AppModalPublishSubscriber();

class AppModal {
  open = (data: any) => {
    AppModalService.publish('app-modal', data);
  }

  close = () => {
    AppModalService.publish('app-modal', null);
  }
}

export default new AppModal();
