export default class Section {
  constructor({ data, renderer }, cardsContainer) {
    this._data = data;
    this._renderer = renderer;
    this._cardsContainer = cardsContainer;
  }

  clear() {
    this._cardsContainer.innerHTML = "";
  }

  renderItems() {
    this.clear();

    this._data.forEach((item) => {
      this._renderer(item);
    });
  }

  addItem(element) {
    this._cardsContainer.append(element);
  }

  //para colocar 1 nuevo arreglo de datos
  setItems(data) {
    this._data = data;
  }
}
