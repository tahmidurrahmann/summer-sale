let sum = 0;
function calculationSummerClick(btn){
    const name = btn.childNodes[3].childNodes[3].innerText;
    const appendContainer = document.getElementById('append-container');
    const p = document.createElement('p');
    const count = appendContainer.childElementCount;
    p.innerHTML = `${count + 1}. ${name}`;
    appendContainer.appendChild(p);
    const amount = parseFloat(btn.childNodes[3].childNodes[5].innerText.split(' ')[0]);
    sum = parseFloat(sum) + parseFloat(amount);
    const firstTotal = (document.getElementById('total-price').innerText) = sum;
    const totalDiscount = document.getElementById('total-discount');
    const paymentTotal = document.getElementById('payment-total');
    const remain = firstTotal* 0.8;
    const discount = firstTotal * 0.2;
    if(firstTotal > 200){
        totalDiscount.innerText = discount.toFixed(2);
        paymentTotal.innerText = remain.toFixed(2);
    }
}

function applyBtn(){
    const inputCoupon = parseFloat(document.getElementById('input-coupon').value);
    const discount = firstTotal * 0.2;
    if(inputCoupon === 'SELL200'){

    }
}