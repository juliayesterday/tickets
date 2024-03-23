document.addEventListener("DOMContentLoaded", function() {
    const questionItems = document.querySelectorAll('.question-item');

    questionItems.forEach(function(item) {
        const link = item.querySelector('.question-item-link');
        const svg = item.querySelector('.question-item-link-svg');
        const answerText = item.querySelector('.answer-text');

        item.addEventListener('click', function() {
            item.classList.toggle('active');
            answerText.style.display = item.classList.contains('active') ? 'block' : 'none';
            svg.style.transform = item.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0deg)';
            svg.style.stroke = item.classList.contains('active') ? 'orange' : 'black';
            link.style.color = item.classList.contains('active') ? 'orange' : '';
            link.style.fontWeight = item.classList.contains('active') ? 'bold' : '';
        });
    });
});