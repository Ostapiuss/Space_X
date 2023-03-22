class AppModalPublishSubscriber {
  private modals: Map<string, any>;

  constructor() {
    this.modals = new Map();
  }

  publish = (key, data) => {
    const subscriber = this.modals.get(key);

    if (!subscriber) {
      return;
    }

    subscriber(data);
  }

  subscribe = (key, callback) => {
    const modal = this.modals.get(key);

    if (modal) {
      return;
    }
    this.modals.set(key, callback);
  }

  unsubscribe = (key) => {
    this.modals.delete(key);
  }
}

export const AppModalService = new AppModalPublishSubscriber();

class AppModal {
  open = (data) => {
    AppModalService.publish('app-modal', data);
  }

  close = () => {
    AppModalService.publish('app-modal', null);
  }
}

export default new AppModal();
