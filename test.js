
test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { eurotoDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = eurotoDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(dollars).toBe(expected); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})


test("One euro should be 156.5 JPY", function() {
    // Importo la funcion desde app.js
    const { eurotoJPY } = require('./app.js');

    
    const JPY = eurotoJPY(3.5);

    
    const expected = 3.5 * 156.5;

    
    expect(JPY).toBe(expected); 
})

test("One euro should be 0.87 GBP", function() {
    // Importo la funcion desde app.js
    const { eurotoGBP } = require('./app.js');

    
    const GBP = eurotoGBP(3.5);

    
    const expected = 3.5 * 0.87;

    
    expect(GBP).toBe(expected); 
})
