/* 3. Create a simple to do list from a prompt.
   - Create a button and when you click the button, it will "Add an item to the list" as a promt message
   - When you promt a task, it will write inside the page as a list */


$('#addTask').click(function () {
   if (isEmpty($(this).parent().siblings('input').val())) {
      alert("Insert a name for the task");
   } else {
      $('#toDo-list').children('ul')
         .append(`<li>${$(this).parent().siblings('input').val()}</li>`)
         .addClass('bg-info');
   }
   $(this).parent().siblings('input').val('');
});