function reactor() {
    document.getElementById('dad-bod').style.backgroundColor = '';
    document.getElementById("reactor").style.visibility = "hidden";
    document.getElementById("sector").style.display = "inline-block";

    let foo = prompt('What is your username?');

    if (foo === "") {
        window.location.reload();
        alert("Why didn't you tell me? :(")
    } else if (foo) {
        alert("Thank you! :)")

        function compact(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
    }


    console.log("Name request prompt: " + foo);
    document.cookie = "Username=" + foo;

    document.getElementById("uname").innerHTML = compact(foo);

    var colors = ["rgb(36, 41, 46)"];
    var currentIndex = 0;

    setInterval(function () {
        document.body.style.cssText = "background-color: " + colors[currentIndex];
        currentIndex++;
        if (currentIndex == undefined || currentIndex >= colors.length) {
            currentIndex = 0;
        }
    }, 1);
}

function main() {
    document.getElementById("sector").style.display = "none";
}


