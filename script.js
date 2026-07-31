document.getElementById('add-btn').addEventListener('click', function() {
    const input = document.getElementById('achievement-input');
    const text = input.value.trim();

    if (text !== "") {
        const ul = document.getElementById('achievement-list');
        const li = document.createElement('li');
        li.innerHTML = `<b>New:</b> ${text}`;
        
        // Add smooth appearance animation
        li.style.opacity = '0';
        ul.appendChild(li);
        
        setTimeout(() => {
            li.style.transition = 'opacity 0.5s';
            li.style.opacity = '1';
        }, 10);

        input.value = ""; // Clear input field
    } else {
        alert("Please enter an achievement before adding!");
    }
});
