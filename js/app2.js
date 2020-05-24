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
var i = 0;

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



var seattle = new States('Seattle', 23, 65, 6.3); // These for lab 8

seattle.rCustomers();
var tokyo = new States('Tokyo', 3, 24, 1.2);
tokyo.rCustomers();
var dubai = new States('Dubai', 11, 38, 3.7);
dubai.rCustomers();
var paris = new States('Paris', 20, 38, 2.3);
paris.rCustomers();
var lima = new States('Lima', 2, 16, 4.6);
lima.rCustomers();
// console.log(allStates);


var forms = document.getElementById('formOne');
forms.addEventListener('submit', function (event) {
    event.preventDefault();
    var nameOfShop = event.target.nameOfShop.value;
    var minCustomers = parseInt(event.target.minc.value);
    var maxCustomers = parseInt(event.target.maxc.value);
    var average =parseFloat( event.target.avg.value);
    // console.log(minCustomers, maxCustomers, average);
    // console.log(minCustomers);
    var shops = new States(nameOfShop, minCustomers, maxCustomers, average);

    shops.rCustomers();
    if (allStates[i].name == '' || allStates[i].minCust == '' || allStates[i].maxCust == '' || allStates[i].avgCookieSale == '') {// To ensure all values have been entered
        alert(`Please Enter All Values`);
        // console.log(allStates[i].name,allStates[i].minCust,allStates[i].maxCust,allStates[i].avgCookieSale);
    } else {
        createTable(i);
        i++;
    }


}

)


var container2 = document.getElementById('divone');// to hang the conrainer in the divone ID
var table1 = document.createElement('table');
table1.setAttribute('id', 'thisIsMyTable');
// var tableRow=document.createElement('tr');
// var tableData=document.createElement('td');
container2.appendChild(table1);
// createTable();

var f;

for (f = 0; f < allStates.length; f++) {
    createTable(f);
    i++;// to progress to the index of array when new entries occurred
}







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

    }
    return newArray;
}


function createTable(i) { //This function will be called from the Form and the fixed table( for data that already exists )
    // console.log(f);
    // console.log( allStates[i].name);
    for (var edit = 0; edit < allStates.length; edit++) {
        if (nameOfShop.value == allStates[edit].name && f>=5) {
            // console.log(nameOfShop.value == allStates[edit].name);
            
            allStates[edit].minCust =parseInt(minc.value) ;
            allStates[edit].maxCust = parseInt(maxc.value);
            allStates[edit].avgCookieSale =parseFloat( avg.value);
            // console.log(allStates[edit].minCust);
            // console.log(edit);
            switch (nameOfShop.value) {
                case 'Seattle': seattle.rCustomers();break;
                case 'Tokyo': tokyo.rCustomers();break;
                case 'Dubai':dubai.rCustomers();break;
                    case 'Paris':paris.rCustomers();break;
                        case 'Lima':lima.rCustomers();break;
                
            }
            
            var totNew = document.getElementById(`final${edit}`);
            // console.log(totNew);
            var tot=0;
            console.log(tot);
            // console.log(some);
            // console.log(nameOfShop.value);
            for (var r = 0; r < hourArray.length; r++) {
                var el = document.getElementById(`${edit}` + r);
                // console.log(allStates[edit].randomMulRanByCus[r]);
                tot += allStates[edit].randomMulRanByCus[r];
                // console.log(tot);
                // console.log(tot);
                if(nameOfShop.value==allStates[edit]){
                    console.log(nameOfShop.value==allStates[edit]);
                el.textContent = allStates[edit].randomMulRanByCus[r];
            }
                // console.log(el);
                // console.log(totNew);
            }
            // console.log(r);
            if(nameOfShop.value==allStates[edit]){
            }
            totNew.textContent=tot;
            var finalTableRow = document.getElementById('finalr');
            // table1.removeChild(finalTableRow);

            break;
        }

    }
    // if (nameOfShop.value != allStates[0].name  ) {
        if (i != 0 && f <= 5) {// To erase the final row then update it again in its instructions next
            var finalTableRow = document.getElementById('finalr');
            table1.removeChild(finalTableRow);
        }
        if (i == 0 && f < 5) {

            // console.log(i);
            var tableRow = document.createElement('tr');// beginning of the table
            table1.appendChild(tableRow);
            var newentry = document.createElement('td');
            tableRow.appendChild(newentry);

            newentry.textContent = null;// First cell in the table
            for (var j = 0; j < hourArray.length; j++) {
                var newentry = document.createElement('td');
                tableRow.appendChild(newentry);
                newentry.textContent = hourArray[j];

            }
            var newentry = document.createElement('td');
            tableRow.appendChild(newentry);
            newentry.textContent = 'Daily Location Total';// End of the first Row
        }
        var tot = 0;

        // console.log(allStates[i].name==allStates[i].nameOfShop);
        var tableRow = document.createElement('tr');// beginning of the Row 2 3 4 ..
        table1.appendChild(tableRow);
        var newentry = document.createElement('td');
        tableRow.appendChild(newentry);
        newentry.setAttribute('id', i);
        newentry.textContent = allStates[i].name; // Name of the shop

        for (var j = 0; j < hourArray.length; j++) {// To Enter the entries of the shop name's row
            var newentry = document.createElement('td');
            tableRow.appendChild(newentry);
            newentry.textContent = allStates[i].randomMulRanByCus[j];
            newentry.setAttribute('id', `${i}` + j);
            tot += allStates[i].randomMulRanByCus[j]; // horizantal total

        }


        var newentry = document.createElement('td');//submit total
        newentry.setAttribute('id', `final${i}`);
        tableRow.appendChild(newentry);
        newentry.textContent = tot;



        if (f >= 5) {// To erase the final row then update it again in its instructions next
            var finalTableRow = document.getElementById('finalr');
            // table1.removeChild(finalTableRow);
        }


    // }

    var finalTableRow = document.createElement('tr');// this is the final row in the table
    finalTableRow.setAttribute('id', 'finalr');
    // console.log(finalTableRow);
    table1.appendChild(finalTableRow);
    var newentry = document.createElement('td');
    finalTableRow.appendChild(newentry);
    newentry.textContent = 'The Vertical Summation';
    var tot = 0;
    for (var k = 0; k < hourArray.length; k++) {
        var tot = 0;
        var newentry = document.createElement('td');
        finalTableRow.appendChild(newentry);// these for the last cell in the table which is null
        for (var h = 0; h < allStates.length; h++) {
            tot += allStates[h].randomMulRanByCus[k]
            newentry.textContent = tot;
        }
    }
    var newentry = document.createElement('td');
    finalTableRow.appendChild(newentry);
    var att = document.createAttribute('class');
    att.value = "last100";
    newentry.setAttributeNodeNS(att);
    newentry.textContent = null;


    document.getElementById("formOne").reset();// To reset the inputs for the form after submit

    // return i;


}
// for (var edit = 0; edit < allStates.length; edit++) {
//     if (nameOfShop.value == allStates[edit].name) {
//         allStates[edit].name = 'hello';
//         console.log(allStates[edit].name);
//         var el = document.getElementById('010');
//         console.log(el);

