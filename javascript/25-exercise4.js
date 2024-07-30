
setInterval(()=>{
    let clock = document.querySelector('.clock');
    let date = new Date();
    let hours = date.getHours().toString().padStart(2, '0');
    let minutes = date.getMinutes().toString().padStart(2, '0');
    let seconds = date.getSeconds().toString().padStart(2, '0');
    clock.innerHTML = `${hours}:${minutes}:${seconds}`;
}, 1000);

