document.getElementById('reveal').classList.add('shake');

document.getElementById('reveal').addEventListener('click', function() {
    var button = document.getElementById('reveal');
    var message = document.getElementById('message');
    var image = document.getElementById('image');

    if (button.textContent === "Reveal Message") {
        message.textContent = "Last but not least, i just wanna to say thank uu for your love and everything u’ve done for me. ur presence in my life has filled it with so much joy and happiness. u’ve stood by me in times of hardship, celebrated with me in times of joy, n hv always been my constant source of support and inspiration. iam incredibly lucky to have u in my life. as we continue this journey together, i look forward to creating more beautiful memories with uu xixi. moga u masuk fh ui ya, aamiin. i love uuu so much. hepi valentine, doain emyu menang pls 😿🙏";
        image.src = "https://i.pinimg.com/564x/22/b9/90/22b990829596bf6cd6b4d4bc287e1294.jpg"; // Replace with the URL of your image
        image.style.display = "block"; // This will make the image visible
        button.textContent = "Hide Message";
        button.classList.remove('shake'); // Remove the shake class
    } else {
        message.textContent = "click!!!!";
        image.style.display = "none"; // This will hide the image
        button.textContent = "Reveal Message";
        button.classList.add('shake'); // Add the shake class
    }
});

//document.getElementById('message').textContent = " ";