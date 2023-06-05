
    Search for elements
importance: 4
Here’s the document with the table and form.

How to find?…

1.The table with id="age-table".
  let table = document.getElementById('age-table')

2.All label elements inside that table (there should be 3 of them).
  table.getElementsByTagName('label')
3.The first td in that table (with the word “Age”).
  table.getElementsByTagName('td')[0]
4.The form with name="search".
  document.querySelector('form[name="search"]')
5.The first input in that form.
  form.querySelector('input')
6.The last input in that form.
  form.querySelector('input')
Open the page table.html in a separate window and make use of browser tools for that.

