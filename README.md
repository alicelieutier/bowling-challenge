# Bowling Scorer

A ten-pin bowling scorer in javascript, from Makers curriculum.

## MVP

The Scorer is for one player only
The player should be able to enter his rolls (number between 0 and 10)
Total score should be displayed
Current frame number should be displayed
Previous frames' rolls should be displayed
When the game has reached an end:
 - the final score, "Gutter Game" or "Perfect Game" should be displayed
 - A button should allow the player to start a new game

## Design

- [X] Roll
  - [X] number of pins

- [X] Frame
  - [X] Rolls array (one, two or three for last frame)
  - [X] Bonus points (backfilled from next rolls)
  - [X] Score

- [X] Game
  - [X] Frames array
  - [X] Current frame
  - [X] Current score
- [X] UI

TODO
- [ ] Better testing framework (https://www.instagram.com/p/BmnN2gfhb3e/)
