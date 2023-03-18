/*

Updates the innerHTML of an element with id "par" to "You Clicked".
This function is intended to be called when a button is clicked.
*/
function buttonClick() {
    document.getElementById("par").innerHTML="You Clicked";
    }
    // Export the buttonClick function so it can be used by other modules
    module.exports = buttonClick;

