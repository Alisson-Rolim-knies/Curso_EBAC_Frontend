$(document).ready(function() {
    $('#task-form').submit(function(event) {
        event.preventDefault();
        
        let taskText = $('#task-input').val().trim();
        
        if (taskText !== '') {
            let newTask = $('<li></li>').text(taskText);
            $('#task-list').append(newTask);
            $('#task-input').val('');
        }
    });

    $('#task-list').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});
