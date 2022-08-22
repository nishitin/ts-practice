// 配列遊び
const array = [1, 2, 3, 4, 5, 6]
// answer [1, 1, 1, 2, 2, 3, 3, 3, 4, 4, 5, 5, 5, 6, 6]

// map関数
const map = array.map((x: number) => x % 2 ? [x, x, x] : [x, x])
console.log(map)

// reduce関数
const reduce = array.reduce((p, c) => c * c)
console.log(reduce)