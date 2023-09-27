/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum DateOfWeek  {
  first = 'Monday',
  second = 'Tuesday',
  third = 'Wednesday',
  fourth = 'Thursday',
  fifth = 'Friday',
  sixth = 'Saturday',
  seventh = 'Sunday'

}

function isWeekend(date: DateOfWeek): boolean {
  if (date !== DateOfWeek.sixth && DateOfWeek.seventh) {
    return false;
  }
  return true;
}

