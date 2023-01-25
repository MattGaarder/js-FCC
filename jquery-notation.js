// Select existing DOM element
var rootEl = $('#root');

// Create a `<p>` element. (Any element - but within triangle brackets)
var authorName = $('<p>');

// Add text
authorName.text('~ Carol Dweck');

// Add class
authorName.attr('class', 'plain');
// Alternative method
titleEl.addClass('p-5');

// Append element to element
authorQuote.append(authorName);

// Event listener 
passwordBtnEl.on('click', function () {})














// Super clean password generator
function getPasswordCharacter() {
    return String.fromCharCode(Math.floor(Math.random() * 77) + 34);
}

function passwordGenerator(num) {
    var password = '';
    for (var i = 0; i < num; i++) {
      password += getPasswordCharacter();
    }
    return password;
}

passwordBtnEl.on('click', function () {
    var newPassword = passwordGenerator(10);
    passwordDisplayEl.text(newPassword);
});