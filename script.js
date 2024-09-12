const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

function time() {
    const datetoday = new Date(); 
    let hr = datetoday.getHours();
    let min = datetoday.getMinutes();
    let seg = datetoday.getSeconds();


    if (hr < 10) hr = '0' + hr;
    if (min < 10) min = '0' + min;
    if (seg < 10) seg = '0' + seg;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = seg;
}

setInterval(time, 1000);
time();
