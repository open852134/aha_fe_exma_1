const getMonthName = (date: Date, shortFormat = false) => {
  const fullMonthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const shortMonthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const monthNames = shortFormat ? shortMonthNames : fullMonthNames;
  return monthNames[date.getMonth()];
};

const formatDateToMonthYear = (date: Date) => {
  const month = getMonthName(date);
  const year = date.getFullYear();
  return `${month} ${year}`;
};

const formatShortDate = (date: Date) => {
  const month = getMonthName(date, true);
  const year = date.getFullYear();
  return `${month}, ${year}`;
};

const isSameDay = (date1: Date, date2: Date) => date1.getFullYear() === date2.getFullYear()
  && date1.getMonth() === date2.getMonth()
  && date1.getDate() === date2.getDate();

const isSameMonth = (date1: Date, date2: Date) => date1.getFullYear() === date2.getFullYear()
  && date1.getMonth() === date2.getMonth();

export {
  formatDateToMonthYear, formatShortDate, isSameDay, isSameMonth,
};
