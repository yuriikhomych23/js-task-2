//ОПЕРАТОРИ

// // first task

let city = "Київ";
city = "Львів";
let address = city;
alert(address);

// //second task

let num = 33;
let result = Math.pow(num, 3);
console.log(result);

//third task

let pen = 6;
let pricePen = 5.25;
let pencil = 4;
let pricePencil = 3.5;
let result = pen * pricePen + pencil * pricePencil;
console.log("Сума складає: "+ result);




//task1 IF ELSE 

let counter = 0;
let ask1 = prompt('В якому році появився JavaScript?');
if (ask1 == 1995) {
    ++counter;
} 

let ask2= prompt('В якому році почалась Перша світова ?');
if(ask2 == 2) {
   ++counter;
}

let ask3 = prompt('В якому році закінчилась Друга війна?');
if(ask3 == 2) {
   ++counter;
}

let ask4 = prompt('В якому році почалась світова війна?');
if(ask4 == 3) {
   ++counter;
}

let ask5 = prompt('В якому році Україна стала незлежною?');
if(ask5 == 3) {
   ++counter;
}

let ask6 = prompt('В якому почалась війна з Росією');
if(ask6 == 4) {
   ++counter;
}

let ask7 = prompt('В році закінчилась Перша світова війна?');

if(ask7 == 5) {
   ++counter;
}

let ask8 = prompt('В якому році  Перша світоваріа війна?');
if(ask8 == 6) {
   ++counter;
}

let ask9= prompt('В якому році івазакінчилась Перша світова війна?');
if(ask9 == 7) {
   ++counter;
}

let ask10 = prompt('В якому році закінчилась Перша світова війнаfee?');
if(ask10 == 8) {
   ++counter;
}


alert('Сума ваших балів складає: ' + counter);

//питання і відповіді самі звичайні головне що працює 



// task2
let name = prompt('Введіть ваше імя');
if(name == 'Імя'){
    alert('Введіть ваш пароль')
} else if(name == null) {
    alert('Вхід скасовано')
} else {
    alert('Я вас не знаю')
}


// task2.1
let password = prompt('Введіть пароль');
if(password == 'LOGOS') {
    alert('Ласкаво просимо')
} else if(password == null) {
    alert('Вхід скасований')
} else {
    alert('Пароль невірний')
}



// task 3
let months = prompt('');
if(months >=1 && months <= 2) {
    alert('Зима')
} else if(months >= 3 && months <= 5) {
    alert('Весна')
}else if(months >= 6 && months <= 8) {
    alert('Літо')
}else if(months >= 9 && months <= 11) {
    alert('Осінь')
} else if (months == 12) {
    alert('Зима')
} else {
    alert('Неможилво')
}






//task CYCLES


//task1 
let factorial = +prompt('Введіть число');
let result = 1;

for(let i = 1; i <= factorial; i++) {
    result = result * i;
}
console.log(result);


//task2 
for (let i = 1000; i <= 9999; i += 3) { 
    console.log(i)
}


//task3
for (let i = 1; i <= 110; i++) { 
    if(i % 2) {
        console.log(i)
    }
}


// task4
for( let i = 90; i >= 0; i-=5) {
        console.log(i)
}


// task5
for (let i = 2; i <= 2**20; i*=2 ) {
    console.log(i)
} 



// task6
for(let i = 2; i < 10000; i=2*i-1) {
    console.log(i)
}

// task7 
//  ....

// task8
//.......


// task while do while


//while


let ask = prompt('Введіть пароль');
let pass = 1111;
let i = 4;

while(i > 0) {
    if ( ask != pass) {
    alert(`Неправильний пароль. Кількість спроб: ${i}`);
    ask = prompt('Введіть пароль');
    i--;
    } else if( ask == pass) {
        alert('Вітаємо на сайті');
        break;
    } 
}

// без break чомусь замикання 


//do while

let ask = prompt('Введіть пароль');
let pass = 1111;
let i = 4;

do {
    if ( ask != pass) {
    alert(`Неправильний пароль. Кількість спроб: ${i}`);
    ask = prompt('Введіть пароль');
    i--;
    }else if ( ask == pass) {
        alert('Вітаємо на сайті')
    }
} while( i >= 0);




    
