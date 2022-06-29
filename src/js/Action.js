import Table from './Table';

export default class Action {
  constructor(data) {
    this.data = data;
    this.table = new Table(this.data);
  }

  sortArrDown(arr, key) {
    this.name = 'sortArrDown';
    return arr.sort((a, b) => (a.dataset[key] > b.dataset[key] ? 1 : -1));
  }

  sortArrUp(arr, key) {
    this.name = 'sortArrUp';
    return arr.sort((a, b) => (a.dataset[key] > b.dataset[key] ? -1 : 1));
  }

  addListener() {
    const colTitle = Array.from(document.querySelectorAll('.table th'));

    colTitle.forEach((cell) => {
      cell.addEventListener('click', () => {
        this.handler(cell);
      });
    });
  }

  handler(cell) {
    const elCell = cell;
    const key = cell.dataset.sortparam;
    const tbody = document.querySelector('.table tbody');
    const arr = Array.from(document.querySelectorAll('.table tbody tr'));
    let sortData;

    if (cell.className.includes('active')) {
      sortData = this.sortArrUp(arr, key);
      elCell.className = 'thTable';
    } else {
      sortData = this.sortArrDown(arr, key);
      elCell.className = 'thTable active';
    }

    tbody.innerHTML = '';
    this.addSortTr(sortData);
    return sortData;
  }

  addSortTr(data) {
    this.name = 'addSortTr';
    const tbody = document.querySelector('.table tbody');
    data.forEach((el) => {
      tbody.insertBefore(el, null);
    });
  }

  start() {
    this.table.start();
    this.addListener();
  }
}
