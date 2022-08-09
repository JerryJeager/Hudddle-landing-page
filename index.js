
function confirmFreeTrial(clickedButtonClass, messageId){
    const freeTrial = document.querySelector(`.${clickedButtonClass}`)
    const freeConfirmation = document.getElementById(`${messageId}`)

    freeTrial.addEventListener("click", function(){
        freeConfirmation.innerText = "Free Trials are over for now! Try again later."
    })
}

confirmFreeTrial("free-trial1", "free-trial-confirmation1")
confirmFreeTrial("free-trial2", "free-trial-confirmation2")