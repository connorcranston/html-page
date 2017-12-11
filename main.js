var leftContainer = document.querySelector('.left-container');
var rightContainer = document.querySelector('.right-container');


const crypto = function() {
    var API_URL=`https://bitpay.com/api/rates`;
    $.ajax({
        type: 'GET',
        url: API_URL,
        dataType: 'json',
        success: function(data){
            console.log(data);   
            for (var key in data) {
                if (data[key] === 0) {
                    leftContainer.innerHtml = `
                    <div class="input-group">
                    <input type="text" class="form-control">
                        <span class="input-group-btn">
                            <button class="btn btn-primary" type="button">${data[key].code}</button>
                        </span>
                    `
                                        
                } else{

                }
            } 
        },
        error: function(error){
            console.log(error)
        }
    })
};

crypto();