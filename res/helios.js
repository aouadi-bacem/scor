/** import { readFileSync } from 'fs';
var data=readFileSync('versions.json', 'utf8');
var versions=JSON.parse(data);
console.log(versions); **/

function loadJSON(callback) {   

    var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
    xobj.open('GET', 'res/versions.json', true); 
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
          }
    };
    xobj.send(null);  
 }

function init() {
    loadJSON(function(response) {
     // Parse JSON string into object
       var data = JSON.parse(response);
       document.getElementById("prdpp").innerHTML += " - " + data.versions.prod.Portal;
       document.getElementById("prdla").innerHTML += " - " + data.versions.prod.LA;
       document.getElementById("prdde").innerHTML += " - " + data.versions.prod.DE;
       document.getElementById("prdhmt").innerHTML += " - " + data.versions.prod.hMT;
       document.getElementById("maipp").innerHTML += " - " + data.versions.mai.Portal;
       document.getElementById("maila").innerHTML += " - " + data.versions.mai.LA;
       document.getElementById("maide").innerHTML += " - " + data.versions.mai.DE;
       document.getElementById("maihmt").innerHTML += " - " + data.versions.mai.hMT;
       document.getElementById("ppdpp").innerHTML += " - " + data.versions.ppd.Portal;
       document.getElementById("ppdla").innerHTML += " - " + data.versions.ppd.LA;
       document.getElementById("ppdde").innerHTML += " - " + data.versions.ppd.DE;
       document.getElementById("ppdhmt").innerHTML += " - " + data.versions.ppd.hMT;
       document.getElementById("uatpp").innerHTML += " - " + data.versions.uat.Portal;
       document.getElementById("uatla").innerHTML += " - " + data.versions.uat.LA;
       document.getElementById("uatde").innerHTML += " - " + data.versions.uat.DE;
       document.getElementById("uathmt").innerHTML += " - " + data.versions.uat.hMT;
    });
}