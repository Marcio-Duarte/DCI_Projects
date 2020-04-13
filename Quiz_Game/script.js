let memory = {}; /* To store all questions */
class Quiz {
    constructor(pkey, question = '', answer = '', ) {
        this._pkey = pkey;
        this._question = question;
        this._answer = answer;
        this.renderCard();
    }
    get question() { return this._question; }
    set question(value) { this._question = value; }
    get answer() { return this._answer; }
    set answer(value) { this._answer = value; }
    renderCard() {
        $('#questions-list').append($(`<div class="col-md-4" data-pkey=${this._pkey}> </div>`)
            .append($(`<div class="card card-body flashcard my-3"></div>`)
                .append(`<h4 class="text-capitalize">${this._question}</h4>`)
                .append($(`<a href="#" class="text-capitalize my-3 show-answer">show/hide answer</a>`)
                    .click(function (e) {
                        e.preventDefault();
                        $(this).next().toggle(".showItem");
                    }))
                .append(`<h5 class="hideItem mb-3">${this._answer}</h5>`)
                .append($(`<div class="flashcard-btn d-flex justify-content-between"></div >`)
                    .append($(`<a href="#" class="btn my-1 edit-btn text-uppercase">edit</a>`)
                        .click(function () {
                            $('#question-input').val($(this).parent().siblings('h4')[0].innerText);
                            $('#answer-input').val($(this).parent().siblings('h5')[0].innerText);
                            $('#question-form').attr("data-pkey", $(this).parents().eq(2).attr('data-pkey')).parent()
                                .addClass('edit-flashcard').toggle('.showItem');
                        }))
                    .append($(`<a href="#" class="btn my-1 delete-btn text-uppercase">delete</a>`)
                        .click(function () {
                            delete memory[$(this).parents().eq(2).attr('data-pkey')];
                            refreshScreen();
                        })
                    )
                )
            )
        );
    }
}
function refreshScreen() {
    $('#questions-list').empty();
    for (const key in memory) {
        memory[key].renderCard();
    }
};
function cleanInputs() {
    $('#question-input').val('');
    $('#answer-input').val('');
}
/* To show the form to create a new question. */
$('#show-btn').click(function () {
    $(this).siblings('.question-card').toggle(".showItem");
    cleanInputs();
});
/* Button to save/edit flashcards */
$('#question-form').children('button').click(function (e) {
    e.preventDefault();
    if ($(this).parents('.question-card').hasClass('edit-flashcard')) {
        let pkey = $('#question-form').attr('data-pkey');
        $(`div[data-pkey='${pkey}']`).find('h4')[0].innerText = memory[pkey].question = $('#question-input').val();
        $(`div[data-pkey='${pkey}']`).find('h5')[0].innerText = memory[pkey].answer = $('#answer-input').val();
        $(this).parents('.question-card').removeClass("edit-flashcard").toggle('.showItem');
    } else {
        let pkey = Date.now();
        memory[pkey] = new Quiz(pkey, $('#question-input').val(), $('#answer-input').val());
        $(this).parents('.question-card').toggle(".showItem");
    }
    cleanInputs();
});