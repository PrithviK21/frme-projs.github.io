const q = document.querySelectorAll('.q-item');




q.forEach( function(question) {
    question.addEventListener('click', function() {
        let a = question.querySelector('.answer');
        let qtext = question.querySelector('.question-text');
        a.classList.toggle('hide');
        qtext.classList.toggle('bold');
        question.querySelector('.up-arrow').classList.toggle('hide');
        question.querySelector('.down-arrow').classList.toggle('hide');
    })
})