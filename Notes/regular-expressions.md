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

  The forward slashes / at the beginning and end of the regular expression indicate that it is a regular expression literal.

  The square brackets [aeiou] define a character set that matches any character that is one of the letters "a", "e", "i", "o", or "u".

  The g flag stands for "global", which means that the regular expression should match all instances of the pattern in the input string, not just the first one.

  The i flag stands for "case insensitive", which means that the regular expression should match both upper and lower case vowels.