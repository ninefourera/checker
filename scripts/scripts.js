
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
    let tipIG = ["Use the swipe feature in IG to create a journey. </br>Think of each swipe as a turn of the page.",
                "Instagram relies on images that tell a story. </br>How much story can you pack into one post?",
                "While Instagram's analytics are limited, the data can </br>still answer some of the most basic data questions."];
    let tipFB = ["Stay up-to-date on Facebooks Edgerank algorithm. </br>Doing so will pay out in the form of more engaement and reach.",
                "",
                ""];
    let tipTW = ["Tweet well and tweet often.",
                "",
                ""];
    let tip = ["Ugh, LinkedIn...",
                "LinkedIn is the biggest pool of a targeted market on the internet: professionals.",
                ""];
    
    
    switch(channel) {
        case "instagram":
            // alert("IG");
            document.getElementById('span2').innerHTML= tipIG[1];
            break;
        case "facebook":
            document.getElementById('span2').innerHTML= tipFB[1];
            // alert("FB");
            break;
        case "twitter":
            // alert("TW");
            document.getElementById('span2').innerHTML= tipTW[0];
            break;
        case "linkedin":
            // alert("LI");
            document.getElementById('span2').innerHTML= tipLI[2];
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

