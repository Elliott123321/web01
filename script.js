
document.addEventListener("DOMContentLoaded", function(){
    DocumentEdit.logMessage()
    EventHandlers.initialize()
})

var DocumentEdit  = (function(){
    function logMessage() {
        console.log("hello there")
        console.log("hello again")
    }

    return{
        logMessage
    }

})()

var EventHandlers = (function(){
    function initialize(){
        var clickmebtn = document.getElementById("click-me-btn")
        clickmebtn.addEventListener("click",OnClickClickMebtn)

        var startCountdownBtn = document.getElementById("start-countdown")
        startCountdownBtn.addEventListener("click", startCountdown)

    }

    function OnClickClickMebtn(){
        var inputTextarea = document.getElementById("input-textarea")
        var editText = document.getElementById("edit-text");

        editText.innerText = inputTextarea.value
    }
 
    function startCountdown(){
        var countdown = 10

        var interval = setInterval(function(){
            var countdownParagraph = document.getElementById("countdown")
            countdownParagraph.innerText = countdown
            

            if(countdown == 0){
                clearInterval(interval)
            }

            countdown = countdown -1 
        }, 1000)
    }

    return{
        initialize
    }
})()
