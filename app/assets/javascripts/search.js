$(function () {
    // Remove Search if user Resets Form or hits Escape!
    $('body, .navbar-collapse form[role="search"] button[type="reset"]').on('click keyup', function(event) {
        console.log(event.currentTarget);
        if (event.which == 27 && $('.navbar-collapse form[role="search"]').hasClass('active') ||
            $(event.currentTarget).attr('type') == 'reset') {
            closeSearch();
        }
    });

    function closeSearch() {
        var $form = $('.navbar-collapse form[role="search"].active')
        var $remElem = $('.nav-rem');
        $form.find('input').val('');
        $form.removeClass('active');
        $remElem.show();
    }

    // Show Search if form is not active // event.preventDefault() is important, this prevents the form from submitting
    $(document).on('click', '.navbar-collapse form[role="search"]:not(.active) button[type="submit"]', function(event) {
        event.preventDefault();
        var $remElem = $('.nav-rem');
        console.log($remElem);
        var $form = $(this).closest('form'),
            $input = $form.find('input');
        $remElem.hide();
        $form.addClass('active');
        $input.focus();

    });

    $("#search").bind("keypress", {}, keypressInBox);

    function keypressInBox(e) {
      var code = (e.keyCode ? e.keyCode : e.which);
      if (code == 13) { //Enter keycode

        document.getElementById("search").value = "";
      }
    };

});
