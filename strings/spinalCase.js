function spinalCase(str) {
  let res = str.replace(/\W|_/gi, '-').toLowerCase();
  console.log(res);
}

spinalCase("thisIsSpinalTap"); // how ???
spinalCase('This Is Spinal Tap');
spinalCase("The_Andy_Griffith_Show");
spinalCase("AllThe-small Things");