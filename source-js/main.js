jQuery(document).ready(function() {
  jQuery('.add').on('click', function() {
    var nameTask = jQuery('#task-name').val()
    jQuery('.list-tasks').append('<li><span class="task-name">' + nameTask + '</span><a href="#" class="edit-task">edit</a> <a href="#" class="remove-task">remove</a></li>')
    jQuery('#task-name').val('')
  })

  jQuery('.list-tasks').on('click', '.remove-task', function() {
    jQuery(this).parent().remove()
  })

  jQuery('.list-tasks').on('click', '.edit-task', function() {
    var nameTask = jQuery(this).siblings('.task-name').html()
    jQuery(this).parent().append('<input type="text" class="edit-name" value="' + nameTask + '"> <a href="#" class="save">save</a>')
  })

  jQuery('.list-tasks').on('click', '.save', function() {
    var editName = jQuery(this).siblings('.edit-name').val()
    jQuery(this).siblings('.task-name').html(editName)
    jQuery(this).siblings('.edit-name').remove()
    jQuery(this).remove()
  })
})