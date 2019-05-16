import IObserver from "../interfaces/IObserver";
import NotificationType from "../enums/NotificationType";

export default interface IObservable {
  subscribe(observer: IObserver, notificationType?: any): void;
  unsubscribe(observer: IObserver, notificationType?: any): void;
  notify(notificationType: NotificationType, data?: any): void;
}