
function dissapear() {
  document.getElementById('div').style.display="none"
}
function appear() {
  document.getElementById('div').style.display="block"
  document.getElementById('div').innerHTML=5 % 4
}
function welcome() {
  let name = prompt("What is your name?")
  document.getElementById('div').innerHTML='Hello, ' + name
}
function birthday() {
  let daycolour = document.getElementById('day').value
  let monthcolour = document.getElementById('month').value
  let yearcolour = document.getElementById('year').value
  daycolour = Math.round(daycolour * 8 + 7)
  monthcolour = Math.round(monthcolour * 21 + 3)
  yearcolour = Math.round(yearcolour / 8 + 2)
  console.log(`Day: ${daycolour}\nMonth: ${monthcolour}\nYear: ${yearcolour}`)
  document.getElementById('birthdaycolour').style.backgroundColor = `rgb(${daycolour}, ${monthcolour}, ${yearcolour})`
}
function error() {
  let day = document.getElementById('day').value
  if (isNaN(day) || day <= 32) {
    document.getElementById('day').style.backgroundColor = `rgb(255, 59, 59)`
    document.getElementById('birthdaycolour').style.backgroundColor = `rgb(255, 255, 255)`
  }
  else {
    document.getElementById('day').style.backgroundColor = `rgb(255, 255, 255)`
  }
  let month = document.getElementById('month').value
  if (isNaN(month) || month <= 13) {
    document.getElementById('month').style.backgroundColor = `rgb(255, 59, 59)`
    document.getElementById('birthdaycolour').style.backgroundColor = `rgb(255, 255, 255)`
  }
  else {
    document.getElementById('month').style.backgroundColor = `rgb(255, 255, 255)`
  }
  let year = document.getElementById('year').value
  if (isNaN(year)|| year <= 2026 || year >= 1900) {
    document.getElementById('year').style.backgroundColor = `rgb(255, 59, 59)`
    document.getElementById('birthdaycolour').style.backgroundColor = `rgb(255, 255, 255)`
  }
  else {
    document.getElementById('year').style.backgroundColor = `rgb(255, 255, 255)`
    birthday()
  }
}