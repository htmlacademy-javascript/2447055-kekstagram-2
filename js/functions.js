//1)Функция для проверки длины строки.

const checkingLengthString = (string, maxLength) => {
    return (string.length <= maxLength);
};

checkingLengthString('sjdhfjwu7', 10);

//2)Функция для проверки, является ли строка палиндромом.

const checkingPalindrome = (initialString) => {

const preparedString = initialString.replaceAll(/\s/g, "").toLowerCase();

let reverseString = "";

for (let i = preparedString.length  - 1; i >= 0; i--) {
reverseString += preparedString[i];
}

return preparedString === reverseString;
};

//2.1)Оптимизированная версия.

const checkingPalindrome = (initialString) => {
const preparedString = initialString.replaceAll(/\s/g, "").toLowerCase();
const reverseString = preparedString.split("").reverse().join("");
return preparedString === reverseString;
};

//3)

const numberSearch = (entry) => {
const string = String(entry);
return parseInt(string.replaceAll(/\D/g, ""));
}

//3.1)

const numberSearch = (entry) => {
const string = (typeof entry === 'string') ? entry : String(entry);
return parseInt(string.replaceAll(/\D/g, ""));
}
