var randomLoc = Math.floor(Math.random() * 10) + 1
var location1 = randomLoc
var location2 = location1 + 1
var location3 = location2 + 1
var guess //номер поточної спроби
var hits = 0 //кількість попадань
var guesses = 0 //кількість спроб
var isSunk = false; //знищення корабля


while (isSunk == false) {
    guess = prompt ("В тебе є 5 спроб щоб знищити корабель. Обери число від 1 до 10")
    if (guess < 1 || guess > 10) {
        alert("Введіть вірний номер")
    } else {
        guesses = guesses + 1
        if (guess == location1 || guess == location2 || guess == location3) {
            alert("Попав")
            hits = hits + 1
            if (hits == 3) {
                isSunk = true;
                alert("Корабель знищено")
                alert("Ви знищили корабель за " + guesses + " спроби")
                break
            } 
        } else {
            alert("Промах")
        }
        if (guesses == 5) {
            alert("Спроби вичерпано. Ти програв")
            break
        } 
    }
}

