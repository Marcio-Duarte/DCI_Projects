$(document).ready(function () {

  //Check list control
  $('.form-check').change(function (e) {
    let rowData = $(this).parents('tr').toggleClass("task-done");
    editTodo(rowData[0].id, { status: e.target.checked });
  });

  $('.user-edit-form').submit(function (event) {
    event.preventDefault();
    editTodo($(this)[0].id, $(this).serialize());
  });

  //Buttons to edit single todos
  $('.edit-user').click(function () {
    let id = $(this).parents('tr')[0].id;
    location.href = `/todo/edit/${id}`;
  });

  $('.cancel-edit-user').click(function () {
    location.href = '/todo';
  });

  /* ### API calls ### */
  $('.register-form').submit(function (event) {
    event.preventDefault();
    $.ajax({
      url: '/todo',
      type: 'POST',
      data: $(this).serialize(),
      success: function (response, status, jqXHR) {
        if (response.succeeded) {
          location.href = '/todo';
        } else {
          alert(response.message)
        }
      },
    });
  });

  function editTodo(id, data) {
    $.ajax({
      url: `/todo/${id}`,
      type: 'PUT',
      data: data,
      success: function () {
        location.href = '/todo';
      }
    });
  }

  $('.delete-user').click(function () {
    $.ajax({
      url: `/todo/${$(this).parents('tr')[0].id}`,
      type: 'DELETE',
      success: function () {
        location.href = '/todo';
      }
    });
  });
});