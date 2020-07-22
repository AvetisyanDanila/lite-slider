const images = document.querySelectorAll('.img-12-min');
let count = 0; // переменная, которая указывает на номер активного изображения в images

const next = document.querySelectorAll('.next');
// Проверка устройства пользователя
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    next[0].addEventListener("touchstart", nextFunction);
} else {
    next[0].onclick = nextFunction;
}

const prev = document.querySelectorAll('.prev');
// Проверка устройства пользователя
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    prev[0].addEventListener("touchstart", prevFunction);
} else {
    prev[0].onclick = prevFunction;
}

const reset = document.querySelectorAll('.reset');
// Проверка устройства пользователя
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    reset[0].addEventListener("touchstart", resetFunction);
} else {
    reset[0].onclick = resetFunction;
}

function nextFunction() {
    images[count].classList.remove('active-img');
    // Краевой эффект
    if (count + 1 == images.length) {
        count = 0;
    } else {
        count++;
    }
    images[count].classList.add('active-img');
    document.querySelector('.img-12-max').setAttribute('src', images[count].getAttribute('src'));
}

function prevFunction() {
    images[count].classList.remove('active-img');
    // Краевой эффект
    if (count - 1 < 0) {
        count = images.length - 1;
    } else {
        count--
    }
    images[count].classList.add('active-img');
    document.querySelector('.img-12-max').setAttribute('src', images[count].getAttribute('src'));
}

function resetFunction() {
    images[count].classList.remove('active-img');
    count = 0;
    images[count].classList.add('active-img');
    document.querySelector('.img-12-max').setAttribute('src', images[count].getAttribute('src'));
}