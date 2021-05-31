// Any code you will write for your website (in the future!) should go here

$(document).ready(function(){
	$('#on').on('change',function(){
    	if(this.checked){
            $("#priceOneText").text("Yearly Package");
    		$("#priceOne").text("$25/Month");
            /* ? Gap */
            $("#priceTwoText").text("Yearly Package");
            $("#priceTwo").text("$55/Month");
            /* ? Gap */
            $("#priceThreeText").text("Yearly Package");
            $("#priceThree").text("$70/Month");
    	}
        else{
            $("#priceOneText").text("Monthly Package");
        	$("#priceOne").text("$30/Month");
            /* Gap */
            $("#priceTwoText").text("Monthly Package");
            $("#priceTwo").text("$60/Month");
            /* Gap */
            $("#priceThreeText").text("Monthly Package");
            $("#priceThree").text("$80/Month");
        }
    });
});



