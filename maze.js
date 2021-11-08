$(document).ready(function() {
    $("#start").click(reset);
    $(".boundary").mouseover(red);
    $("#end").mouseover(end);
});

let wallHit = false;
let started = false;
let reset = () => {
    wallHit = false;
    started = true;
    $(".boundary").removeClass("youlose");
    $("#status").text('Click the "S" to begin. ');
}
let red = () => {
    if (started) {
        wallHit = true;
        $(".boundary").addClass("youlose");
    }
}
let end = () => {
    if (started) {
        if (!wallHit) {
            $("#status").text("You win! :]");
        } else {
            $("#status").text("You lost! :[");
        }
    }
    started = false;
}