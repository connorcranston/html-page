var leftButton = document.querySelector('.left-button');
var rightButton = document.querySelector('.right-button');
var leftInput = document.querySelector('.left-input');
var rightInput = document.querySelector('.right-input');


const crypto = function() {
    var API_URL=`https://bitpay.com/api/rates`;
    $.ajax({
        type: 'GET',
        url: API_URL,
        dataType: 'json',
        success: function(data){
            console.log(data);   
            
            leftInput.value = data[0].rate;
            leftButton.textContent = data[0].code;

            rightInput.value = data[1].rate;
            rightButton.textContent = data[1].code;
        },
        error: function(error){
            console.log(error)
        }
    })
};

crypto();