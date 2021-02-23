const btnOpen = document.querySelector('#openM');
const btnClose = document.querySelector('#closeM');
const btnContinue = document.querySelectorAll('#continue');
const btnG = document.querySelector('#btnG');
const model1 = document.querySelector('.model');
const model2 = document.querySelector('.modalThanks');
const ovarlay = document.querySelector('.overlay');
const input = document.querySelectorAll('input[type="number"]');
const bar = document.getElementById('bar');
let money = Number(document.getElementById('money').textContent);
let backers = Number(document.getElementById('backers').textContent);
const sum = 100000;
const book = document.getElementById('book');

const navToggle = document.querySelector('#showM');
const links = document.querySelector('.showL');

navToggle.addEventListener('click', function () {
    links.classList.toggle('active');
});

book.addEventListener('click', function () {
    const gray = book.classList.toggle('out');
    if (gray) {
        document.getElementById('bookText').innerHTML = 'Bookmark';
    } else {
        document.getElementById('bookText').innerHTML = 'Bookmarked';
    }
});

let result = money / sum * 100;
bar.style.width = result + '%';

const card2 = document.querySelectorAll('.card2');
model1.addEventListener('click', function (e) {
    const id = e.target.dataset.id;
    // console.log(id);
    if (id) {
        card2.forEach(function (card) {
            card.classList.remove('active');
            e.target.parentElement.classList.add('active');
        });
    }
});


btnOpen.addEventListener('click', removeHidde);
btnClose.addEventListener('click', addHidden);
btnContinue.forEach(function (btn) {
    btn.addEventListener('click', function () {
        let input = Number(document.querySelector('input[type="number"]').value);
        let newMoney = money += input;
        const newM = document.getElementById('money').innerHTML = newMoney;

        backers++;
        document.getElementById('backers').innerHTML = backers;

        // let left = document.getElementById('left').textContent;
        // console.log(left);
        // left--;

        result = newMoney / sum * 100;
        bar.style.width = result + '%';

        model1.classList.add('hidden');
        model2.classList.remove('hidden');
        scrollToTop();
    });
});
btnG.addEventListener('click', function () {
    addHidden();
    model2.classList.add('hidden');
});

function addHidden() {
    model1.classList.add('hidden');
    ovarlay.classList.add('hidden'); function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
};
function removeHidde() {
    model1.classList.remove('hidden');
    ovarlay.classList.remove('hidden');
}
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}