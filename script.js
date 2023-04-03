$(document).ready(function () {
    $('button').click(function () {
        $('.alert').show()
    });

    $('button').click(function () {
        $(this).parents('div').hide();
    });
});