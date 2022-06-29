export default class Table {
  constructor(data) {
    this.data = data;
  }

  createStructTable() {
    this.name = 'createStructTable';
    const table = `
      <table class="table">
        <thead>
          <tr>
            <th class="thTable" data-sortParam="id">id</th>
            <th class="thTable" data-sortParam="title">title</th>
            <th class="thTable" data-sortParam="year">year</th>
            <th class="thTable" data-sortParam="imdb">imdb</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    `;

    const section = document.querySelector('.tableSection');
    section.insertAdjacentHTML('afterbegin', table);
  }

  addTr(obj) {
    this.name = 'addTr';
    const tbody = document.querySelector('.table tbody');
    const {
      id, title, year, imdb,
    } = obj;

    const trTable = `<tr data-id="${id}" data-title="${title}" data-year="${year}" data-imdb="${imdb}">
    <td class="tdTable">${id}</td>
    <td class="tdTable">${title}</td>
    <td class="tdTable">(${year})</td>
    <td class="tdTable">${imdb.toFixed(2)}</td>
    </tr>`;

    tbody.insertAdjacentHTML('beforeend', trTable);
    return trTable;
  }

  start() {
    this.createStructTable();
    this.data.forEach((obj) => {
      this.addTr(obj);
    });
  }
}
