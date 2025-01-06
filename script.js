document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form submission to server

    // Define the correct answers
    const correctAnswers = {
        q1: 'A',  // Jakarta is the correct answer
        q2: 'B',  // Thomas Edison is the correct answer
        q3: 'A'   // 365 days is the correct answer
    };

    let score = 0;
    const formData = new FormData(this);
    
    // Check answers
    formData.forEach((value, key) => {
        if (value === correctAnswers[key]) {
            score++;
        }
    });

    // Show the result
    alert('Anda mendapatkan ' + score + ' dari 3 jawaban yang benar!');
});
