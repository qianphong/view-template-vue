export function createRandom(max: number, min = 0, fractionDigits = 0) {
  return function () {
    const num = Math.floor(Math.random() * (max - min + 1) + min)

    if (fractionDigits) return Number(num.toFixed(fractionDigits))
    return num
  }
}
