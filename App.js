var button = document.getElementById('submit');
// indicate that we are checking our HTML file and this element will not return a null value
var a = document.getElementById('input1');
// converts our variables to those of type HTMLElement
var b = document.getElementById('input2');
function add(a, b) {
    // declare that the type of our variables a and b will be 'number'.
    return a + b;
}
button.addEventListener('click', function () {
    console.log(add(+a.value, +b.value));
    // place a + sign in front of a and b (in line 11) to convert them to number
});
