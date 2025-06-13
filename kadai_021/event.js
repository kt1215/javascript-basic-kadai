const btnElement = document.getElementById('btn');
const textElement = document.getElementById('text');

btnElement.addEventListener('click', () => {
    setTimeout(() => {
        textElement.textContent = 'ボタンをクリックしました';
    }, 2000);
});