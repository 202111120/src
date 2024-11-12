document.getElementById('startTimer').addEventListener('click', function() {
    const days = parseInt(document.getElementById('days').value);
    if (isNaN(days) || days < 1) {
        alert("Please enter a valid number of days.");
        return;
    }
    
    const now = new Date();
    const targetDate = new Date(now.getTime() + days * 24 * 60 * 60 * 1000);
    
    const countdownElement = document.getElementById('countdown');
    
    const timer = setInterval(function() {
        const now = new Date();
        const distance = targetDate - now;

        if (distance < 0) {
            clearInterval(timer);
            countdownElement.innerHTML = "Countdown Finished!";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }, 1000);
});














