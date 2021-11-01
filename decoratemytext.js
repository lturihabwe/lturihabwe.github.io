function hello() {
    alert("Hello, World!");
}

function interval() {
    var id = setInterval(enlargeText, 5000);
    setTimeout(clearInterval, 5000, id);
}

function enlargeText() {
    var prop = window.getComputedStyle(document.getElementById("textarea")).fontSize;
    newProp = parseInt(prop) + 2 + "pt";
    document.getElementById("textarea").style.fontSize = newProp;
}

function boldText() {
    console.log("hello");
    if (document.getElementById("bling").checked == true) {
        document.getElementById("textarea").style.fontWeight = "bold";
        document.getElementById("textarea").style.color = "green";
        document.getElementById("textarea").style.textDecoration = "underline";
        document.body.style.backgroundImage = 'url("http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg")';
    } else {
        document.getElementById("textarea").style.fontWeight = "";
        document.getElementById("textarea").style.color = "";
        document.getElementById("textarea").style.textDecoration = "";
        document.body.style.backgroundImage = "";
    }
}

function pay() {
    var words = document.getElementById("textarea").value;
    var splitword = words.split(/\s+/);
    var result = "";
    for (var i = 0; i < splitword.length; i++) {
        if (splitword[i].charAt(0).match("[aeoiuAEOIU]")) {
            changed = splitword[i] + "ay";
        } else {
            var word = splitword[i];
            for (var j = 0; j < word.length; j++) {
                if (word[j].match("[aeoiuAEOIU]")) {
                    var changed = word.substring(j) + word.substring(0, j) + "ay";
                    break;
                }

            }
        }
        result += changed + " ";
    }
    document.getElementById("textarea").value = result;
}

function malkov() {
    var words = document.getElementById("textarea").value;
    var split = words.split(/\s+/);
    var result = "";
    for (let i = 0; i < split.length; i++) {
        if (split[i].length >= 5) {
            arr[i] = "Malkovich";
        }
        result += arr[i] + " ";
    }
    document.getElementById("textarea").value = result;
}