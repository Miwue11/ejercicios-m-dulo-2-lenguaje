const head = ([n]) => n;
console.log(head([1, 2, 3, 4, 5, 6, 7, 8, 9]));

const tail = ([, ...n]) => n
console.log(tail([1, 2, 3, 4, 5, 6, 7, 8, 9]));

const init = (n) => n.slice(0, -1);
console.log(init([1, 2, 3, 4, 5, 6, 7, 8, 9]));

const last = (n) => n[n.length - 1]
console.log(last([1, 2, 3, 4, 5, 6, 7, 8, 9]));
