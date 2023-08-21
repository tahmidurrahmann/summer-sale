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
    
    
    const inputCoupon = document.getElementById('input-coupon');
    const inputCouponString = inputCoupon.value;
    const paymentTotal = document.getElementById('payment-total');
    const totalDiscount = document.getElementById('total-discount');
    const remain = sum * 0.8;
    const discount = sum * 0.2;
    const applyBtn = document.getElementById('apply-btn').addEventListener('click',function(){
        if(sum > 200 && inputCouponString === 'SUM200'){
            applyBtn.removeAttribute('disabled');
            
            totalDiscount.innerText = discount;
            paymentTotal.innerText = remain;
           }
        else{
        applyBtn.setAttribute('disabled', 'true')
    }
})
    if(sum > 1){
        makePurchase.removeAttribute('disabled');
    }
    else{
        makePurchase.setAttribute('disabled', 'true')
    }
   

}