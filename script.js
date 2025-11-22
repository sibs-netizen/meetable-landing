(function () {
  function getNextThursdayAt7pm() {
    const now = new Date();
    const target = new Date(now);

    let daysToThursday = 4 - now.getDay();
    if (daysToThursday < 0 || (daysToThursday === 0 && now.getHours() >= 19)) {
      daysToThursday += 7;
    }

    target.setDate(now.getDate() + daysToThursday);
    target.setHours(19, 0, 0, 0);
    return target;
  }

  function startDinnerCountdown() {
    const daysEl  = document.getElementById("cd-days");
    const hoursEl = document.getElementById("cd-hours");
    const minsEl  = document.getElementById("cd-mins");
    const secsEl  = document.getElementById("cd-secs");
    if (!daysEl) return; // If countdown not present

    let target = getNextThursdayAt7pm();

    function update() {
      const now = new Date();
      if (now >= target) target = getNextThursdayAt7pm();

      const diff = target - now;
      const totalSeconds = Math.floor(diff / 1000);
      const days  = Math.floor(totalSeconds / (3600 * 24));
      const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
      const mins  = Math.floor((totalSeconds % 3600) / 60);
      const secs  = totalSeconds % 60;

      daysEl.textContent  = days;
      hoursEl.textContent = String(hours).padStart(2, "0");
      minsEl.textContent  = String(mins).padStart(2, "0");
      secsEl.textContent  = String(secs).padStart(2, "0");
    }

    update();
    setInterval(update, 1000);
  }

  document.addEventListener("DOMContentLoaded", startDinnerCountdown);
})();
