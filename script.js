//Практическое здание 2

function sayJS () {
    console.log ('Я учу JavaScript!');
}

sayJS ();

//Практическое здание 3



//Задание под звёздочкой ***

function calculateTotalPrice(quantity = 2, price = 15000000) {
    const result = quantity * price;
    return result.toLocaleString('ru-RU');
}

console.log (calculateTotalPrice())

// alert(`Стоимость покупки: ${calculateTotalPrice()} рублей`)
