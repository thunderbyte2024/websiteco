const form = document.getElementById('quiz-form');
    const resultsDiv = document.getElementById('results');

    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent default form submission

      let score = 0;

      // Correct answers
       const correctAnswers = {
        q1: 'A',
        q2: 'C',
        q3: 'C',
        q4: 'B',
        q5: 'B',
        q6: 'A',
        q7: 'B',
        q8: 'C',
        q9: 'A',
        q10: 'A',
        q11: 'A',
        q12: 'B',
        q13: 'C',
        q14: 'B',
        q15: 'A',
        q16: 'B',
        q17: 'B',
        q18: 'A',
        q19: 'B',
        q20: 'A'
      };

      // Loop through each question and check the selected answer
      for (let i = 1; i <= 20; i++) {
        const question = document.querySelector(`input[name="q${i}"]:checked`);
        if (question && question.value === correctAnswers[`q${i}`]) {
          score++;
        }
      }

      const message = `You scored ${score} out of 20!`;

      resultsDiv.textContent = message;
    });