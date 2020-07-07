/*Chessboard: Write a program that creates a string that represents an 8×8 grid, using newlinecharacters to separate lines. At each position of the grid there is either a spaceor a "#" character. The characters should form a chessboard.*/

let gridSize = 8;

for (let row = 0; row < gridSize; row++) {
  for (let col = 0; col < gridSize/2; col++) {
    
    if (row % 2 !== 0) {
      process.stdout.write('#')
      process.stdout.write(' ')
    } else if (row % 2 === 0) {
      process.stdout.write(' ')
      process.stdout.write('#')
    }
    
  }

  // prints new line
  console.log('');
}