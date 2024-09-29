let jumpNumber = document.getElementById("jump-number")
let previousNumbers = document.getElementById("previous-numbers")

let count = 0

function increment() {
  count += 1
  jumpNumber.textContent = count
}

function save() {
  let countStr = count + ", "
  previousNumbers.textContent += countStr
  count = 0
  jumpNumber.textContent = count
}
