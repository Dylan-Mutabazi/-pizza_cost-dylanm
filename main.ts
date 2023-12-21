game.splash("lets calculate the cost of your pizza!")
let pizza = game.askForNumber("how many pizza do you want")
let Inches = game.askForNumber("how much inches is your pizza")
let labour_cost = 0.75
let rent = 1
let material = 0.5
let HST = 0.13
let subtotal = labour_cost + rent + material * Inches
subtotal = subtotal * pizza
let tax = subtotal * HST
let total = subtotal + tax
game.splash("the total of your pizza is " + total)
