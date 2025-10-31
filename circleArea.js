const arg = process.argv.slice(2)

function circleArea (radius) {
  let area = Math.PI * (radius**2);
  return console.log(
    `Yarıçapı ${radius} olan dairenin alanı: ${area.toFixed(3)}`
  )
}

circleArea(arg[0]);