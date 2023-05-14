https://www.youtube.com/watch?v=YTocEnDsMNw&ab_channel=TheCodingTrain
regular expressions
meta characters 
single character 

\d  ->  0-9
\w  -> A-Z, a-z, 0-9
\s  -> whitespace
.  -> any character whatsoever

quantifiers 

*  ->  0 or more
+  ->  1 or more. At least one
?  ->  0 or 1   at least. Optional
{min, max}  
{n} a single number

\w{5}   I want to find all five letter words in my text. (Winds words that are above five letters)
\s\w{5}\s   All five letter words plus spaces before and after the words

\w+ one or more word characters in a row
\w\d{5}

colou?rs? colors has a regular expression with optional u and optional s

Position metacharacters 

position of a character within the string itself

^   beginning 
$   end 
\   word boundary

This 
is 
sequence of words
Hello,
Match words at beginning of line

^\w+ the beginning of a line followed by one or more word characters 

Would match sequence and This, sequence, is Hello etc.

^\w+$ word character at the beginning and end of a line (no match)

\w+$ (would match w)





```
  function removeVowels(str) {
    return str.replace(/[aeiou]/gi, '');
  }
```

  The section /[aeiou]/gi is a regular expression that matches any character that is a vowel, regardless of its case. 

  The **forward slashes / at the beginning and end of the regular expression indicate that it is a regular expression literal.**

  The **square brackets [aeiou] define a character set that matches any character that is one of the letters "a", "e", "i", "o", or "u".**

  The g flag stands for "global", which means that the regular expression should match all instances of the pattern in the input string, not just the first one.

  The i flag stands for "case insensitive", which means that the regular expression should match both upper and lower case vowels.

---

One way to test a regex is using the .test() method. The .test() method takes the regex, applies it to a string (which is placed inside the parentheses), and returns true or false if your pattern finds something or not.

```
let testStr = "freeCodeCamp";
let testRegex = /Code/;
testRegex.test(testStr);
The test method here returns true.
```

---

You can search for multiple patterns using the alternation or OR operator: |.

This operator matches patterns either before or after it. For example, if you wanted to match the strings yes or no, the regex you want is /yes|no/.

You can also search for more than just two patterns. You can do this by adding more patterns with more OR operators separating them, like /yes|no|maybe/.

---

You can match both cases using what is called a flag. There are other flags but here you'll focus on the flag that ignores case - the i flag. You can use it by appending it to the regex. An example of using this flag is /ignorecase/i. This regex can match the strings ignorecase, igNoreCase, and IgnoreCase.

```
let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i; // Change this line
let result = fccRegex.test(myString);
```

---

So far, you have only been checking if a pattern exists or not within a string. You can also extract the actual matches you found with the .match() method.

To use the .match() method, apply the method on a string and pass in the regex inside the parentheses.

Here's an example:

```
"Hello, World!".match(/Hello/);
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex);
```

Here the first match would return ["Hello"] and the second would return ["expressions"].


Note that the .match syntax is the "opposite" of the .test method you have been using thus far:

```
'string'.match(/regex/);
/regex/.test('string');
```

---

Find More Than the First Match
So far, you have only been able to extract or search a pattern once.

let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Repeat/;
testStr.match(ourRegex);
Here match would return ["Repeat"].

To search or extract a pattern more than once, you can use the global search flag: g.

let repeatRegex = /Repeat/g;
testStr.match(repeatRegex);
And here match returns the value ["Repeat", "Repeat", "Repeat"]

Using the regex starRegex, find and extract both Twinkle words from the string twinkleStar.

Note
You can have multiple flags on your regex like /search/gi


# RegEx Notion

***Literals***. forward slashes / at the beginning and end of the regular expression indicate that it is a regular expression literal. Use this to find exactly matching patterns.

***Alternation*** or ***OR*** operator. This operator matches patterns either before or after it. For example, if you wanted to match the strings `yes` or `no`, the regex you want is `/yes|no/`.

