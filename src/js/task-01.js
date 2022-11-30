const categoriesEl = document.querySelectorAll('.item');
const namesEl = document.querySelectorAll('h2');
const li = document.querySelectorAll('.item ul');

console.log('Number of categories:', categoriesEl.length);

console.log('Category:', namesEl[0].textContent);
console.log('Elements:', li[0].children.length);

console.log('Category:', namesEl[1].textContent);
console.log('Elements:', li[1].children.length);

console.log('Category:', namesEl[2].textContent);
console.log('Elements:', li[2].children.length);