'use strict';

// Seattle	23	65	6.3
// Tokyo	3	24	1.2
// Dubai	11	38	3.7
// Paris	20	38	2.3
// Lima	    2	16	4.6

var seattle ={                 
    minCust: 23 ,
    maxCust: 65,
    avgCookieSale:6.3 ,
    rcust:[],
    rarray: [],
    
    randomCust: function(){
        // return Math.floor(Math.random() * Math.floor(max));
        // var max= Math.floor(Math.random() * Math.floor(1000));
        // console.log(max);
        // console.log(max-10);
        this.rcust=randomCustomers(Math.floor(Math.random() * Math.floor(1000)));
        console.log(seattle.rcust);
        this.rarray=calculation(seattle.rcust);
    }
    
}
seattle.randomCust();
console.log(seattle);
console.log(seattle.rarray);
console.log(seattle.rcust);

// console.log(a);

var tokyo ={
    minCust: 3,
    maxCust: 24,
    avgCookieSale: 1.2,
}

var dubai ={
    minCust:11 ,
    maxCust: 38,
    avgCookieSale:3.7 ,
}

var paris= {
    minCust:20 ,
    maxCust: 38,
    avgCookieSale: 2.3,
}

var lima ={
    minCust: 2,
    maxCust: 16,
    avgCookieSale:4.6 ,
}

// Seattle	23	65	6.3
// Tokyo	3	24	1.2
// Dubai	11	38	3.7
// Paris	20	38	2.3
// Lima	2	16	4.6
function randomCustomers(max){// generate random customers for all objects
    var randomCust=[];
   for(var i=0;i<14;i++){
   var c=Math.floor(Math.random() * Math.floor(max));
   randomCust.push(c);}
   
    return randomCust; //Math.floor(Math.random() * Math.floor(max));
}

// var arr = [];
//         for (var i = 0; i < 5; i++)
//         {
//             arr.push(Math.floor(Math.random() * 6) + 1)
//         }
//         console.log(arr);

function calculation(a){
    // console.log(a);
    var arrr=[];
    var b=[];
    for (var i=0; i<14; i++){
// var b=Math.floor( seattle.avgCookieSale * a);
// var b= Math.round(seattle.avgCookieSale) * (Math.floor(Math.random() * Math.floor(1000)));
 b[i]= Math.round(seattle.avgCookieSale) * a[i];
// console.log(b);
arrr.push(b[i]);
// console.log(arrr);
    }
    return arrr;
    // console.log(b);
}