var x = 0;
var y = 0;
var z = 0;

setInterval(hereket, 50)

function hereket() {
    x++
    document.querySelector(".seconds").innerHTML = x


    if (x == 60) {
        x = 0
        y++
        document.querySelector(".minutes").innerHTML = y
        yoxla()


    }
    if (y == 60) {
        y = 0
        z++
        document.querySelector(".hours").innerHTML = z
    }
    if (z == 24) {
        z = 0
    }
    if (y == 1) {

    }

}



function yoxla() {
    if (document.querySelector("input").value == y) {
        document.querySelector("body").style.backgroundColor = "red"
    } else {
        document.querySelector("body").style.backgroundColor = "black"
    }
}