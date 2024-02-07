/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */

var daysBetweenDates = function (date1, date2) {
  const millisecondsPerDay = 24 * 60 * 60 * 1000;

  const dateObject1 = new Date(date1);
  const dateObject2 = new Date(date2);

  const timeDifference = Math.abs(dateObject2 - dateObject1);
  const daysDifference = Math.floor(timeDifference / millisecondsPerDay);
  return daysDifference;
};
