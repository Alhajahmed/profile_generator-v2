const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(
  "What's your name? Nicknames are also acceptable? ",
  (nameAnswer) => {
    rl.question("What's an activity you like doing? ", (activityAnswer) => {
      rl.question("What do you listen to while doing that? ", (musicAnswer) => {
        rl.question("Which meal is your favourite? ", (mealAnswer) => {
          rl.question(
            "Which sport is your absolute favourite? ",
            (sportAnswer) => {
              console.log(`
            Thank you for your valuable feedback:
            Name: ${nameAnswer}
            Activity: ${activityAnswer}
            Music: ${musicAnswer}
            Meal: ${mealAnswer}
            Sport: ${sportAnswer}
          `);
              rl.close();
            }
          );
        });
      });
    });
  }
);
