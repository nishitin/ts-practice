// 配列遊び
const array = [1, 2, 3, 4, 5, 6]
// answer [1, 1, 1, 2, 2, 3, 3, 3, 4, 4, 5, 5, 5, 6, 6]

// map関数
const map = array.map((x: number) => x % 2 ? [x, x, x] : [x, x])
console.log(map)

// flatMap
const flatMap = array.flatMap((n) => Array(n % 2 + 2).fill(n))
console.log(flatMap)