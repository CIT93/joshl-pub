Examine your water consumption solution:
this is how i would handle it:
- create the function that utilizing washing the dish washer / washing machine
option 1:
- have 2 different functions, 1 has dish washer then 1 has washing machine
option 2:
- have 1 function, have a drop down menu that says, do you have both a dish washer and washing machine?  if yes, multiply waterConsumptionPoints by 2, if no, multiply waterConsumptionPoints by 1
i like option 2 the most, i think this way would be easier on paper but we shall see if i have troubles coding it.


What i tried:
PART 1:
- i made a new div with the checkbox and made it have the value of "2" so that i could multiply the waterconsumption points by the checkbox value (2) when selected.
- i formatted something wrong within the div or inside of the class that is restricting the value of "2" from being removed when the checkbox is not selected.
- I am unsure how to allow the checkbox to have a "default vaule" of "1" when it is not selected.  My thought process was that when it is unselected, it will multiply the water consumption points by "1", resulting in no additional CFP points.
- I messed around with my main.js file for targetting the "both" checkbox but I am unsure if this is the proper syntax and way to enable a default value of 1 when the checkbox is left unchecked.  
- I tried watching the w16 code discussion video explaining the different way of writing the if/else statement for the checkbox but i am totally confused.  I will look into the solution after i attempt the next part.

Part 2:
- Everything should be working as intended.  I didnt have any issues and replicated how the water consumption looks like.


What I learned from watching the solution:
I had a lot of trouble understanding the boolean when using check boxes and making it become an if/else statement.
I learned the format behind it now though:
(e.target(checkbox ID).checked) ? (true) : (false);
the "?" acts as the boolean statement and the ":" separates the statements to determine what happens if its checked (true) and what happends if it is not checked (false).
This is what I mainly had issues with as everything else worked pretty flawlessly.  