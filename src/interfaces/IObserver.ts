export default interface IObserver {
  onMessage<T>(notificationType: any, data?: T): void;
}