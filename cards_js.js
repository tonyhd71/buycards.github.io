var cartCounter = 0;
var numOfMews = 0;
var numOfbEwd= 0;
var numOfdM = 0;

var mewPrice=0;
var BeWdPrice=0;
var dMPrice=0;
var Mew = "Mew";
var BeWd = "Blue Eyes White Dragon";
var dM = "Dark Magician";
var total=mewPrice + BeWdPrice + dMPrice;
function addMewToCart() {
    cartCounter++;
    numOfMews++;
    mewPrice = mewPrice + 89;
    alert("Added " + numOfMews + " " + Mew + " for " + mewPrice);
    document.getElementById("cartNumber").innerHTML= cartCounter ;
    var nOm = document.getElementById("showMewAmt").innerHTML=numOfMews;
        localStorage.setItem("numMew", nOm);

}
function addBEWDToCart() {
    cartCounter++;
    numOfbEwd++;
    BeWdPrice = BeWdPrice + 250;
    alert("Added " + numOfbEwd + " " + BeWd + " for " + BeWdPrice);
    document.getElementById("cartNumber").innerHTML= cartCounter;
    var nOb = document.getElementById("showBeAmt").innerHTML=numOfbEwd;
    localStorage.setItem("numBe", nOb);

}
function addDMToCart() {
    cartCounter++;
    numOfdM++;
    dMPrice = dMPrice + 115;
    alert("Added " + numOfdM + " " + dM + " for " + dMPrice);
    document.getElementById("cartNumber").innerHTML= cartCounter;
    var nOd = document.getElementById("showDmAmt").innerHTML=numOfdM;
    localStorage.setItem("numDm", nOd);

}
function goToCheckOut() {
    var x = document.getElementById("cartNumber").innerHTML;


}

function isEmpty() {
var allInputs = document.getElementsByClassName("mandatory");

    for (var i =0; i < allInputs.length; i++) {
            if (allInputs[i].value == "") {
                alert("noo");
                return;

            } else if (document.getElementById("verifyZip").length > 9 || document.getElementById("verifyZip").length <5) {
                alert("Zip Code has to be between 5 to 9 digits");
                return;
            } else {
                window.location.href="invoice.html";
            }
      }
}
//function checkZipInput() {
  //  if (document.getElementById("verifyZip").length > 9 || document.getElementById("verifyZip").length <5) {
    //    alert("Zip Code has to be between 5 to 9 digits");
    //    break;
   // }
//}