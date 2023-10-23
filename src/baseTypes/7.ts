/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum DaysOfWeek{
  Sunday = 1,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday
}


function isWeekend(day: DaysOfWeek): boolean {
  return day=== DaysOfWeek.Sunday || day=== DaysOfWeek.Saturday}
