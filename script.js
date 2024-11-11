const textInput = document.querySelector('#text-input');
const checkBtn = document.querySelector('#check-btn');
const result = document.querySelector('#result');

checkBtn.onclick = () => {
    // grab the text content from the input field
    const text = textInput.value;

    // check if the text is empty
    if (!text) {
        alert('Please input a value')
    } else {
        // trim it
        const trimmedText = text.trim();

        // remove all special characters, spaces and convert to lowercase
        const cleanedText = trimmedText.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

        // display the result
        result.innerText = `${text} is ${isPalindrome(cleanedText) ? '' : 'not'} a palindrome`;
    }
}

function isPalindrome(text) {
    // split it into array of characters, reverses and joins back
    const reversedText = text.split('').reverse().join('');
    return text === reversedText;
}