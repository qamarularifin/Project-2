# Project-2: Book Finder App

## Background

Guess the color of hidden pegs. A deduction game where player
makes a limited number of guesses,
using logic to deduce what pegs were hidden.

## Link

https://qamarularifin.github.io/Project-1/

## Technologies

- React JS
- Google Books API
- New York Best Seller API
- Material UI

## Minimum requirement

1. Choose color from the selector pegs
2. Paint the guess pegs one row at a time
3. Other rows must not be able to be painted
4. A check button required to move on to the next row
5. A correct guess peg and correct position will be painted as red in the result peg box
6. A correct guess peg and wrong position will be painted as gray in the result peg box
7. A wrong guess peg and wrong position will not return any color
8. Answer pegs will be randomly generated and hidden
9. Answer pegs will be shown only after the game is over
10. An indication to show if the user has won or lost the game

### Struggles

- Determining how to move to the next row
- How to prevent the next row buttons from being clicked
- How to compare the guesses with the answers algorithm (converting the colors into integers instead)
- Creating algorithm to determine the gray pegs (correct color, wrong position). Initially, using .includes did not work as it does not cater for repeated numbers in the guess and answer array. Need to come up with a method which cancels out those guess and answers which have been checked. This is done by re-assigning the numbers as a string such as "x"

### Good to have

- A scoring system with local storage that can save the points scored
- Changing the difficulty level i.e, 5 guess pegs instead of 4 guess pegs
