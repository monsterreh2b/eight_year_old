$(document).ready(function() {
    $("button").click(function() {
        $("#pencil").hide();
        $("#tada").replaceWith("<h2>TA DA!</h2>");
        $("#gone").replaceWith("<p>Look...its gone.</p>");
        $("button").hide();

        var link = $("<a>");
        link.attr("href", "https://monsterreh2b.github.io/eight_year_old/");
        link.attr("title", "Magic Trick");
        link.text("Start Over");
        link.addClass("link");

        $("#start-over").html(link);
    });
});