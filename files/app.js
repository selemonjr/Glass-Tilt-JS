const countEl = document.querySelectorAll(".count");
countEl.forEach(timer => {
    timer.textContent = "0";
    function update() {
        const time = +timer.textContent;
        const target = timer.getAttribute("data-target");
        const increment = target / 1000;
        time < target ? timer.textContent = (Math.ceil(time + increment)) : timer.textContent = target;
        setTimeout(update,50)
    }
    update()
})
