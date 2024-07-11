function luckyDraw(player) {
  return new Promise((resolve, reject) => {
    const win = Boolean(Math.round(Math.random()));

    process.nextTick(() => {
      if (win) {
        resolve(`${player} won a prize in the draw!`);
      } else {
        reject(new Error(`${player} lost the draw!`));
      }
    });
  });
}

const players = ["Joe", "Caroline", "Sabrina"];

function runLuckyDraws(players) {
  let promiseChain = Promise.resolve();

  players.forEach((player) => {
    promiseChain = promiseChain
      .then(() => luckyDraw(player))
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error(error.message);
      });
  });

  return promiseChain;
}

runLuckyDraws(players);
