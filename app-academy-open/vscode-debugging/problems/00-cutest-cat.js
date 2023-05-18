/*

Fix the `cutestCat` function. Should return the cat with the highest `cuteness`
rating.

*/

function cutestCat(cats) {
  let cutest = 0;
  let i = 0;
  let ans;

  while (i < cats.length) {
    const cat = cats[i];
    if (cat.cuteness > cutest) {
      cutest = cat.cuteness;
      ans = cat;
    }
    i++;
  }

  return ans;
}

const cats = [
  { name: 'Fluffy', cuteness: 9 },
  { name: 'Princess', cuteness: 6 },
  { name: 'Tiger', cuteness: 7 },
  { name: 'Indie', cuteness: 5 },
]

let cutestCatVar = cutestCat(cats);
console.log(cutestCatVar); // { name: 'Fluffy', cuteness: 9 }