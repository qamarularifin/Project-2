# Project-2: Book Finder App

## Background

Guess the color of hidden pegs. A deduction game where player
makes a limited number of guesses,
using logic to deduce what pegs were hidden.

## Link

## Technologies

- React JS
- Google Books API
- New York Best Seller API
- Material UI
- Local Storage for Favourite page

## Features

### Google Book Finder page (Homepage)

1. Allow users to search book title based on the google books API
2. Users can select search based on mini search (10 results) or large search (40 results)
3. Best Seller carousel allows user to view new york best seller books

### Results page

1. Results page shows the result searches based on google books API
2. Users are able to filter by category in the results page via the buttons located above the books
3. Each book card consists of link, fav and info button
4. Link button will lead the user to the actual link page of the book
5. Fav button will favouritise user's selected book to the favourite page
6. Info button will lead the user to a details page of the book where it shows the title, author, publisher, rank and sypnopsis of the book. Also includes a purchase button which links user to the actual link page of the book
7. Upon hovering over of each book card, a synopsis of the book will be shown

### New York Best Seller page

1. New York Best Seller page shows the results based on new york best seller books API
2. Each book card consists of link, fav and info button
3. Link button will lead the user to the actual link page of the book
4. Fav button will favouritise user's selected book to the favourite page
5. Info button will lead the user to a details page of the book where it shows the title, author, publisher, rank and sypnopsis of the book. Also includes a purchase button which links user to the actual link page of the book

### Favourite page

1. Favourite page shows the favouritised results from either results page or new york best seller page or both
2. Each book card consists of link, delete and info button
3. Link button will lead the user to the actual link page of the book
4. Delete button will remove user's selected book from the favourite page
5. Info button will lead the user to a details page of the book where it shows the title, author, publisher, rank and sypnopsis of the book. Also includes a purchase button which links user to the actual link page of the book
6. The favourite page results uses local storage which will remember the user's saved data if the browser was closed

### Additional Features

1. Upon clicking the fav button on either the New York Best Seller page or Results page, the button will toggle to del button. User is then able to del his/her favourite from either the New York Best Seller page or Results page or at the Favourite page itself
2. User can utilize the search bar located at the top right hand side of the navigation bar for quick search of their books without needing to return to the homepage

## Struggles

### Challenges working with Google Books API

- There were instances where the results i.e, image is not found. Hence, the code needs to be mo

## Good to have
