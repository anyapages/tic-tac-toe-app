<<<<<<< HEAD
# Restock Exercise
=======
# Tic-Tac-Toe App

A 2-player pastel Tic-Tac-Toe game, build with React. 🍭
>>>>>>> f90725b2fe15c18e3fa50868e701f73c6c85b36e

A restock function  a Shopping-Cart exercise.
## Tasks:

<<<<<<< HEAD
- Implement the restock feature when a user clicks the “Restock” button, a call is made to the Strapi back end specified in the input field.
- The result of this call should be updated on the list of products.
=======
- Display the next player to play (Player X or Player O). This should show which player's turn it is.  It should be updated every time a player selects a square
- Update the color of the mark based on the player's turn. "X" should be red, and "O" should be green.

At the end, the game should look like the following:

<img src = 'xo.png' width="500" height="440"> 

The text showing the player in turn (Player X's turn) should be displayed below the board and should be contained within an `<h1></h1>`  tag and have the id turn.

>>>>>>> f90725b2fe15c18e3fa50868e701f73c6c85b36e
## Solution
I use `doFetch`(url) function on `restockProducts` value to make a call to the API and use `setItem` to update the existing items as shown below;
```javaScript
const restockProducts = (url) => {
    doFetch(url);
    let newItems = data.map((item) => {
      let { name, country, cost, instock } = item;
      return { name, country, cost, instock };
    });
    setItems([...items, ...newItems]);
  };
```
## Usage
<<<<<<< HEAD

<img src = 'exampme.gif' width="500" height="440"> 
=======
<img src = 'Example.gif' width="600" height="360"> 

[Live demo](https://anyapages.com/tic-tac-toe-app/)

## Features
Pastel theme

- Add soothing pink, blue, and green.
- Add ✘  ,  ❤︎ , ❌, and ⭕️ icons.

## Roadmap of Future Improvements
- A New Game button which a new state should be deleted when clicked.
- A version of Human vs. Machine.

## Installation
 `npx create-react-app tic-tac-toe-app`

 `cd tic-tac-toe-app`

 `npm start`

   ### Note:
   npx on the first line is not a typo — it is a package runner tool that comes with npm 5.2+.

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits. You will also see any errors in the console.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React and React games, check out the [React documentation](https://reactjs.org/), [React Game Examples](https://react.rocks/tag/Game/).

## Acknowledgement

Topic: Refactoring Your Game, MIT xPro discussion forum.
>>>>>>> f90725b2fe15c18e3fa50868e701f73c6c85b36e

## License
[MIT](https://github.com/anyapages/shopping-cart-exercise/blob/main/LICENSE) 
