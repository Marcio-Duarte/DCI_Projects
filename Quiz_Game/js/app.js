/* To store all questions */
let memory = {};
class Quiz {
    constructor(pkey, question = '', answer = '', ) {
        this._pkey = pkey;
        this._question = question;
        this._answer = answer;
    }
    get question() {
        return this._question;
    }
    set question(text) {
        this._question = text;
    }
    get answer() {
        return this._answer;
    }
    set answer(text) {
        this._answer = text;
    }
    renderCard() {
        /* let card = document.createElement('div');
        card.setAttribute('data-pkey', this._pkey);
        card.classList.add("col-md-4");

        let card_body = document.createElement('div');
        card_body.classList.add("card", "card-body", "flashcard", "my-3");
        card.append(card_body);

        let question = document.createElement('h4');
        question.classList.add("text-capitalize");
        question.innerText = this._question;
        card_body.append(question);

        let show_link = document.createElement('a');
        show_link.classList.add("text-capitalize", "my-3", "show-answer");
        show_link.href = '#';
        show_link.innerText = 'Show/Hide answer';
        show_link.addEventListener('click', function (e) {
            e.preventDefault();
            $(this).next().toggle(".showItem");
        });
        card_body.append(show_link);

        let answer = document.createElement('h5');
        answer.classList.add("answer", "mb-3");
        answer.innerText = this._answer;
        card_body.append(answer);

        let flashcard = document.createElement('div');
        flashcard.classList.add("flashcard-btn", "d-flex", "justify-content-between");
        card_body.append(flashcard); */
        /* Button to edit tasks */
        /* let edit_btn = document.createElement('a');
        edit_btn.id = "edit-flashcard";
        edit_btn.classList.add("btn", "my-1", "edit-flashcard", "text-uppercase");
        edit_btn.innerText = "edit";
        edit_btn.addEventListener('click', function () {
            let pkey = this.parentElement.parentElement.parentElement.getAttribute('data-pkey');
            $('#question-input').val($(this).parent().siblings('h4')[0].innerText);
            $('#answer-input').val($(this).parent().siblings('h5')[0].innerText);
            $('#question-form').attr("data-pkey", pkey).parent('.question-card')
                .addClass('edit-flashcard').toggle('.showItem');
        });
        flashcard.append(edit_btn); */
        /* Button to delete tasks */
        /* let delete_btn = document.createElement('a');
        delete_btn.id = "delete-flashcard";
        delete_btn.classList.add("btn", "my-1", "delete-flashcard", "text-uppercase");
        delete_btn.innerText = "delete";
        delete_btn.addEventListener("click", function () {
            let pkey = this.parentElement.parentElement.parentElement.getAttribute('data-pkey');
            delete memory[pkey];
            refreshScreen();
        });
        flashcard.append(delete_btn); */
        /* $('#questions-list').append(card); */


        let card = $(`<div class="col-md-4" data-pkey=${this._pkey}> </div>`)
            .append($(`<div class="card card-body flashcard my-3"></div>`)
                .append(`<h4 class="text-capitalize">${this._question}</h4>`)
                .append($(`<a href="#" class="text-capitalize my-3 show-answer">show/hide answer</a>`)
                    .click(function (e) {
                        e.preventDefault();
                        $(this).next().toggle(".showItem");
                    }))
                .append(`<h5 class="answer mb-3">${this._answer}</h5>`)
                .append($(`<div class="flashcard-btn d-flex justify-content-between"></div >`)
                    .append($(`<a href="#" class="btn my-1 edit-flashcard text-uppercase">edit</a>`)
                        .click(function () {
                            $('#question-input').val($(this).parent().siblings('h4')[0].innerText);
                            $('#answer-input').val($(this).parent().siblings('h5')[0].innerText);
                            $('#question-form').attr("data-pkey", $(this).parents().eq(2).attr('data-pkey')).parent('.question-card')
                                .addClass('edit-flashcard').toggle('.showItem');
                        }))
                    .append($(`<a href="#" class="btn my-1 delete-flashcard text-uppercase">delete</a>`)
                        .click(function () {
                            delete memory[$(this).parents().eq(2).attr('data-pkey')];
                            refreshScreen();
                        }))
                ));



        /*      ).append($(`<a href="#" class="text-capitalize my-3 show-answer">show/hide answer</a>`).click(function (e) {
     e.preventDefault();
     $(this).next().toggle(".showItem");
 }));; */

        /* card.append(`<h5 class="answer mb-3">question answer</h5>`)
            .append($(`<div class="flashcard-btn d-flex justify-content-between"></div >`)
                .append($(`<a href="#" id="edit-flashcard" class=" btn my-1 edit-flashcard text-uppercase">edit</a>`)
                    .click(function (e) {
                        alert("7777")
                    }))
                .append($(`<a href="#" id="delete-flashcard" class=" btn my-1 delete-flashcard text-uppercase">delete</a>`)
                    .click(function (e) {
                        let pkey = $(this).parent().parent().parent().attr('data-pkey');
                        console.log(pkey);
                        delete memory[pkey];
                        refreshScreen();
                    }))
            ); */

        $('#questions-list').append(card);


        {/* <div class="col-md-4">
                <div class="card card-body flashcard my-3">
                    <h4 class="text-capitalize">question title?</h4>
                    <a href="#" class="text-capitalize my-3 show-answer">show/hide answer</a>
                    <h5 class="answer mb-3">question answer</h5>
                    <div class="flashcard-btn d-flex justify-content-between">

                        <a href="#" id="edit-flashcard" class=" btn my-1 edit-flashcard text-uppercase"
                            data-id="">edit</a>
                        <a href="#" id="delete-flashcard" class=" btn my-1 delete-flashcard text-uppercase">delete</a>
                    </div>
                </div>
            </div> */}
    }
}
function refreshScreen() {
    $('#questions-list').empty();
    for (const key in memory) {
        memory[key].renderCard();
    }
};
/* To clean inputs */
function cleanInputs() {
    $('#question-input').val('');
    $('#answer-input').val('');
}
/* To show the form to create a new question. */
$('#show-btn').click(function () {
    $(this).siblings('.question-card').toggle(".showItem");
    cleanInputs();
});
/* Button to save the new/edit questions */
$('#question-form').children('button').click(function (e) {
    e.preventDefault();
    let pkey;
    if ($(this).parents('.question-card').hasClass('edit-flashcard')) {
        pkey = $('#question-form').attr('data-pkey');
        $(`div[data-pkey='${pkey}']`).find('h4')[0].innerText = memory[pkey].question = $('#question-input').val();
        $(`div[data-pkey='${pkey}']`).find('h5')[0].innerText = memory[pkey].answer = $('#answer-input').val();
        $(this).parents('.question-card').removeClass("edit-flashcard").toggle('.showItem');
    } else {
        pkey = Date.now();
        let card = new Quiz(pkey, $('#question-input').val(), $('#answer-input').val());
        card.renderCard();
        memory[pkey] = card;
        $(this).parents('.question-card').toggle(".showItem");
        console.log(card._pkey);
    }
    cleanInputs();
});