import Presenter from './presenter/presenter';
import FiltersView from './view/FiltersView';
import TripModel from './model/tripModel';
import { generateFilter } from './mocks/mock';
import { render } from './framework/render';

const filtersContainer = document.querySelector('.trip-controls__filters');
const tripModel = new TripModel();

const filters = generateFilter(tripModel.points);
render(new FiltersView(filters), filtersContainer);

const container = document.querySelector('.trip-events');
const tripPresenter = new Presenter(container, tripModel);

tripPresenter.init();
