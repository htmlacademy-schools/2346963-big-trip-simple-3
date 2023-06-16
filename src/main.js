import Presenter from './presenter/presenter';
import FiltersView from './view/FiltersView';
import TripModel from './model/tripModel';
import { render } from './render';

const filtersContainer = document.querySelector('.trip-controls__filters');
render(new FiltersView(), filtersContainer);

const tripModel = new TripModel();
const container = document.querySelector('.trip-events');
const tripPresenter = new Presenter(container, tripModel);

tripPresenter.init();
