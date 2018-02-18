
function checkText(){
    let charCount = document.getElementById("message").value;
    updateCount(charCount);

    tipOfTheDay();

    checkLength();

}


function checkLength (){
    let charCount = document.getElementById("message").value;
    
    let channel = document.getElementById("channel").value;
    switch(channel) {
        case "instagram":
            if(charCount.length > 40) {
                document.getElementById("message").style.color = "red";
                // alert("Your Message is too long!");
                return;
            } else {
                document.getElementById("message").style.color = "green";
                // alert("Great job! Your message is good to go.");
                return;
            }
            break;
        case "facebook":
            if(charCount.length > 180) {
                document.getElementById("message").style.color = "red";
                // alert("Your Message is too long!");
                return;
            } else {
                document.getElementById("message").style.color = "green";
                // alert("Great job! Your message is good to go.");
                return;
            }
            break;
        case "twitter":
            if(charCount.length > 240) {
                document.getElementById("message").style.color = "red";
                // alert("Your Message is too long!");
                return;
            } else {
                document.getElementById("message").style.color = "green";
                // alert("Great job! Your message is good to go.");
                return;
            }
            break;
        case "linkedin":
            if(charCount.length > 840) {
                document.getElementById("message").style.color = "red";
                // alert("Your Message is too long!");
                return;
            } else {
                document.getElementById("message").style.color = "green";
                // alert("Great job! Your message is good to go.");
                return;
            }
            break;
        default:
            alert("oops");
            document.getElementById('span2').innerHTML= num.length;
    }

}

function tipOfTheDay() {
    let channel = document.getElementById("channel").value;
    switch(channel) {
        case "instagram":
            // alert("IG");
            document.getElementById('span2').innerHTML= "Use the swipe feature in IG to create a journey. </br>Think of each swipe as a turn of the page.";
            break;
        case "facebook":
            document.getElementById('span2').innerHTML= "Stay up-to-date on Facebooks Edgerank algorithm. </br>Doing so will pay out in the form of more engaement and reach.";
            // alert("FB");
            break;
        case "twitter":
            // alert("TW");
            document.getElementById('span2').innerHTML= "Tweet well and tweet often.";
            break;
        case "linkedin":
            // alert("LI");
            document.getElementById('span2').innerHTML= "Ugh, LinkedIn...";
            break;
        default:
            alert("oops");
            document.getElementById('span2').innerHTML= num.length;
    }
}

function updateCount(num) {
    let update = '<p>Character count: ${num}</p>';
    //document.getElementById("count").innerHTML = update;
    document.getElementById('span1').innerHTML= num.length;
    return;
}

