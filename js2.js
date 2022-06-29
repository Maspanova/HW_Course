//1.Написать скриптик, который сосчитает и выведет результат от возведения 2 
//в степень 10, начиная со степени 1
let count=1
while (count<=10){
console.log("2 в степени", count, "=", 2**count)
count++
}


//1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, 
//в которую будет возводиться число 2

function stepen(a){
  for (let i=1; i<=a; i++){
    console.log('2 в степени', i, "=", 2**i)
  }
}
stepen(5)

//2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
let a=":)"
for (let i=1; i<=5; i++){
  console.log(a)  
  a=a+":)"
}
//2*Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
//Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода 
//e.g. function printSmile(stroka, numberOfRows)
// я не правилльно полняла задание. Я вывыжу со строки 2  всего 5 строк) 
// т.е функция задает номер строки для вывода  и количество строк.

let c=""
let numberOfRows
let stroka
function printSmile(stroka, numberOfRows){ 
for (let i=1; i<=5; i++){
   c=c+":)"
  if (stroka==i) {
    console.log(c)
   for (let n=1; n<numberOfRows; n++){
    c=c+":)"
    console.log(c)
   }
  } 
}
}
printSmile (2,5)



//2*Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
//Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода 
//e.g. function printSmile(stroka, numberOfRows)
// это 2 со звездочкой, где передаю смайлик (или что печатаем и количество строк)

let numberOfRows1
let stroka1
let b=" "
function printSmile1(stroka1, numberOfRows1){ 

for (let i=1; i<=numberOfRows1; i++){
b=b+stroka1
console.log(b)
}
} 
printSmile1 (";)", 3)

// 3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
// e.g. function getWordStructure(word)
// В консоли: 
// Слово (word) состоит из  (число) гласных и (число) согласных букв

// Проверки: 'case', 'Case', 'Check-list'


function getWordStructure(word){ 

let consC=0 //счетчик согласных
let vowelsC=0 //счетчик гласных

let vowels=["e","y","u","i","o","a"]//массив глассных
let cons='qwrtpsdfghjklzxcvbnm'.split('') // массив согласных
for (const char of word.toLowerCase()){
  if (vowels.includes(char)) vowelsC++
  else if (cons.includes(char)) consC++
}

  console.log ("Слово", word, "состоит из", vowelsC, "гласных и",consC, "согласных букв")
}
  getWordStructure('Check-list')

//   4**. Написать функцию, которая проверяет, является ли слово палиндромом
// e.g. function isPalindrom(word)

// Проверки: 'abba', 'Abba'

function isPalindrom(word) {
  word=word.toLowerCase()
for (i=0, j=word.length-1; i<word.length, j>=0; i++, j--) {
if (word[i]!==word[j]) {
  return false}
  else 
   return true
  }
  
}
console.log(isPalindrom("AbBa"))
