// Select existing DOM element
// the $ sign is an alias for the jQuery function, so you can also use jQuery() instead of $() to accomplish the same thing.
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


// List:
$(selector).click() - // binds a function to the click event of the selected element
$(selector).hide() - // hides the selected element
$(selector).show() - // shows the selected element
$(selector).toggle() - // toggles the visibility of the selected element
$(selector).fadeIn() - // fades in the selected element
$(selector).fadeOut() - // fades out the selected element
$(selector).slideUp() - // slides up the selected element
$(selector).slideDown() - // slides down the selected element
$(selector).animate() - // animates the selected element
$(selector).attr() - // gets or sets the value of an attribute of the selected element.
$.ajax() - // Perform an asynchronous HTTP (Ajax) request.
$.each() - // A generic iterator function, which can be used to seamlessly iterate over both objects and arrays.
$.extend() - // Merge the contents of two or more objects together into the first object.
$.fn.extend() - // Add new methods to the jQuery prototype.
$.inArray() - // Search for a specified value within an array and return its index (or -1 if not found).
$.isArray() - // Determine whether the argument is an array.
$.isEmptyObject() - // Check to see if an object is empty (contains no enumerable properties).
$.isFunction() - // Determine if the argument passed is a Javascript function object.
$.isPlainObject() - // Check to see if an object is a plain object (created using "{}" or "new Object").
$.isNumeric() - // Determines whether its argument is a number.
.slideToggle() // method for showing or hiding elements with a sliding animation
.animate() // method for animating CSS properties
.val() // method for getting or setting the value of form elements
.append() // method for adding content to the end of elements
.prepend() // method for adding content to the beginning of elements
.text() // method for getting or setting the text content of elements
.html() // method for getting or setting the HTML content of elements
.attr() // method for getting or setting the value of attributes on elements
.remove() // method for removing elements from the DOM
.empty() // method for removing the child elements of an element.
// Event handling (e.g. .click(), .hover(), .on())
// DOM traversal and manipulation (e.g. .parent(), .children(), .append())
// CSS manipulation (e.g. .css(), .addClass(), .removeClass())
// Effects and animations (e.g. .fadeOut(), .slideUp(), .animate())
// Form handling (e.g. .val(), .submit(), .serialize())
// AJAX requests (e.g. .get(), .post(), .ajax())
// Utility functions (e.g. .each(), .map(), .extend())
// Data storage and retrieval (e.g. .data(), .removeData())
// Plugins and extensions
// Browser compatibility and feature detection (e.g. .support)






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