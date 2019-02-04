import { observable, computed, action } from 'mobx';
import { autobind } from 'core-decorators';
import debounce from 'lodash-decorators/debounce';
import isEmpty from 'lodash/isEmpty';
import every from 'lodash/every';
import SelectStore from './SelectStore';
import FetchStore from './FetchStore';

export default class ListStore extends FetchStore {
  @observable filter = {};
  @observable showFilter = false;
  @observable tab = null;
  @observable sort = {};
  @observable search = '';

  constructor(...args) {
    super(...args);
    if (!this.selectStore) this.selectStore = new SelectStore({ listStore: this });
  }

  @action
  setStateAndUpdate(...args) {
    super.setState(...args);
    this.update();
    return this;
  }

  @debounce(100)
  async update() {
    await this.fetch();
  }

  /**
   * Getters and map
   */
  @computed
  get hasFilter() {
    return !every(Object.values(this.filter), a => isEmpty(a)) || !isEmpty(this.search);
  }

  map(...args) {
    return this.items.map(...args);
  }

  /**
   * Pages
   */

  getCurrentPage() {
    return Math.floor(this.skip / this.limit) + 1;
  }
  // from 1
  // null если count === null
  getTotalPages() {
    if (this.count === null) return null;
    return Math.floor(this.count / this.limit) + 1;
  }
  /**
    * @param {Number} page - page from 1
    */
  @autobind
  setPage(page) {
    this.setStateAndUpdate({
      skip: Math.floor((page - 1) * this.limit),
    });
  }

  /**
   * Handlers
   */

  @autobind
  setTab(tab) {
    this.setStateAndUpdate({
      tab,
      skip: 0,
    });
  }

  @autobind
  setLimit(limit) {
    this.setStateAndUpdate({
      limit,
    });
  }

  @autobind
  setFilter(values) {
    this.setStateAndUpdate({
      filter: values,
      skip: 0,
    });
  }

  @autobind
  toggleFilter() {
    this.setState({
      showFilter: !this.showFilter,
    });
  }

  @autobind
  setSearch(search) {
    this.setStateAndUpdate({
      search,
      skip: 0,
    });
  }

  @autobind
  handleChangeLimit(limit) {
    this.setStateAndUpdate({
      limit,
    });
  }

  @autobind
  clearFilter() {
    this.setStateAndUpdate({
      filter: {},
      search: '',
      skip: 0,
    });
  }

  // @autobind
  // toggleSelectAll() {
  //   if (this.selectStore.globalCheck) {
  //     this.unselectAll();
  //   } else {
  //     this.selectAll();
  //   }
  // }

  // selectAll() {
  //   const items = this.items.filter((item) => {
  //     return !this.selectStore.isSelect(item.id);
  //   });
  //   this.selectStore.selectAll(map(items, 'id'), items);
  //   this.selectStore.globalCheck = true;
  // }

  // unselectAll() {
  //   this.selectStore.unselectAll();
  //   this.selectStore.globalCheck = false;
  // }

  // @autobind
  // isIndeterminateGlobalSelect() {
  //   return (
  //     !!this.selectStore.ids.length &&
  //     this.items.length !== this.selectStore.ids.length &&
  //     union(this.items.map(i => i._id), this.selectStore.ids).length === this.items.length
  //   );
  // }

  /**
   * Пока выбирается только одно поле
   * Первый клик - равен -1, те сортирвка по возрастанию (возможно нужно вторым аргументов задавать)
   * @param {String} field - поле для которого инверсируют сортировку
   */
  @autobind
  toggleSort(field) {
    // пока только одна сортировка
    const value = this.sort && this.sort[field];
    this.setStateAndUpdate({
      sort: {
        [field]: value === 1 ? -1 : 1,
      },
      skip: 0,
    });
  }
}
