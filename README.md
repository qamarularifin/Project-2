# Project-2: Book Finder App

## Background

A book finder application where users are able to search for their favourite books based on the book title. The application also allows the user to favouritise their chosen book and allows the option for user to purchase it via a button that routes them to the actual book website.

## Link

https://qamarularifin.github.io/Project-2"

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

- There were instances where the results from Google Books API i.e, image is not found. Hence, the code needs to be modified to add a ternary operator

### Challenges working with multiple API (Google Books API and New York Best Seller API)

- These two APIs have different key/value pairs which may not be easy to deal and manipulate with.
- The challenge is when combining two different APIs into the favourite page as they both hold different key/value pairs.
- This was resolved with the use of useReducer in which the payload key is defined to be the same for both APIs.

### Challenges on working with the Fav/Del button

- The goal is to be able to favouritize a book without duplication. This can be done via toggling the button as Fav and Del.
- To get the button to toggle between Fav/Del is proved to be quite a challenge. A way to resolve this is to use a ternary operator with the array method .some.

### Challenges on working with the filter by category in the results page

- Stating of the initial state is important. Initial issue with the filter by category is that, the initial state was set as empty string. Hence, each time it renders, no results were seen. Hence, to resolve this, the initial state must be of certain values which in this case it the allCategories. But this allCategories need to be inside the queryGoogleAPIBook function.
- Another issue encountered is each time a category is clicked, the searchResults become overwritten and lastly becomes no results. This is because the same searchResults was used to set state for setSearchResults. This causes the data to be overwritten. To resolve this, another state called masterResult was used which takes in the data.items. It is then used as the array to filter by category. Since the masterResult state is never changed, filtering this will not change the state of the masterResult and hence will be able to render all the results again when each category button is pressed.

### Challenges working with the flow of data and where the state lives

- Knowing where the states live is an important factor to consider when first starting to build the app. Initially, found an issue during implementing of the search feature in the navigation bar. Because the state lives further down, in the Main component, it was not possible to implement the search feature in the navigation bar. A way to do this is to lift the state up all the way to the App component. This way the main search and navigation search feature is able to get the data from the App component.
- This was seen as an issue too when implementing the Carousel feature. Since the Carousel needs to use the api fetch to render the images on the carousel wheel, the API also needs to live in the App component that is further way up.
- Hence lesson learnt that is it vital to know where the state and API lives as if it is implemented wrongly, re-writing the codes might not be so easy and can invite more bugs along the way.

## Good to have

- Login for users. Each user able to favouritise his/her own favourite books based on their login account
