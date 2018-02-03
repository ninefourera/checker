
function checkText(){
    let charCount = document.getElementById("message").value;
    
    updateCount(charCount);

    if(charCount.length > 240) {
        document.getElementById("message").style.color = "red";
        // alert("Your Message is too long!");
    } else {
        document.getElementById("message").style.color = "green";
        // alert("Great job! Your message is good to go.");
    }

}

function updateCount(num) {
    let update = '<p>Character count: ${num}</p>';
    //document.getElementById("count").innerHTML = update;
    document.getElementById('span1').innerHTML= num.length;
}

