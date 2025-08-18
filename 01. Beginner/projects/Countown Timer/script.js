let timer;

function startCountdown() {
  clearInterval(timer);
  const target = new Date(document.getElementById("targetDate").value);

  try {
    if (isNaN(target)) throw "Invalid date!";

    timer = setInterval(() => {
      const now = new Date();
      let diff = target - now;

      if (diff <= 0) {
        document.getElementById("output").innerText = "🎉 Time's up!";
        clearInterval(timer);
        return;
      }

      let days = Math.floor(diff / (1000 * 60 * 60 * 24));
      let hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      let mins = Math.floor((diff / (1000 * 60)) % 60);
      let secs = Math.floor((diff / 1000) % 60);

      document.getElementById(
        "output"
      ).innerText = `${days}d ${hours}h ${mins}m ${secs}s remaining...`;
    }, 1000);
  } catch (error) {
    document.getElementById("output").innerText = `Error: ${error}`;
  }
}
