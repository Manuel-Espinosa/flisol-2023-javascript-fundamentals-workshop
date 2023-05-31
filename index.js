let globalNumber = 10;

function foo(){
	console.log(globalNumber); //Variable global
}

foo();

function bar(){
	let localNumber = 20; //Variable Local
	console.log(localNumber);
} 

bar();

function crash(){
	
	console.log(localNumber); //Intentamos acceder a una variable local
}

var localNumber = 2;
crash();
