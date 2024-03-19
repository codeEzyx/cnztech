let prem = false;
let pro = false;
let base = false; 
let custom = false;

function purchasePrem() {
    prem = true;
    alert("Purchased Premium Plan!");
}

function purchasePro() {
    pro = true;
    alert("Purchased Pro Plan!");
}

function purchaseBase() {
    base = true;
    alert("Purchased Basic Plan!");
}

function purchaseCustom() {
    custom = true;
    alert("⭐⭐⭐⭐⭐\n\nYOU'VE PURCHASED THE CUSTOM PLAN!");
}

function checkPurchase() {
    if (prem || pro || base || custom){
        window.location.href = "https://forms.gle/QiPkCTxbm3R3reoX9";
    } else { 
        alert("Plan not purchased, please purchase any plan before requesting a website.");
        event.preventDefault();
    }
}




