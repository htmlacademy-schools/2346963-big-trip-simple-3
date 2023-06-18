import {render} from './framework/render.js';
import ListPresenter from './presenter/presenter-trip-events.js';
import TripModel from './model/points-model.js';
import FilterModel from './model/filter-model.js';
import FilterPresenter from './presenter/filter-presenter.js';
import NewPointButtonView from './view/new-point-button-view.js';
import PointsApiService from './pointsApiService.js';

const AUTHORIZATION = 'Basic rtvuus89dgufs';
const END_POINT = 'https://18.ecmascript.pages.academy/big-trip';

const filtersContainer = document.querySelector('.trip-controls__filters');
const pointsContainer = document.querySelector('.trip-events');
const buttonContainer = document.querySelector('.trip-main');

const tripPointsModel = new TripModel(new PointsApiService(END_POINT, AUTHORIZATION));
const filterModel = new FilterModel();

const tripPresenter = new ListPresenter(pointsContainer, tripPointsModel, filterModel);
tripPresenter.init();
const filterPresenter = new FilterPresenter(filtersContainer, filterModel, tripPointsModel);

filterPresenter.init();

const newPointButtonComponent = new NewPointButtonView();

const handleNewPointFormClose = () => {
  newPointButtonComponent.element.disabled = false;
};

const handleNewPointButtonClick = () => {
  tripPresenter.createPoint(handleNewPointFormClose);
  newPointButtonComponent.element.disabled = true;
};

tripPointsModel.init()
  .catch(() => {
    newPointButtonComponent.element.disabled = true;
  })
  .finally(() => {
    render(newPointButtonComponent, buttonContainer);
    newPointButtonComponent.setClickHandler(handleNewPointButtonClick);
  });
