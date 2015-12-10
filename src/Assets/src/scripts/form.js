/**
 * Created by n0m4dz on 11/12/15.
 */
+function ($) {
    $(function () {
        $(document).on('blur', 'input, textarea', function (e) {
            $(this).val() ? $(this).addClass('has-value') : $(this).removeClass('has-value');
        });
    });
}(jQuery);
