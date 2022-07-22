
## Day 15 of the 30-day JS Challenge: ##

** What we learned **
>Looping and Iterating - Reduce
>Looping and Iterating - Reduce Exercise
>Looping and Iterating - for, for in, for of, and while Loops

**My notes**

Reduce loops through the array and returns a single item from that array. This method expects 2 arguments; a callback function, and iniitial value.

The callback function parameter comes from the array values. Then after evaluation or doing something in the callback function, that value will be returned and set as the new initial value of the reduce method. Then loop will continue then.


In the callback function, it uses 2 parameters, the previous value, and the current value, respectively. The parameter reference is pointing in the array.
Based on my searching (not too sure tho), reduce is a recursive function. (Recursive functions runs itself on execution).

In the reduce exercise, we used split, filter, map, and reduce methods.

First, we have copied a text from a web page. (I just copied whats on the course).
We used the split method to split the string into an array containing each character out of it.

Then, we used the filter method, containing a callback 'isValid'. This callback used a Regex that checks if the character is an alphanumeric number. Also disregarded the casing of it. 

While on the map method, we created a function that returns a new array which transformed the original array to a lowercased value instead. This array will then be used by the reduce method. 

The reduce method, has arguments; a callback 'instanceCounter' and an empty object (which is the initial value(?))
The instanceCounter then checks each item (which in this case is a 'char'). A ternary operation then is being evaluated, it checks if the initial value of item is already existing, the initial value will add 1, if not that value will then be assigned of '1';

We also used here the Object.entries method and sort. 
By using the entries method, the result will be transformed into an array. Since it is already an array, we can now then use the sort method.

The for loops require 3 things:
1. an initialization
2. a condition
3. an increment/decrement expression

The initialization will be the starting point reference of the loop. The condition then will be the basis on how many times this loop will run. (Be careful of infinite loops). We can set most of the comparison operators in here. And lastly, the increment/decrement expression is the one responsible of moving along with the loop. This increments/decrements the value in the initialization.

.length property is very useful in using loops. This returns the length of the datatype it is referencing. Often times, we use this property on returning the length of an array, that we may or  may not know the exact length.

The for of loop is fairly new to JS. As wes said, it is used to loop through something 'iterable'. An iterable is anything that has length in it.
Wes also said that 'for of' loops are very useful in Promises. Which i dont have any idea rn 😂.

in the 'for in' loop, we tried to loop through the numbers array. And it only logged the index number instead of index value. The reason of this is we are actually getting the keys and it considered they numbers array as object instead.

While and Do-while loop runs infinitely if the condition supplied returns true.
This loop expects a condition as an argument, that will result a boolean value. After resulting a true, the block will then run and go back to the condition evaluation.
The difference of While-and Do while loop is that the Do-while loop is guaranteed to run atleast once. This is because the block will run first before evaluating the condition. 