$('.register-form').submit(function (event) {
    event.preventDefault();
    if ($('#inputPassword').val() === $('#inputPasswordConfirm').val()) {
        this.submit();
    } else {
        alert("The passwords doesn't match");
    }
});

$('.user-edit-form').submit(function (event) {
    event.preventDefault();
    $.ajax({
        url: `/user/${$(this).data('id')}`,
        type: 'PUT',
        data: $(this).serialize(),
        success: function () {
            alert('User was successfully changed');
            location.reload();
        }
    });
});

$('.delete-user').click(function (e) {
    $.ajax({
        url: `/user/${$(this).parent().data('id')}`,
        type: 'DELETE',
        success: function () {
            alert('User was successfully deleted');
            location.reload();
        }
    });
});

/* Load de modal form with the table data and give an id to the form. */
$('.edit-user').click(function (e) {
    let id = e.target.parentElement.dataset.id
    let fields = $(`#row${id}`).children();
    let modal = $('#modal-edit').modal('show');
    modal.find('.user-edit-form').attr('data-id', id)
    modal.find('.modal-title').text('User number: ' + id);
    modal.find('#editName').val(fields[1].innerText);
    modal.find('#editSurname').val(fields[2].innerText);
    modal.find('#editEmail').val(fields[3].innerText);
    modal.find('#editPhoneNumber').val(fields[4].innerText);
})