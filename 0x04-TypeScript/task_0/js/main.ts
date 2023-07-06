interface Student {
  firstname: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstname: 'Le Roy',
  lastName: 'Powell-Louis',
  age: 18,
  location: 'Nigeria',
}

const student2: Student = {
  firstname: 'Jessie',
  lastName: 'Powell-Louis',
  age: 20,
  location: 'Germany',
}

const studentsList: Array<Student> = [student1, student2];

const body: HTMLBodyElement = document.querySelector('body');

const table: HTMLTableElement = document.createElement('table');

const thead: HTMLTableSectionElement = document.createElement('thead');

const tableHeadRow: HTMLTableRowElement = document.createElement('tr');

const th1: HTMLTableCellElement = document.createElement('th');
const th2: HTMLTableCellElement = document.createElement('th');
const th3: HTMLTableCellElement = document.createElement('th');
const th4: HTMLTableCellElement = document.createElement('th');

const tbody: HTMLTableSectionElement = document.createElement('tbody');

th1.innerText = 'first name';
th2.innerText = 'last name';
th3.innerText = 'age';
th4.innerText = 'location';

th1.style.border = '1px solid black';
th2.style.border = '1px solid black';
th3.style.border = '1px solid black';
th4.style.border = '1px solid black';

th1.style.padding = '10px';
th2.style.padding = '10px';
th3.style.padding = '10px';
th4.style.padding = '10px';

tableHeadRow.appendChild(th1);
tableHeadRow.appendChild(th2);
tableHeadRow.appendChild(th3);
tableHeadRow.appendChild(th4);

thead.appendChild(tableHeadRow);

table.appendChild(thead);

for (const student of studentsList) {
  const tableBodyRow: HTMLTableRowElement = document.createElement('tr');

  const td1: HTMLTableCellElement = document.createElement('td');
  const td2: HTMLTableCellElement = document.createElement('td');
  const td3: HTMLTableCellElement = document.createElement('td');
  const td4: HTMLTableCellElement = document.createElement('td');

  td1.innerText = student.firstname;
  td2.innerText = student.lastName;
  td3.innerText = student.age as unknown as string;
  td4.innerText = student.location;

  td1.style.border = '1px solid black';
  td2.style.border = '1px solid black';
  td3.style.border = '1px solid black';
  td4.style.border = '1px solid black';

  td1.style.padding = '10px';
  td2.style.padding = '10px';
  td3.style.padding = '10px';
  td4.style.padding = '10px';

  tableBodyRow.appendChild(td1);
  tableBodyRow.appendChild(td2);
  tableBodyRow.appendChild(td3);
  tableBodyRow.appendChild(td4);

  tbody.appendChild(tableBodyRow);
}

table.appendChild(tbody);

table.style.borderCollapse = 'collapse';
table.style.border = '1px solid black';

body.appendChild(table);
