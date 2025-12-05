/*
 * Напишите код, который будет определять оценку студента (grade) в зависимости от балла (score).
 * Балл может быть целым числом от 0 до 100, а оценки 'F' (0 - 49), 'D' (50 - 69), 'C' (70-79), 'B' (80 - 89), 'A' (90 - 100)
 * Результат сохраните в переменной grade.
 */

const score = 70 // тестовое значение, можно изменять
let grade
// your code

let gradeF = 49;
let gradeD = 69;
let gradeC = 79;
let gradeB = 89;
let gradeA = 100;


switch (true) {
    case score <= gradeA && score > gradeB:
        grade = 'A';
        break;
    case score <= gradeB && score > gradeC:
        grade = 'B';
        break;
    case score <= gradeC && score > gradeD:
        grade = 'C';
        break;
    case score <= gradeD && score > gradeF:
        grade = 'D';
        break;
    case score <= gradeF:
        grade = 'F';
        break;
    default:
        grade = 'A';
        break;
}
