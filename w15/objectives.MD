Create a new module or write a new function calculate average footprint score
Use one or more of the HOF (filter, map, reduce) to calculate average footprint score. 
Once you have attempted this challenge use COMMIT MESSAGE - "w15 my attempt at the code, before I review other students or solution code".


Things that i needed to understand:
- When we created the table inside of the tblHeading function, we're able to directly add attributes such as IDs.  I thought we needed to create a whole new DIV below our current table to allow a new table with the avg to be formed.
- As i mentioned in my original post, things ended up kind of working out once i fixed the syntax of my code / ids.  There was a portion of the table that was then created that inserted new cells that I previously added before i got stuck.
- adding a document.createTextNode was something new i learned.  I didnt realize that we could create direct text into our newly created cells with this syntax.  I didn't know how to before but this method seems simple/self explanatory.
- Math.Floor removes decimals, important to know for future coding projects
