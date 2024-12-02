const myBtn = document.getElementById('mySubmit');
const myCheckbox = document.getElementById('myCheckbox');
const myRadio1 = document.getElementById('myRaio1');
const myRadio2 = document.getElementById('myRaio2');
const myRadio3 = document.getElementById('myRaio3');
const myH1 = document.getElementById('myH1');
myH1.style.fontSize = '18px';

myBtn.addEventListener('click', () => {
    if (myCheckbox.checked) {
        myH1.textContent = "Welcome, you've subscribed to this channel.";

        switch (true) {
            case myRadio1.checked:
                myH1.textContent += " \nPayment method: Visa";
                
                break;

            case myRadio2.checked:
                myH1.textContent += " \nPayment method: Mastercard";
                
                break;

            case myRadio3.checked:
                myH1.textContent += " \nPayment method: PayPal";
                
                break;

            default:
                myH1.textContent += " \nPlease select a payment method !";
                break;
        }
    }
    else {
        myH1.textContent = " \nHello, you haven't subscribed to this channel";
    }
});