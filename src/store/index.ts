import _ from "lodash";
import NotificationType from "../enums/NotificationType";
import IObservable from "../interfaces/IObservable";
import IObserver from "../interfaces/IObserver";
import Polygon from "../models/elements/Polygon";
import Element from "../models/elements/Element";

type State = {
  ids: string[];
  elements: { [id: string]: Element };
  selectedElements: Element[];
};

export default class Store implements IObservable {

  private static instance: Store;
  private state!: State;
  private observers: { [key: number] : IObserver[] };

  private constructor() {
    this.observers = {};
    Object.keys(NotificationType).forEach(t => this.observers[t] = []);
  }

  static getInstance() {
    if (!Store.instance) {
      Store.instance = new Store();
      Store.instance.state = {
        ids: [],
        elements: {},
        selectedElements: [],
      };

      Store.instance.createElement(new Polygon([{ x: 50, y: 50 }, { x: 350, y: 50 }, { x: 350, y: 150 }, { x: 50, y: 150 }]));
    }

    return Store.instance;
  }

  /**
   * Observers
   */

  public subscribe(observer: IObserver, notificationType?: NotificationType) {
    this.observers[notificationType || NotificationType.Any].push(observer);
  }

  public unsubscribe(observer: IObserver, notificationType?: NotificationType) {
    this.observers[notificationType || NotificationType.Any] = this.observers[notificationType || NotificationType.Any].filter(o => o !== observer);
  }

  public notify(type: NotificationType, data: any) {
    if (type) this.observers[type].forEach(o => o.onMessage(type, data));
    if (type !== NotificationType.Any) this.observers[NotificationType.Any].forEach(o => o.onMessage(type, data));
  }

  /**
   * Elements
   */

  public getElements = (): Element[] => _.values(this.state.elements);

  public getElementById = (id: string): Element => this.state.elements[id];

  public createElement = (element: Element): void => {
    this.state.ids.push(element.id);
    this.state.elements[element.id] = element;

    this.notify(NotificationType.ElementsUpdated, this.getElements());
  }

  public deleteElement = (id: string): void => {
    this.state.ids = this.state.ids.filter(e => e !== id);
    delete this.state.elements[id];

    this.notify(NotificationType.ElementsUpdated, this.getElements());
  }

  public selectElement = (element: Element, clearSelection: boolean = false) => {
    if (clearSelection) { this.state.selectedElements.length = 0; }

    if (this.state.selectedElements.includes(element)) {
      this.deselectElement(element);
      return;
    }

    this.state.selectedElements.push(element);

    this.notify(NotificationType.SelectionChanged, this.state.selectedElements);
  }

  public deselectElement = (element: Element) => {
    this.state.selectedElements = this.state.selectedElements.filter(e => e !== element);

    this.notify(NotificationType.SelectionChanged, this.state.selectedElements);
  }

  public deselectAllElements = () => {
    this.state.selectedElements.length = 0;

    this.notify(NotificationType.SelectionChanged, this.state.selectedElements);
  }

  public getSelectedElements = (): Element[] => this.state.selectedElements;

  public getNonSelectedElements = (): Element[] => _.difference(this.state.ids, this.state.selectedElements.map(e => e.id))
                                                    .map(id => this.state.elements[id]);
}
