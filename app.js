const next = document.getElementById('arrowRight');
const previous = document.getElementById('arrowLeft');
const sections = document.querySelectorAll('.person');

const change = () => {
    sections.forEach(item => {
        if (item.classList.contains('active')) {
            item.classList.remove('active');
        } else {
            item.classList.add('active');
        }
    })
}

next.addEventListener('click', change);
previous.addEventListener('click', change);

window.addEventListener('keyup', (e) => {
    if (e.key === 'ArrowRight' || e.key === "ArrowLeft") {
        change();
    }
})