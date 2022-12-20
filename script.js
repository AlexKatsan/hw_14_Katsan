//  TASK 1
const palindromeInput = document.getElementById('palindrome_input');
const checkPalindromeButton = document.getElementById('check_palindrome');
const palindromeResSpan = document.getElementById('palindrome_res');

function checkPalindrome() {
    const strInput = palindromeInput.value;
    if (isPalindrome(strInput)) {
        palindromeResSpan.textContent = "This is palindrome";
    } else {
        palindromeResSpan.textContent = "This is not palindrome";
    }
}

function isPalindrome(str) {
    const strRes = str.toLowerCase();
    for (let i = 0, j = strRes.length - 1; i < j; i++, j--) {
        if (strRes[i] !== strRes[j])
            return false;
    }
    return true;
}

//    TASK 2
const reversInput = document.getElementById('reverse_input');
const showReverseButton = document.getElementById('show_reverse');
const reverseResultSpan = document.getElementById('reverse_result');

function reverseString() {
    const inputIn = reversInput.value;
    reverseResultSpan.textContent = reverseStringFunc(inputIn);
}

function reverseStringFunc(str) {
    return str.split('').reverse().join('');
}

//  TASK 3
const stringValueInput = document.getElementById('string_value');
const characterValueInput = document.getElementById('character_value');
const resCalcSpan = document.getElementById('res_calc');

function getCount() {
    const stringVal = stringValueInput.value;
    const charVal = characterValueInput.value;
    resCalcSpan.textContent = countChar(stringVal, charVal);
}

function countChar(str, c) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        str.charAt(i) === c ? count++ : false;
    }
    return count;
}