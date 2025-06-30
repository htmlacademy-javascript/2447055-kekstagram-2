//1)Функция для проверки длины строки.

let checkingLengthString = (string, maxLength) => {
    return (string.length <= maxLength);
};

checkingLengthString('sjdhfjwu7', 10);

//2)Функция для проверки, является ли строка палиндромом.

let checkingPalindrome = (initialString) => {

const preparedString = initialString.replaceAll(/\s/g, "").toLowerCase();

let reverseString = "";

for (let i = preparedString.length  - 1; i >= 0; i--) {
reverseString += preparedString[i];
}

return preparedString === reverseString;
};

//2.1)Оптимизированная версия.

let checkingPalindrome = (initialString) => {
const preparedString = initialString.replaceAll(/\s/g, "").toLowerCase();
const reverseString = preparedString.split("").reverse().join("");
return preparedString === reverseString;
};

//3)

let numberSearch = (entry) => {
let string = String(entry);
return parseInt(string.replaceAll(/\D/g, ""));
}

//3.1)

let numberSearch = (entry) => {
let string = (typeof entry === 'string') ? entry : String(entry);
return parseInt(string.replaceAll(/\D/g, ""));
}
