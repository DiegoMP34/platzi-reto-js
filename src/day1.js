/*
En este desafío encontrarás una función llamada solution que recibe un parámetro llamado valor. 
Debes encontrar el tipo de dato del parámetro valor y retornarlo desde la función solution.
Recuerda que el parámetro valor será distinto por cada distinta forma en que ejecutemos la función solution.
*/

function solution(value) {
    return typeof value
}

console.log(solution("diego"))
console.log(solution(13))
console.log(solution(true))
console.log(solution([1])) // object ?? 