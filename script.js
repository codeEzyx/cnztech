var prem = false;
var pro = false;
var base = false;
var custom = false;

function purchasePrem() {
    prem = true;
    planSave(); 
    alert("Purchased Premium Plan!");
}

function purchasePro() {
    pro = true;
    planSave(); 
    alert("Purchased Pro Plan!");
}

function purchaseBase() {
    base = true;
    planSave(); 
    alert("Purchased Basic Plan!");
}

function purchaseCustom() {
    custom = true;
    planSave(); 
    alert("⭐⭐⭐⭐⭐\n\nYOU'VE PURCHASED THE CUSTOM PLAN!");
}

function checkPurchase() {
    if (prem || pro || base || custom) {

        alert("Do NOT close this google form or else you will have to rebuy the plan you've picked. If you accidentally do, please contact us by going to the contact page and reaching us through our emails.")
        window.location.href = "https://forms.gle/QiPkCTxbm3R3reoX9";
        prem = false;
        pro = false;
        base = false;
        custom = false;

        planSave();
    } else {
        alert("Plan not purchased, please purchase any plan before requesting a website.");
        event.preventDefault();
    }
}

function planSave() {
    var savedplans = {
        prem: prem,
        pro: pro,
        base: base,
        custom: custom
    }
    localStorage.setItem("savedplans", JSON.stringify(savedplans));
}

function loadplans() {
    var plansSaved = JSON.parse(localStorage.getItem("savedplans"));
    if (plansSaved) {
        prem = plansSaved.prem;
        pro = plansSaved.pro;
        base = plansSaved.base;
        custom = plansSaved.custom;
    }
}

window.onload = function () {
    loadplans();
    console.log(prem);
    console.log(pro);
    console.log(base);
    console.log(custom);
}


const chatbotToggle = document.getElementById('chatbot-toggle');
    const chatbotContainer = document.getElementById('chatbot-container');
    const userInput = document.getElementById('user-input');
    const chatHistory = document.getElementById('chat-history');

    chatbotToggle.addEventListener('click', function() {
        chatbotContainer.style.display = (chatbotContainer.style.display === 'none' || chatbotContainer.style.display === '') ? 'block' : 'none';
    });

    function submitQuestion() {
        const userQuestion = userInput.value.trim();
        if (userQuestion !== '') {

            displayUserMessage(userQuestion);
            
    
            displayChatbotResponse("Sorry, I cannot answer that question. If you need additional assistance, please call 917-727-9063.");

            userInput.value = ''; 
        }
    }

    function displayUserMessage(message) {
        const messageContainer = document.createElement('div');
        messageContainer.classList.add('message-container');
        const userMessage = document.createElement('div');
        userMessage.classList.add('user-message');
        userMessage.textContent = message;
        messageContainer.appendChild(userMessage);
        chatHistory.appendChild(messageContainer);
    }

    function displayChatbotResponse(response) {
        const messageContainer = document.createElement('div');
        messageContainer.classList.add('message-container');
        const chatbotResponse = document.createElement('div');
        chatbotResponse.classList.add('chatbot-response');
        chatbotResponse.textContent = response;
        messageContainer.appendChild(chatbotResponse);
        chatHistory.appendChild(messageContainer);
    }
