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

[ ] Roll
  [ ] number of pins

[ ] Frame
 [ ] Past rolls array (one, two or three for last frame)
 [ ] Current roll
 [ ] Bonus points (backfilled from next rolls)
 [ ] Score

[ ] Game
  [ ] Past frames array
  [ ] Current frame
  [ ] Current score
  [ ] Final score ?
