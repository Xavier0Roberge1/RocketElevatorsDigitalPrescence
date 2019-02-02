  document.getElementById("building-box").style.display="block";
  document.getElementById("residential-box").style.display="none";
  document.getElementById("commercial-box").style.display="none";
  document.getElementById("corporate-box").style.display="none";
  document.getElementById("hybrid-box").style.display="none";


   /** Selection in Building Box */

   function on_change(){

       var UserSelection = document.getElementById("building-box").value;
       console.log(UserSelection);

       if (UserSelection != 0)
       {
           if (UserSelection == 1)
           {
               document.getElementById("residential-box").style.display="block";

               document.getElementById("commercial-box").style.display="none";
               document.getElementById("corporate-box").style.display="none";
               document.getElementById("hybrid-box").style.display="none";
           }
           if (UserSelection == 2)
           {
               document.getElementById("commercial-box").style.display="block";

               document.getElementById("residential-box").style.display="none";
               document.getElementById("corporate-box").style.display="none";
               document.getElementById("hybrid-box").style.display="none";

           }
           if (UserSelection == 3)
           {
               document.getElementById("corporate-box").style.display="block";

               document.getElementById("residential-box").style.display="none";
               document.getElementById("commercial-box").style.display="none";
               document.getElementById("hybrid-box").style.display="none";

           }
           if (UserSelection == 4)
           {
               document.getElementById("hybrid-box").style.display="block";

               document.getElementById("residential-box").style.display="none";
               document.getElementById("commercial-box").style.display="none";
               document.getElementById("corporate-box").style.display="none";

           }

       }
       else
       {
           document.getElementById("residential-box").style.display="none";
           document.getElementById("commercial-box").style.display="none";
           document.getElementById("corporate-box").style.display="none";
           document.getElementById("hybrid-box").style.display="none";
       }
   }

   var nb_Appart_resi;
   var nb_Floors_resi;
   var nb_Cages_moyenne, nb_CagesAscensceur_resi, nb_ColumnAscensceur_resi ;
   var nb_CagesAscensceur_commerc
   var nb_OccupantsMax_corp
   var nb_Floors_corp
   var nb_Basements_corp
   var nb_FloorsTT_corp
   var nb_OccupantsTT_corp
   var nb_Ascensceur_corp
   var nb_ColumnAscensceur_corp
   var nb_AscensceurTT_corp
   var nb_CagesNeeded_corp
   var nb_OccupantsMax_hybrid
   var nb_Floors_hybrid
   var nb_Basements_hybrid
   var nb_FloorsTT_hybrid
   var nb_OccupantsTT_hybrid
   var nb_Ascensceur_hybrid
   var nb_ColumnAscensceur_hybrid
   var nb_AscensceurTT_hybrid
   var nb_CagesNeeded_hybrid
   var somme;


   /**Residentiel*/
   $(".residentialevent").on("change keyup", function () { CalcResidential() })
function CalcResidential() {

nb_Appart_resi = parseInt(document.getElementById("nb-app-residential").value)
nb_Floors_resi = parseInt(document.getElementById("nb-floor-residential").value)
nb_Cages_moyenne = Math.ceil(nb_Appart_resi/nb_Floors_resi);
nb_CagesAscensceur_resi = Math.ceil (nb_Cages_moyenne/6);
nb_ColumnAscensceur_resi = Math.ceil (nb_Floors_resi/20);
nb_CagesAscensceur_resi = nb_CagesAscensceur_resi*nb_ColumnAscensceur_resi;
console.log(nb_CagesAscensceur_resi);
document.getElementById("somme").value = nb_CagesAscensceur_resi;

cagesPriceForRange = getCagePriceForRange();
priceWithoutInstallation = nb_CagesAscensceur_resi * cagesPriceForRange;
var totalPrice = getInstallationPrices(priceWithoutInstallation);

console.log("priceWithoutInstallation = " + priceWithoutInstallation);
console.log("totalPrice = " + totalPrice);
document.getElementById("totalPrice").innerHTML = totalPrice;

}

function getCagePriceForRange() {
 console.log("getCagePriceForRange");
 range = document.querySelector('input[name="quality"]:checked').value
 console.log("range is = " + range );
 if( range == "standard") {
   return 7565;
 }else if( range == "premium") {
   return 12345;
 }else if( range == "excelium") {
return 15400

}
}

function getInstallationPrices(priceWithoutInstallation) {
console.log("getInstallationPrices");
range2 = document.querySelector('input[name="quality"]:checked').value
console.log("range is = " + range );
if( range == "standard") {
 return priceWithoutInstallation * 1.10
}else if( range == "premium") {
 return priceWithoutInstallation * 1.13
}else if( range == "excelium") {
 return priceWithoutInstallation * 1.16

}
}

 /**Commercial*/
 $(".commercialevent").on("change keyup", function () { CalcCommercial() })
