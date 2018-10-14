//2
const computeStr = function (num) {
  let str = '';
  while (num > 0) {
    num = num -1;
    str = str + '*'
  };
  return str;
};
const computeSpace = function (num) {
  let spc = '';
  while (num > 0 ){
  num = num - 1 
  spc = spc + ' '
  };
   return spc;
   };
   
const triangleStars = function (h) {
  let space = '';
  let numOfSpc = h
  while (h > 0) {
    space = computeSpace(numOfSpc - h) + computeStr(h*2-1);
    h = h-1
	console.log(space);
  };
};
triangleStars(5);

//3

const multiToSingle = function (myArray){
	let array = [];
	let a = myArray.length;
  while(a > 0){
    a = a - 1;	
	let b = myArray[0].length;
  let c = 0;
  let d = myArray[0];
	let e = 0;
	let f = myArray[1].length;
	let g = myArray[1];
	let h = 0;
  while(b > 0){
    array[c] = d[e];
		e = e + 1;
		c = c + 1;
		b = b - 1;
		}	
		while(f > 0){
		array[c] = g[h];
		h = h + 1;
		c = c + 1;
		f = f - 1;
		}
	}
	return array
} 
multiToSingle([[1,2,3],[4,5,6]]); 


//4


const findMinMax = function (arr,bool) {
	if(bool === true){	
		let length = arr.length;
		let a = 0;
		let b = 0;
		while(length > 0){
			length = length - 1;
			b = arr[length];
			if(a < b) {
			a = b;
			};	
		};
		console.log (a);
	};
	
	if(bool === false){
		let length = arr.length;
		let c = 0;
		let d = 0;
		while(length > 0){
			length = length - 1
			if(c === 0){
			c = arr[length];
			};
			if( d < c ) {
			c = d;
			};
			
		};
		console.log (c);
	};
};
findMinMax([4,2,66,-44,8],true)   
findMinMax([4,2,66,-44,8],false) 

//5

const forEach=function (arr, func){
    a = -1;
    while(a != arr.length-1){
        a = a+1;
        func(arr[a]);
      }
  }
    
  forEach([4,3,2], function (val){
    console.log(val);
  });
	
//6
	
const sumM = function (arr) {
	let a = 0;
	let b = arr.length; 
	while(b > 0){
    b = b - 1;
		a = a + arr[b]; 
	}
	console.log(a)
}
sumM([4,3,2]);

//7
 
const reverse = function (str){
		  let a = str.length;
		  let b = '';
		  while(a > 0){
			  a = a - 1;
			  b = b + str[a];	  
		  }
		  console.log(b);
	  }  
	  reverse('abcd');
	  
	  
//8
const checkerBoard = function (arg){
		  let a = arg;
		  let b = 1;
		  let spc = '';
		  let spc1 = '';
		  while(arg > 0){
			  b = b + 1;
			  if (b % 2 === 0) {
				  while(a > 0){
					  a = a - 1;
					 spc = spc + "*";
				  } 
				  spc1 = spc1 + spc;
			  }
				  else {
					  while(a > 0){
						  a = a -1 ;
						  spc = spc + "*";
					  }
					  spc1 = spc1 + " " + spc;
				  }

			  spc1 = spc1 + "\n";
			  arg = arg - 1; 
			  } console.log(spc1);
		  }	  
	  checkerBoard(5);