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