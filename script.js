//Практическое здание 2

function sayJS () {
    console.log ('Я учу JavaScript!');
}

sayJS ();

//Практическое здание 3
const img = document.getElementById('img');
const content = document.getElementById('content');

function showNext(){
    img.src = './assets/images/ Faroe-Island.jpeg'
}

function showPrev(){
    img.src = './assets/images/lednik-argentina.jpeg'
}


//Задание под звёздочкой ***

function calculateTotalPrice(quantity = 2, price = 15000000) {
    const result = quantity * price;
    return content.textContent = `Стоимость покупки: ${result.toLocaleString('ru-RU')} рублей`
}

