let sum = 0;
function calculationSummerClick(btn){
    const name = btn.childNodes[3].childNodes[3].innerText;
    const appendContainer = document.getElementById('append-container');
    const p = document.createElement('p');
    const count = appendContainer.childElementCount;
    p.innerHTML = `${count + 1}. ${name}`;
    appendContainer.appendChild(p);
    const amount = parseFloat(btn.childNodes[3].childNodes[5].innerText.split(' ')[0])
    const previousTotalPrice = parseFloat(document.getElementById('total-price').innerText);
    const totalPrice = previousTotalPrice + amount;
    sum = totalPrice;
    const element = document.getElementById('total-price');
    element.innerText = sum;
    const previousDiscount = document.getElementById('total-discount');
    const totalDiscount =  sum * 0.2;
    const payment = sum * 0.8;
    const paymentTotal = document.getElementById('payment-total');
    paymentTotal.innerText = sum;
    if(sum >= 200){
        previousDiscount.innerText = totalDiscount.toFixed(2);
        paymentTotal.innerText = payment.toFixed(2);
    }
}