$(document).ready(function() {
    $("button").click(function() {
        $("#pencil").hide();
        $("#tada").replaceWith("<h2>TA DA!</h2>");
        $("#gone").replaceWith("<p>Look...its gone.</p>");
        $("button").hide();
    });
});