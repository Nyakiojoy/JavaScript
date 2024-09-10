function isPalindrome(str) {
    const cleaned = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    return cleaned === cleaned.split('').reverse().join('');
}

console.log(isPalindrome('A man, a plan,a canal, Panama')); //true
console.log(isPalindrome('Was it a car or a cat I saw')); //true
console.log(isPalindrome('Hello, World!')); //false


function reverseString(str) {
    return str.split('').reverse().join('');
}  

console.log(reverseString('Hello, World!')); //false


function longestPalindromicSubstring(s) {
    if (s.length < 2) return s;

    let start = 0, maxLength = 1;

    function expandAroundCenter(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            if (right - left + 1 > maxLength) {
                start = left;
                maxLength = right - left + 1;
            }
            left--;
            right++;
        }
    }

    for (let i = 0; i < s.length; i++) {
        expandAroundCenter(i, i); // Odd length palindromes
        expandAroundCenter(i, i + 1); // Even length palindromes
    }

    return s.substring(start, start + maxLength);
}
console.log(longestPalindromicSubstring('babad')); // output 'bab' or 'aba'
console.log(longestPalindromicSubstring('cbbd')); // output 'bb' 


function areAnagrams(str1, str2) {
    const formatString = (str) => str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
    return formatString(str1) === formatString(str2);
}
console.log(areAnagrams('listen', 'silent'))
console.log(areAnagrams('Hello', 'World'))


function removeDuplicates(str) {
    let result = '';
    for (let char of str) {
        if (!result.includes(char)) {
            result += char;
        }
    }
    return result;
}
console.log(removeDuplicates('programming'))
console.log(removeDuplicates('hello world'))
console.log(removeDuplicates('aaaaa'))
console.log(removeDuplicates('abcd'))
console.log(removeDuplicates('aabbcc'))

function countPalindromes(str) {
    const uniquePalindromes = new Set();

    function expandAroundCenter(left, right) {
        while (left >= 0 && right < str.length && str[left] === str[right]) {
            uniquePalindromes.add(str.slice(left, right + 1));
            left--;
            right++;
        }
    }

    for (let i = 0; i < str.length; i++) {
        expandAroundCenter(i, i); // Odd length palindromes
        expandAroundCenter(i, i + 1); // Even length palindromes
    }

    return uniquePalindromes.size;
}
console.log(countPalindromes('ababa'))
console.log(countPalindromes('racecar'))
console.log(countPalindromes('aabb'))
console.log(countPalindromes('a'))
console.log(countPalindromes('abc'))

function longestCommonPrefix(strs) {
    if (!strs.length) return '';

    let prefix = strs[0];

    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, -1);
            if (prefix === '') return '';
        }
    }

    return prefix;
}
console.log(longestCommonPrefix(['flower' ,'flow', 'flight']))
console.log(longestCommonPrefix(['dog' ,'racecar', 'car']))
console.log(longestCommonPrefix(['interspecies' ,'interstellar', 'interstate']))
console.log(longestCommonPrefix(['prefix' ,'prefixes', 'preform']))
console.log(longestCommonPrefix(['apple' ,'banana', 'cherry']))

function isPalindromeCaseInsensitive(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleaned = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    // Check if the cleaned string is equal to its reverse
    return cleaned === cleaned.split('').reverse().join('');
}
console.log(isPalindromeCaseInsensitive('Aba'))
console.log(isPalindromeCaseInsensitive('Racecar'))
console.log(isPalindromeCaseInsensitive('Palindrome'))
console.log(isPalindromeCaseInsensitive('Madam'))
console.log(isPalindromeCaseInsensitive('Hello'))
