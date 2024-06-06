

//Creare ciclo numeri 
for (let i = 1; i <= 100; i++){
    console.log(i);



    //Creiamo un IF per i casi dei numeri 

  
    if(i % 3 == 0 && i % 5 == 0) { 

        console.log('fizzbuzz');

    } else if (i % 5 == 0) {
     
        console.log('buzz');
    } else if(i % 3 == 0){
     
        console.log('fizz');
    } else {
     
        console.log(i);
    }
}