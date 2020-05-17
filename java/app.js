'use strict';

// Seattle	23	65	6.3
// Tokyo	3	24	1.2
// Dubai	11	38	3.7
// Paris	20	38	2.3
// Lima	    2	16	4.6
var hourArray=['6am', '7am', '8am' ,'9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
var seattle ={ 
    name : 'seattle',              
    minCust: 23 ,
    maxCust: 65,
    avgCookieSale:6.3 ,
    rcust:[],
    rarray: [],
    
    randomCust: function(){
        
        this.rcust=randomCustomers(Math.floor(Math.random() * Math.floor(100)));
        // console.log(seattle.rcust);
        this.rarray=calculation(seattle.rcust);
    }
    
}


seattle.randomCust();






var container = document.getElementById('seattle');
var header2 = document.createElement('h2');
header2.textContent=seattle.name;
container.appendChild(header2);
var unlisted = document.createElement('ul');
container.appendChild(unlisted);
createUnlested1();

var tokyo ={
    name: 'tokyo',
    minCust: 3,
    maxCust: 24,
    avgCookieSale: 1.2,
    rcust:[],
    rarray: [],

    randomCust: function(){
        
        this.rcust=randomCustomers(Math.floor(Math.random() * Math.floor(100)));
        // console.log(seattle.rcust);
        this.rarray=calculation(tokyo.rcust);
    }
}
tokyo.randomCust();

var container = document.getElementById('seattle');
var header2 = document.createElement('h2');
header2.textContent=tokyo.name;
container.appendChild(header2);
var unlisted = document.createElement('ul');
container.appendChild(unlisted);
createUnlested2();





var dubai ={
    name:'dubai',
    minCust:11 ,
    maxCust: 38,
    avgCookieSale:3.7 ,
    randomCust: function(){
        
        this.rcust=randomCustomers(Math.floor(Math.random() * Math.floor(100)));
        // console.log(seattle.rcust);
        this.rarray=calculation(dubai.rcust);
    }
}
dubai.randomCust();
var container = document.getElementById('seattle');
var header2 = document.createElement('h2');
header2.textContent=dubai.name;
container.appendChild(header2);
var unlisted = document.createElement('ul');
container.appendChild(unlisted);
createUnlested3();

var paris= {
    name:'paris',
    minCust:20 ,
    maxCust: 38,
    avgCookieSale: 2.3,
    rcust:[],
    rarray: [],
    
    randomCust: function(){
        
        this.rcust=randomCustomers(Math.floor(Math.random() * Math.floor(100)));
        // console.log(seattle.rcust);
        this.rarray=calculation(seattle.rcust);
    }
}
paris.randomCust();
var container = document.getElementById('seattle');
var header2 = document.createElement('h2');
header2.textContent=paris.name;
container.appendChild(header2);
var unlisted = document.createElement('ul');
container.appendChild(unlisted);
createUnlested4();


var lima ={
    name:'lima',
    minCust: 2,
    maxCust: 16,
    avgCookieSale:4.6 ,
    rcust:[],
    rarray: [],
    
    randomCust: function(){
        
        this.rcust=randomCustomers(Math.floor(Math.random() * Math.floor(100)));
        // console.log(seattle.rcust);
        this.rarray=calculation(lima.rcust);
    }
}
lima.randomCust();
var container = document.getElementById('seattle');
var header2 = document.createElement('h2');
header2.textContent=lima.name;
container.appendChild(header2);
var unlisted = document.createElement('ul');
container.appendChild(unlisted);
createUnlested5();

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
   
    return randomCust; 
}



function calculation(a){
    
    var arrr=[];
    var b=[];
    for (var i=0; i<14; i++){

 b[i]= Math.round(seattle.avgCookieSale) * a[i];

arrr.push(b[i]);

    }
    return arrr;
    
}
function createUnlested1 (){
    
    for(var i= 0 ; i<hourArray.length; i++){
var list1=document.createElement('li');
unlisted.appendChild(list1);
list1.textContent=`${ hourArray[i]} : ${seattle.rarray[i]} cookies`;
    }
}



function createUnlested2 (){
    
    for(var i= 0 ; i<hourArray.length; i++){
var list1=document.createElement('li');
unlisted.appendChild(list1);
list1.textContent=`${ hourArray[i]} : ${tokyo.rarray[i]} cookies`;
    }
}

function createUnlested3 (){
    
    for(var i= 0 ; i<hourArray.length; i++){
var list1=document.createElement('li');
unlisted.appendChild(list1);
list1.textContent=`${ hourArray[i]} : ${dubai.rarray[i]} cookies`;
    }
}

function createUnlested4 (){
    
    for(var i= 0 ; i<hourArray.length; i++){
var list1=document.createElement('li');
unlisted.appendChild(list1);
list1.textContent=`${ hourArray[i]} : ${paris.rarray[i]} cookies`;
    }
}

function createUnlested5 (){
    
    for(var i= 0 ; i<hourArray.length; i++){
var list1=document.createElement('li');
unlisted.appendChild(list1);
list1.textContent=`${ hourArray[i]} : ${lima.rarray[i]} cookies`;
    }
}