***Ignore case***. Use the ‘i’ flag (flags are appended after the the regex) to ignore the case of the regex. This will find the pattern regardless of the case of the regex.

G***lobal search.*** To search or extract a pattern more than once, use the ***global search*** flag ‘g’. match() will return an array of all strings that match the regex.

The ***wildcard*** character/dot/period will match any one character. For example, if you wanted to match `hug`, `huh`, `hut`, and `hum`, you can use the regex `/hu./` to match all four words.

If two forward slashes demarkate /literals/ and the dot markates /./ matches for everything, square brackets are the middle ground. They allow you to define a group of characters you wish to match with ***‘character classes’*.** For example, if you want to match `bag`, `big`, and `bug` but not `bog`. You can create the regex `/b[aiu]g/` to do this. The `[aiu]` is the character class that will only match the characters `a`, `i`, or `u`.

Inside a character set you can define a range of characters/numbers to match using a hyphen. [a-e] would match all characters between and including a and e.

***Negated character set.*** Use to define a set of characters that you do not want to match. Located after the opening brackets, after the characters you do not want to match. 

Outside of a character set the caret ^ is used to search for patterns at the beginning of strings. 

Use  `+` to match a character (or group of characters) that appear one or more times in a row. For example, `/a+/g` would find one match in `abc` and return `["a"]`. Because of the `+`, it would also find a single match in `aabc` and return `["aa"]`. If it were instead checking the string `abab`, it would find two matches and return `["a", "a"]` because the `a` characters are not in a row

If + was used to look for characters that occur one or more times. * is used to match characters that occur zero or more times. This is a little confusing so visit this [link](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/match-characters-that-occur-zero-or-more-times) if you need further clarification.

***Lazy matching***. Regexs are by default ***greedy*** in that they find the longest possible part of a string that fits the regex pattern and returns it as a match. ? changes this to a lazy match, as in the shortest applicable match. Compare the regex `/t[a-z]*i/` applied to the string `"titanic",` (returning the match `["titani"]`) with the adjusted regex of `/t[a-z]*?i/` (which returns `["ti"]`). Note: place the ? before the last character where you want the pattern to end. 

Use $ to match patterns at the end of strings. (This is the opposite of ^ outside of a character set). This can also be called an anchor character.

This is an example of *shorthand character classes*. This is just a short cut equivalent of `/[A-Za-z0-9_]+/` and means any upper and lowercase letters plus numbers (and underscore).

If \w is the shortcut to match all alphanumerics, using capital W is the opposite of this i.e. all characters that are not alphanumerics. Or to write this using regex - `[^A-Za-z0-9_]`.

This is another example of a *shorthand character class.* It is the shortcut for matching digit characters. The equivalent written in regex would be `[0-9]`.

Logic dictates that this is the shortcut for matching non-digit characters. i.e.`[^0-9]`.

This is the regex that matches any whitespace. These include carriage return, tab, form feed, and new line characters, as well as spaces. Think of it as similar to the character class `[\r\t\f\n\v]`.

Logic dictates that this matches everything except whitespace. The regex equivalent of this would be `[^ \r\t\f\n\v]`.

***Quantity specifier.*** These are used to match a certain range of patterns. Two numbers separated by a common markate the upper and lower number of patterns. For example, to match only the letter `a` appearing between `3` and `5` times in the string `ah`, your regex would be `/a{3,5}h/`. To specify only the lower limit, keep the first number followed by a comma. 

```
let testStr = "freeCodeCamp";
let testRegex = /Code/;
testRegex.test(testStr);
```

```
"Hello, World!".match(/Hello/);
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex);
```

The .test() method takes a regex, and applies it to a string, and returns true or false if the pattern is found or not. 

Use the .match() method to extract actual matches found with this method. Apply the method on a string and pass in the regex inside the parentheses.

Here the first `match` would return `["Hello"]` and the second would return `["expressions"]`.