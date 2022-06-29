import Table from '../Table';

const arrData = [
  {
    id: 26,
    title: 'Побег из Шоушенка',
    imdb: 9.30,
    year: 1994,
  },
];

test('should create a new class Table', () => {
  const expected = {
    data: arrData,
  };

  const result = new Table(arrData);
  expect(result).toEqual(expected);
});

/* test('should create a new section of the pattern ', () => {
  document.body.innerHTML = `<section class="bodySection"><table class="table"><thead>
  <tr><th class="thTable" data-sortParam="id">id</th>
  <th class="thTable" data-sortParam="title">title</th>
  <th class="thTable" data-sortParam="year">year</th>
  <th class="thTable" data-sortParam="imdb">imdb</th>
  </tr></thead><tbody></tbody></table></section>`;
  const expected = document.querySelector('.bodySection .table');

  const table = new Table(arrData);
  table.createStructTable();
  const result = document.querySelector('.tableSection .table');
  expect(result).toEqual(expected);
});

test('should add rows to table', () => {
  document.body.innerHTML = `<section class="bodySection"><table class="table"><tbody>
  <tr data-id="26" data-title="Побег из Шоушенка" data-year="1994" data-imdb="9.3">
  <td class="tdTable">26</td><td class="tdTable">Побег из Шоушенка</td><td class="tdTable">1994</td>
  <td class="tdTable">9.3</td></tr></tbody></table></section>`;
  const expected = document.querySelector('.bodySection .tbody');

  const table = new Table(arrData);
  table.createStructTable();
  table.addTr(arrData[0]);
  const result = document.querySelector('.tableSection tbody');
  expect(result).toEqual(expected);
})
 */
