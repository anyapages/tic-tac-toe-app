# Tic-Tac-Toe App

A 2-player pastel Tic-Tac-Toe game, built with React. 🍭

## Tasks:

- Display the next player to play (Player X or Player O). This should show which player's turn it is.  It should be updated every time a player selects a square
- Update the color of the mark based on the player's turn. "X" should be red, and "O" should be green.

At the end, the game should look like the following:

<img src = 'xo.png' width="500" height="440"> 

The text showing the player in turn (Player X's turn) should be displayed below the board and should be contained within an `<h1></h1>`  tag and have the id turn.

## Solution
I use conditional logic via a ternary operator to set the `className` value.  Learn more about the [ternary operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator/) 

```javaScript
className={tik == "1" ? "red" : "green"}
      onClick={() => {
        setTik(takeTurn(id));
        setFilled(true);
        console.log(`Square: ${id} filled by player : ${tik}`);
      }}
    >
      <h1>{mark[tik]}</h1>
```

## Usage
<img src = 'Example.gif' width="580" height="360"> 

[Live demo](https://codesandbox.io/embed/2-player-tic-tac-toe-game-ufoop?fontsize=14&hidenavigation=1&theme=light&view=preview)

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

## License
[MIT](https://github.com/anyapages/tic-tac-toe-app/blob/main/LICENSE) 
