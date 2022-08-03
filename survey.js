const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = {
  q0: 'What\'s your name? Nicknames are also acceptable 😁',
  q1: 'What\'s an activity you like doing? 🏃',
  q2: 'What do you listen to while doing that? 🎶',
  q3: 'Which meal is your favourite? 🍽️',
  q4: 'What\'s your favourite thing to eat for that meal? 🍔',
  q5: 'Which sport is your absolute favourite? 🥇',
  q6: 'What is your superpower? ✨ In a few words, tell us what you are amazing at!'
};


const answers = {
  a0: 'PurpleKnife',
  a1: 'walking in nature',
  a2: 'Linkin Park',
  a3: 'dinner',
  a4: 'burgers',
  a5: 'Table Tennis',
  a6: 'Remembring numbers!'
};

const questionsKeys = Object.keys(questions); //To know how many questions we have.

let i = 0;

const askQuestion = function() {
  if (i < questionsKeys.length) { //As long as there are questions, the first if should run.
    rl.question(questions[`q${i}`], (answer) => {
      answer = answers[`a${i}`];
      console.log(`--> Thank you for your valuable feedback: ${answer}`);
      i++;
      askQuestion(); //Keep calling itself as long as the condition is true.
    });
  }
  if (i >= questionsKeys.length) {
    rl.close(); //When there are no questions, close.
    console.log('Your profile description iiis... Tadaaa!');
    setTimeout(() =>
      console.log(`${answers['a0']} really likes ${answers['a1']} while listening to ${answers['a2']}. Their favorite meal is ${answers['a3']} because they usually have ${answers['a4']}, and they just love them way too much. They love ${answers['a5']} and they're really good at it! And if they were to think about their own superpower... That would be: ${answers['a6']}`)
    , 2000);
  }
};
askQuestion();