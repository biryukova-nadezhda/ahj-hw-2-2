import Action from '../Action';
import Table from '../Table';

const arrData = [
  {
    id: 26,
    title: 'Побег из Шоушенка',
    imdb: 9.30,
    year: 1994,
  },
];

test('should create a new class Action', () => {
  const expected = {
    data: arrData,
    table: new Table(arrData),
  };

  const result = new Action(arrData);
  expect(result).toEqual(expected);
});

/* test('should sort down data', () => {
  document.body.innerHTML = `<section class="bodySection"><table class="tableBody"><tbody>
  <tr data-id="25" data-title="Крёстный отец" data-year="1972" data-imdb="9.2">
  <td class="tdTable">25</td><td class="tdTable">Крёстный отец</td><td class="tdTable">(1972))</td>
  <td class="tdTable">9.20</td></tr>
  <tr data-id="26" data-title="Побег из Шоушенка" data-year="1994" data-imdb="9.3">
  <td class="tdTable">26</td><td class="tdTable">Побуг из Шоушенка</td>
  <td class="tdTable">(1994))</td>
  <td class="tdTable">9.30</td></tr></tbody></table></section>`;
  const expected = Array.from(document.querySelectorAll('.bodySection .tbody tr'));

  const act = new Action(arrData);
  act.start();
  const arr = Array.from(document.querySelectorAll('.table tbody tr'));
  act.sortArrDown(arr, "id");
  const result = Array.from(document.querySelectorAll('.table tbody tr'));
  expect(result).toEqual(expected);
})

test('should sort up data', () => {
  document.body.innerHTML = `<section class="bodySection"><table class="tableBody"><tbody>
  <tr data-id="26" data-title="Побег из Шоушенка" data-year="1994" data-imdb="9.3">
  <td class="tdTable">26</td>
  <td class="tdTable">Побуг из Шоушенка</td><td class="tdTable">(1994))</td>
  <td class="tdTable">9.30</td></tr>
  <tr data-id="25" data-title="Крёстный отец" data-year="1972" data-imdb="9.2">
  <td class="tdTable">25</td>
  <td class="tdTable">Крёстный отец</td>
  <td class="tdTable">(1972))</td><td class="tdTable">9.20</td></tr></tbody></table></section>`;
  const expected = Array.from(document.querySelectorAll('.bodySection .tbody tr'));

  const act = new Action(arrData);
  act.start();
  const arr = Array.from(document.querySelectorAll('.table tbody tr'));
  act.sortArrUp(arr, "id");
  const result = Array.from(document.querySelectorAll('.table tbody tr'));
  expect(result).toEqual(expected);
})

test('should sort down withaut class active', () => {
  document.body.innerHTML = `<section class="bodySection"><table class="tableBody"><tbody>
  <tr data-id="25" data-title="Крёстный отец" data-year="1972" data-imdb="9.2">
  <td class="tdTable">25</td>
  <td class="tdTable">Крёстный отец</td>
  <td class="tdTable">(1972))</td>
  <td class="tdTable">9.20</td></tr>
  <tr data-id="26" data-title="Побег из Шоушенка" data-year="1994" data-imdb="9.3">
  <td class="tdTable">26</td>
  <td class="tdTable">Побуг из Шоушенка</td>
  <td class="tdTable">(1994))</td>
  <td class="tdTable">9.30</td></tr></tbody></table></section>`;
  const expected = Array.from(document.querySelectorAll('.bodySection .tbody tr'));

  const act = new Action(arrData);
  act.start()

  const colTitle = Array.from(document.querySelectorAll('.table th'));
  const cell = colTitle[0];
  act.handler(cell);
  const result = Array.from(document.querySelectorAll('.table tbody tr'));
  expect(result).toEqual(expected);
})

test('should sort up width class active', () => {
  document.body.innerHTML = `<section class="bodySection"><table class="tableBody"><tbody>
  <tr data-id="26" data-title="Побег из Шоушенка" data-year="1994" data-imdb="9.3">
  <td class="tdTable">26</td>
  <td class="tdTable">Побуг из Шоушенка</td>
  <td class="tdTable">(1994))</td>
  <td class="tdTable">9.30</td></tr>
  <tr data-id="25" data-title="Крёстный отец" data-year="1972" data-imdb="9.2">
  <td class="tdTable">25</td><td class="tdTable">Крёстный отец</td>
  <td class="tdTable">(1972))</td><td class="tdTable">9.20</td></tr></tbody></table></section>`;
  const expected = Array.from(document.querySelectorAll('.bodySection .tbody tr'));

  const act = new Action(arrData);
  act.start();

  const colTitle = Array.from(document.querySelectorAll('.table th'));
  colTitle[0].classList.add("active");
  const cell = colTitle[0];
  act.handler(cell);
  const result = Array.from(document.querySelectorAll('.table tbody tr'));
  expect(result).toEqual(expected);
})
 */
