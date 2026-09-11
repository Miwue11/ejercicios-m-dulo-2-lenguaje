const concat = (a, b) => [...a, ...b]
console.log(concat([1, 2, 3], [4, 5, 6]))

const concatInfinito = (...n) => n?.reduce((a, b) => [...a, ...b], [])
console.log(concatInfinito([1, 2, 3], [4, 5, 6], [7, 8, 9]))
