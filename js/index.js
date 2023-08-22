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
    const totalPrice = document.getElementById('total-price')
    const firstTotal = (document.getElementById('total-price').innerText) = sum;

    const makePurchase = document.getElementById('make-purchase');
    if(sum > 0){
        makePurchase.removeAttribute('disabled');
    }
    else{
        makePurchase.setAttribute('disabled', 'true')
    }
    const applyBtn = document.getElementById('apply-btn');
        if(sum > 200 ){
            applyBtn.removeAttribute('disabled');
        }
        else{
        applyBtn.setAttribute('disabled', 'true');
    }
}
function applyBtn(){
    const total = document.getElementById('total-price').innerText;
    const discountTotal = document.getElementById('total-discount');
    const discount = total * .2;
    const paymentTotal = document.getElementById('payment-total');
    const remain = total * .8;
    const inputCoupon = document.getElementById('input-coupon').value;
    if(total >= 200 && inputCoupon === "SELL200"){
        discountTotal.innerText = discount.toFixed(2);
        paymentTotal.innerText = remain.toFixed(2);
    }
}
document.getElementById('goHome').addEventListener('click',function(){
    document.getElementById('append-container').innerText = '';
    document.getElementById('total-price').innerText = '00';
    document.getElementById('total-discount').innerText = '00';
    document.getElementById('payment-total').innerText = '00';
    document.getElementById('input-coupon').value = '';
    const applyBtn = document.getElementById('apply-btn');
    applyBtn.setAttribute('disabled','true');
    const makePurchase = document.getElementById('make-purchase');
    makePurchase.setAttribute('disabled','true')
});