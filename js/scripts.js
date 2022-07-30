let randomLoc = rand(1,8),
    location1 = randomLoc,
    location2 = location1 + 1,
    location3 = location2 + 1,
    guess, //номер поточної спроби
    hits = 0, //кількість попадань
    guesses = 0, //кількість спроб
    isSunk = false, //знищення корабля
    result 

function rand(min,max){
    return Math.floor(Math.random()*(max-min+1))+min
}

while (isSunk == false) {
    guess = prompt("В тебе є 5 спроб щоб знищити корабель. Обери число від 1 до 10")
    try {
        if (guess < 1 || guess > 10) {
            throw "Введіть вірний номер від 1 до 10"
        }
        if (isNaN(guess)) {
            throw "Ви ввели не число"
        }

    } catch (exception) {
        alert("Уважніше" + exception)
        continue
    } finally {
        guesses++
        let check = false
        if (guess == location1) {
            location1 = "disabled"
            check = true 
        }
        if (guess == location2) {
            location2 = "disabled" 
            check = true 
        }
        if (guess == location3) {
            location3 = "disabled" 
            check = true 
        }
        if (check) {
            alert("Попав")
            hits++
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
result = (hits / guesses) * 100
alert("Ваша точність складає" + result + "%")