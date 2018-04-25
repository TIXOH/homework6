function getGradient(){
    function getNum() {
        return (Math.floor(Math.random()*256));
    }

    function getColor() {
        return ("rgb(" + getNum() + ', ' + getNum() + ', ' + getNum() +')');
    }

    return logo.style.background = "linear-gradient( 270deg, "+ getColor() +" , "+ getColor() +")";
}

var logo = document.querySelector(".logo");
logo.addEventListener("mouseenter", getGradient);

setInterval(function() {getGradient();}, 2000);