function CalcCommercial() {

nb_CagesAscensceur_commerc = parseInt(document.getElementById("nb-cages-commercial").value)
console.log(nb_CagesAscensceur_commerc);
(document.getElementById("somme").value) = nb_CagesAscensceur_commerc

cagesPriceForRange = getCagePriceForRange();
priceWithoutInstallation = nb_CagesAscensceur_commerc * cagesPriceForRange;
var totalPrice = Math.ceil(getInstallationPrices(priceWithoutInstallation));

console.log("priceWithoutInstallation = " + priceWithoutInstallation);
console.log("totalPrice = " + totalPrice);
document.getElementById("totalPrice").innerHTML = totalPrice;

}

function getCagePriceForRange() {
 console.log("getCagePriceForRange");
 range = document.querySelector('input[name="quality"]:checked').value
 console.log("range is = " + range );
 if( range == "standard") {
   return 7565;
 }else if( range == "premium") {
   return 12345;
 }else if( range == "excelium") {
return 15400

}
}

function getInstallationPrices(priceWithoutInstallation) {
console.log("getInstallationPrices");
range = document.querySelector('input[name="quality"]:checked').value
console.log("range is = " + range );
if( range == "standard") {
 return priceWithoutInstallation * 1.10
}else if( range == "premium") {
 return priceWithoutInstallation * 1.13
}else if( range == "excelium") {
 return priceWithoutInstallation * 1.16
}
}

/**Corporate*/
 $(".corporateevent").on("change keyup", function () { CalcCorporate() })
 function CalcCorporate() {

 nb_OccupantsMax_corp = parseInt(document.getElementById("nb-occ-corporate").value)
 nb_Floors_corp = parseInt(document.getElementById("nb-fl-corporate").value)
 nb_Basements_corp = parseInt(document.getElementById("nb-bs-corporate").value)
 nb_FloorsTT_corp = (nb_Basements_corp+nb_Floors_corp)
 nb_OccupantsTT_corp = (nb_FloorsTT_corp+nb_OccupantsMax_corp)
 nb_Ascensceur_corp = Math.ceil(nb_OccupantsTT_corp/1000)
 nb_ColumnAscensceur_corp = Math.ceil(nb_FloorsTT_corp/20)
 nb_CagesNeeded_corp = Math.ceil(nb_Ascensceur_corp*nb_ColumnAscensceur_corp)
 nb_AscensceurTT_corp = Math.ceil(nb_CagesNeeded_corp*nb_ColumnAscensceur_corp)
 document.getElementById("somme").value = nb_AscensceurTT_corp;

 cagesPriceForRange = getCagePriceForRange()
 priceWithoutInstallation = nb_AscensceurTT_corp * cagesPriceForRange
 var totalPrice = (getInstallationPrices(priceWithoutInstallation))

 console.log("priceWithoutInstallation = " + priceWithoutInstallation)
 console.log("totalPrice = " + totalPrice)
 document.getElementById("totalPrice").innerHTML = totalPrice

 }

 function getCagePriceForRange() {
  console.log("getCagePriceForRange");
  range = document.querySelector('input[name="quality"]:checked').value
  console.log("range is = " + range );
  if( range == "standard") {
    return 7565;
  }else if( range == "premium") {
    return 12345;
  }else if( range == "excelium") {
    return 15400
  };
 };

  /**Hybrid*/
  $(".hybridevent").on("change keyup", function () { CalcHybrid() })
function CalcHybrid() {

 nb_OccupantsMax_hybrid = parseInt(document.getElementById("nb-occ-hybrid").value)
 nb_Floors_hybrid = parseInt(document.getElementById("nb-fl-hybrid").value)
 nb_Basements_hybrid = parseInt(document.getElementById("nb-bs-hybrid").value)
 nb_FloorsTT_hybrid = (nb_Basements_hybrid+nb_Floors_hybrid)
 nb_OccupantsTT_hybrid = (nb_FloorsTT_hybrid+nb_OccupantsMax_hybrid)
 nb_Ascensceur_hybrid = Math.ceil(nb_OccupantsTT_hybrid/1000)
 nb_ColumnAscensceur_hybrid = Math.ceil(nb_FloorsTT_hybrid/20)
 nb_CagesNeeded_hybrid = Math.ceil(nb_Ascensceur_hybrid*nb_ColumnAscensceur_hybrid)
 nb_AscensceurTT_hybrid = Math.ceil(nb_CagesNeeded_hybrid*nb_ColumnAscensceur_hybrid)
 document.getElementById("somme").value = nb_AscensceurTT_hybrid;

 cagesPriceForRange = getCagePriceForRange();
 priceWithoutInstallation = nb_AscensceurTT_hybrid * cagesPriceForRange;
 var totalPrice = (getInstallationPrices(priceWithoutInstallation));

 console.log("priceWithoutInstallation = " + priceWithoutInstallation);
 console.log("totalPrice = " + totalPrice);
 document.getElementById("totalPrice").innerHTML = totalPrice;

}

function getCagePriceForRange() {
 console.log("getCagePriceForRange");
range = document.querySelector('input[name="quality"]:checked').value
 console.log("range is = " + range );
 if( range == "standard") {
   return 7565;
 }else if( range == "premium") {
   return 12345;
 }else if( range == "excelium") {
return 15400

};
};
