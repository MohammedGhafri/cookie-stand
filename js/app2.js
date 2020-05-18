'use strict';
//  name : 'seattle',              
// minCust: 23 ,
// maxCust: 65,
// avgCookieSale:6.3 ,
// rcust:[],
// rarray:
// Seattle	23	65	6.3
// Tokyo	3	24	1.2
// Dubai	11	38	3.7
// Paris	20	38	2.3
// Lima	    2	16	4.6
var hourArray = ['06:00 am', '07:00 am', '08:00 am', '09:00 am', '10:00 am', '11:00 am', '12:00 pm', '01:00 pm', '02:00 pm', '03:00 pm', '04:00 pm', '05:00 pm', '06:00 pm', '07:00 pm'];
var allStates = [];// array for all objwects


function States(name, minCust, maxCust, avgCookieSale) {
    this.name = name;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCookieSale = avgCookieSale;
    this.randomCust = [];
    this.randomMulRanByCus = [];
    allStates.push(this);


}
States.prototype.rCustomers = function () {
    this.randomCust = randomCustomers(this.minCust, this.maxCust);
    this.randomMulRanByCus = calculation(this.randomCust, this.avgCookieSale);
    // console.log(this.avgCookieSale);
}



var seattle = new States('Seattle', 23, 65, 6.3);

seattle.rCustomers();
var tokyo = new States('Tokyo', 3, 24, 1.2);
tokyo.rCustomers();
var dubai = new States('Dubai', 11, 38, 3.7);
dubai.rCustomers();
var paris = new States('Paris', 20, 38, 2.3);
paris.rCustomers();
var lima = new States('Lima', 2, 16, 4.6);
lima.rCustomers();
// console.log(seattle);


var container2 = document.getElementById('divone');// to hang the conrainer in the divone ID
var table1 = document.createElement('table');
// var tableRow=document.createElement('tr');
// var tableData=document.createElement('td');
container2.appendChild(table1);
createTable();













function randomCustomers(a, b) {// generate random customers for all objects
    var randomCust = [];
    for (var i = 0; i < 14; i++) {
        var c = Math.floor(Math.floor(Math.random() * (b - a + 1)) + a);
        randomCust.push(c);
    }

    return randomCust;
}
function calculation(a, b) { // mul random customers by average cookies
    var newArray = [];
    var newArray2 = [];
    for (var i = 0; i < hourArray.length; i++) {
        newArray2[i] = Math.round(b) * a[i];
        newArray.push(newArray2[i]);
        // console.log(newArray);
    }
    return newArray;
}
// function createTable(){
//     var tableRow=document.createElement('tr');
//     table1.appendChild(tableRow);
// for(var i=0;i<hourArray.length;i++){
//     var newentry=document.createElement('td');
//     tableRow.appendChild(newentry);
//     newentry.textContent=hourArray[i];

// }
// }
function createTable() {
    for (var i = 0; i < 7; i++) {
        switch (i) {// I used 'switch' just to make space in the beginning of the table
            case 0:
                var tableRow2 = document.createElement('tr');
                table1.appendChild(tableRow2);
                var newentry = document.createElement('td');
                tableRow2.appendChild(newentry);
                newentry.textContent = null;
                for (var j = 0; j < hourArray.length; j++) {
                    var newentry = document.createElement('td');
                    tableRow2.appendChild(newentry);
                    newentry.textContent = hourArray[j];

                }
                var newentry = document.createElement('td');
                tableRow2.appendChild(newentry);
                newentry.textContent = 'Daily Location Total';
                // var tableRow2 = document.createElement('tr');
                // table1.appendChild(tableRow2);
                break;
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                var tableRow3 = document.createElement('tr');
                table1.appendChild(tableRow3);
                var newentry1 = document.createElement('td');
                tableRow3.appendChild(newentry1);
                newentry1.textContent = allStates[i - 1].name;
                for (var j = 0; j < hourArray.length; j++) {
                    var newentry4 = document.createElement('td');
                    tableRow3.appendChild(newentry4);
                    newentry4.textContent = allStates[i - 1].randomMulRanByCus[j];

                }
                var newentry4 = document.createElement('td');
                tableRow3.appendChild(newentry4);
                var tot = 0;
                for (var k = 0; k < hourArray.length; k++) { tot += allStates[i - 1].randomMulRanByCus[k] }
                newentry4.textContent = tot;
                break;
                default:
                    var tableRow3 = document.createElement('tr');
                table1.appendChild(tableRow3);
                    var newentry4 = document.createElement('td');
                tableRow3.appendChild(newentry4);
                newentry4.textContent='The Vertical Summation';
                var tot = 0;
                for (var k = 0; k < hourArray.length; k++) {
                    var tot = 0;
                    var newentry4 = document.createElement('td');
                tableRow3.appendChild(newentry4);// these for the last cell in the tale which is null
                    for(var h=0;h<allStates.length;h++){ 
                    tot += allStates[h].randomMulRanByCus[k] 
                    newentry4.textContent = tot;}}
                    var newentry5 = document.createElement('td');
                    tableRow3.appendChild(newentry5);
                    var att=document.createAttribute('class');
                    att.value="last100";
                    newentry5.setAttributeNodeNS(att);
                    newentry5.textContent=null;
                // newentry4.textContent = tot;
        }
    }
}