//         break;
//     }

// }





//
//
// These things for the previous lab i think for lab 8
// function createTable(){
//     var tableRow=document.createElement('tr');
//     table1.appendChild(tableRow);
// for(var i=0;i<hourArray.length;i++){
//     var newentry=document.createElement('td');
//     tableRow.appendChild(newentry);
//     newentry.textContent=hourArray[i];

// }
// }
// function createTable(i) {
//     console.log(i);
//     // table1.textContent=null;
//     for (var i; i < allStates.length + 1; i++) {
//         switch (i) {// I used 'switch' just to make space in the beginning of the table
//             case 0:
//                 var tableRow = document.createElement('tr');
//                 table1.appendChild(tableRow);
//                 var newentry = document.createElement('td');
//                 tableRow.appendChild(newentry);

//                 newentry.textContent = null;
//                 for (var j = 0; j < hourArray.length; j++) {
//                     var newentry = document.createElement('td');
//                     tableRow.appendChild(newentry);
//                     newentry.textContent = hourArray[j];

//                 }
//                 var newentry = document.createElement('td');
//                 tableRow.appendChild(newentry);
//                 newentry.textContent = 'Daily Location Total';
//                 // var tableRow2 = document.createElement('tr');
//                 // table1.appendChild(tableRow2);

//                 break;
//             case 1:
//             case 2:
//             case 3:
//             case 4:
//             case 5:
//                 console.log(i);
//                 var tableRow = document.createElement('tr');
//                 table1.appendChild(tableRow);
//                 var newentry = document.createElement('td');
//                 tableRow.appendChild(newentry);
//                 newentry.textContent = allStates[i - 1].name;
//                 // console.log(allStates[i - 1].name);
//                 for (var j = 0; j < hourArray.length; j++) {
//                     var newentry = document.createElement('td');
//                     tableRow.appendChild(newentry);
//                     // console.log(allStates[0]);
//                     newentry.textContent = allStates[i - 1].randomMulRanByCus[j];

//                 }
//                 var newentry = document.createElement('td');
//                 tableRow.appendChild(newentry);
//                 var tot = 0;
//                 for (var k = 0; k < hourArray.length; k++) { tot += allStates[i - 1].randomMulRanByCus[k] }
//                 newentry.textContent = tot;
//                 // if (i==allStates.length){i++;}
//                 // console.log(i);
//                 break;
//             default:
//                 var tableRow = document.createElement('tr');
//                 table1.appendChild(tableRow);
//                 var newentry4 = document.createElement('td');
//                 tableRow.appendChild(newentry);
//                 newentry.textContent = 'The Vertical Summation';
//                 var tot = 0;
//                 for (var k = 0; k < hourArray.length; k++) {
//                     var tot = 0;
//                     var newentry = document.createElement('td');
//                     tableRow.appendChild(newentry);// these for the last cell in the table which is null
//                     for (var h = 0; h < allStates.length; h++) {
//                         tot += allStates[h].randomMulRanByCus[k]
//                         newentry.textContent = tot;
//                     }
//                 }
//                 var newentry = document.createElement('td');
//                 tableRow.appendChild(newentry);
//                 var att = document.createAttribute('class');
//                 att.value = "last100";
//                 newentry.setAttributeNodeNS(att);
//                 newentry.textContent = null;

//             // newentry4.textContent = tot;
//         }
//     } console.log(tableRow);
//     console.log(i);
//     return i;
// }
// // table1=null;
// var Parent = document.getElementById('thisIsMyTable');
// while(Parent.hasChildNodes())
// {
//    Parent.removeChild(Parent.firstChild);
// }