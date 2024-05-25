// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const eurotoDollar = (Euros) => {
    return Euros * oneEuroIs.USD
}

const eurotoJPY = (Euros) => {
    return Euros * oneEuroIs.JPY
}

const  eurotoGBP = (Euros) => {
    return Euros * oneEuroIs.GBP
}


module.exports= {eurotoDollar, eurotoJPY, eurotoGBP}