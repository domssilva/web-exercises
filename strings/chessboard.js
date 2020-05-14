/*Chessboard: Write a program that creates a string that represents an 8×8 grid, using newlinecharacters to separate lines. At each position of the grid there is either a spaceor a "#" character. The characters should form a chessboard.*/

let pattern1 = ' # # # #';
let pattern2 = '# # # # ';

for (let i = 0; i < 4; i++) {
  console.log(`${pattern1}\n${pattern2}`);
}