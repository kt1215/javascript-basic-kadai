const btnElement = document.getElementById('btn');
const textElement = document.getElementById('text');

btnElement.addEventListener('click', () => {
    textElement.textContent = 'ボタンをクリックしました'
});