

function onloadPage(){

    document.getElementById('coupon').style.visibility = 'visible';

    document.getElementsByClassName('gifts').style.opacity = '0.3';

    document.getElementsByClassName('mainpage1').style.opacity = '0.5';
}

function closeCoupon(){

    document.getElementById('coupon').style.visibility = 'hidden';

    document.getElementsByClassName('mainpage1').style.opacity = '1'
}