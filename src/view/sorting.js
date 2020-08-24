import {capitalizeStr} from '../utils/common.js';
import {createElement} from '../utils/render.js';

const SORTING_TYPES = [
  `event`,
  `time`,
  `price`,
];

const createSortingTemplate = (selectedSort) => {
  return (
    `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
      <span class="trip-sort__item  trip-sort__item--day">Day</span>

      ${SORTING_TYPES.map((item) =>`<div class="trip-sort__item trip-sort__item--${item}">
        <input
          id="sort-${item}"
          class="trip-sort__input  visually-hidden"
          type="radio"
          name="trip-sort"
          value="sort-${item}"
          ${item === selectedSort ? `checked` : ``}
        >
        <label class="trip-sort__btn" for="sort-${item}">
          ${capitalizeStr(item)}
          ${item !== `event` ? `<svg
            class="trip-sort__direction-icon" width="8" height="10" viewBox="0 0 8 10">
              <path d="M2.888 4.852V9.694H5.588V4.852L7.91 5.068L4.238 0.00999987L0.548 5.068L2.888 4.852Z"/>
            </svg>` : ``}
        </label>
      </div>`).join(`\n`)}

      <span class="trip-sort__item  trip-sort__item--offers">Offers</span>
    </form>`
  );
};

export default class SortingView {
  constructor(selectedSort = `event`) {
    this._element = null;
    this._selectedSort = selectedSort;
  }

  getTemplate() {
    return createSortingTemplate(this._selectedSort);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
