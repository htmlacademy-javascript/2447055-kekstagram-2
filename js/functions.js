//1)Функция для проверки длины строки.

const checkingLengthString = (string, maxLength) => (string.length <= maxLength);

checkingLengthString('sjdhfjwu7', 10);

//2)Функция для проверки, является ли строка палиндромом.

const checkingPalindrome = (initialString) => {
  const preparedString = initialString.replaceAll(/\s/g, '').toLowerCase();
  const reverseString = preparedString.split('').reverse().join('');
  return preparedString === reverseString;
};

checkingPalindrome('Лёша на полке клопа нашёл');

//3)Функция для извлечения цифр из строки

const numberSearch = (entry) => {
  const string = String(entry);
  return parseInt(string.replaceAll(/\D/g, ''), 10);
};

numberSearch('1 кефир, 0.5 батона');
