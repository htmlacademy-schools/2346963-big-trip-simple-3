import PointView from './view/RoutePointView.js';
import RedactionView from './view/RedactionFormView.js';
import CreationFormView from './view/CreationFormView.js';
import SortingView from './view/SortView.js';
import TripEventsView from './view/EventListView.js';
import {render} from './render.js';

export default class Presenter {

  pointsList = new TripEventsView();

  constructor({container}) {
    this.container = container;
  }

  init() {

    render(new SortingView(), this.container);
    render(this.pointsList, this.container);
    render(new RedactionView(), this.pointsList.getElement());
    render(new CreationFormView(), this.pointsList.getElement());

    for (let i = 0; i < 3; i++) {
      render(new PointView(), this.pointsList.getElement());
    }

  }

}
