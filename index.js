// write your code below!
var name = "Brandy"
var holiday = "Valentines Day"
var days = 16

function happyHolidays(){
  return "Happy Holidays!"
}

function happyHolidaysTo(){
  return `Happy Holidays, ${name}!`
}

function happyHolidayTo() {
  return `Happy ` + ${holiday} + `,` + ${name} + `!`
}

function holidayCountdown() {
  return `It's ${days} days until ${holiday}!`
}
