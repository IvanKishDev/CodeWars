const numbers = [1, 15, 3, 42, 8, 19, 7, 25, 11, 33]

// Найди все четные числа
const evenNumbers = numbers.filter(num => num %2 === 0) // твой код
console.log(evenNumbers)

// Найди числа больше 10
const bigNumbers = numbers.filter(num => num > 10) // твой код
console.log(bigNumbers)

// Найди первое число больше 20
const firstBig = numbers.find(num => num > 20) // твой код
console.log(firstBig)


const students = [
    { name: "Анна", age: 19, grade: 7, course: 2 },
    { name: "Диана", age: 17, grade: 8, course: 1 },
    { name: "Виктория", age: 21, grade: 5, course: 3 },
    { name: "Григорий", age: 18, grade: 9, course: 2 },
    { name: "Борис", age: 20, grade: 4, course: 3 },
    { name: "Евгений", age: 16, grade: 6, course: 1 },
]

// Найди студентов 18+ лет
const adults = students.filter(student => student.age >= 18)
console.log(adults)

// Найди студентов с оценкой 8+
const excellentStudents = students.filter(student => student.grade >= 8) // твой код
console.log(excellentStudents)

// Найди студентов 2 курса
const secondCourse = students.filter(student => student.course === 2) // твой код
console.log(secondCourse)

// Найди взрослых студентов с оценкой выше 6
const adultGoodStudents = students.filter(student => student.age > 18 && student.grade > 6) // твой код
console.log(adultGoodStudents)

// Найди студента по имени 'Виктория'
const victoria = students.find(student => student.name === "Виктория") // твой код
console.log(victoria)

// Найди первого студента с оценкой 8+
const firstExcellent = students.find(student => student.grade > 8) // твой код
console.log(firstExcellent)

// Попытайся найти студента младше 16 лет
const tooYoung = students.find(student => student.age < 16) // твой код
console.log(tooYoung) // должно быть undefined





// 1. Функция для проверки совершеннолетия
function isAdult(person) {
    return person.age >= 18
}

// 2. Функция для проверки отличника (8+)
function isExcellent(student) {
    return student.grade >= 8
}

// 3. Функция для проверки курса
function isSecondCourse(student) {
    return student.course === 2
}

// Используй эти функции с методами filter и find
const adultStudents = students.filter(isAdult)
const firstExcellent = students.find(isExcellent)
const secondCourse = students.filter(isSecondCourse)
const firstSecondCourse = students.find(isSecondCourse)





const colors = ["красный", "синий", "зелёный", "жёлтый", "фиолетовый"]

// 1. Найди цвета с четными индексами (0, 2, 4...)
const evenIndexColors = colors.filter((color, index) => index %2 === 0)

// 2. Найди первый цвет, индекс которого больше 2
const colorAfterIndex2 = colors.find((color, index) => index > 2)