function checkAnswer() {
    var answerInput = document.getElementById('answer');
    var emojiText = document.getElementById('emoji-text');
    var emojiOverlay = document.getElementById('emoji-overlay');
    var answer = answerInput.value;
    var correctAnswer = '03-12-2023'; // Replace with your anniversary date

    if (answer === correctAnswer) {
        // Correct answer logic
        emojiText.textContent = "yayyy!!!";
        window.location.href = 'third.html'; // Replace with the URL of your next page
    } else {
        // Incorrect answer logic
        emojiText.textContent = "salah woi!!!! 😾";
        var questionBox = document.getElementById('question-box');
        questionBox.classList.add('shake');

        // Calculate the number of emojis needed to fill the screen
        var emojiSize = 20; // The size of each emoji in pixels
        var screenWidth = window.innerWidth;
        var screenHeight = window.innerHeight;
        var numEmojis = Math.ceil(screenWidth / emojiSize) * Math.ceil(screenHeight / emojiSize);

        // Show the emoji overlay and fill it with emojis
        emojiOverlay.style.display = 'grid';
        for (var i = 0; i < numEmojis; i++) {
            var emojiNode = document.createElement('div');
            emojiNode.textContent = '😾';
            emojiOverlay.appendChild(emojiNode);
        }

        // Remove the shake class, reset the emoji, and hide the emoji overlay after the animation ends
        setTimeout(function () {
            questionBox.classList.remove('shake');
            emojiText.textContent = "kalau salah pusinya marah ini, coba aja 😾😾😾😾😾😾😾😾";
            emojiOverlay.classList.add('hide');

            // Remove the emojis from the overlay after it fades out
            setTimeout(function () {
                emojiOverlay.style.display = 'none';
                while (emojiOverlay.firstChild) {
                    emojiOverlay.removeChild(emojiOverlay.firstChild);
                }
                emojiOverlay.classList.remove('hide');
            }, 1000);
        }, 1000); // Adjust the duration based on your animation duration
    }
}