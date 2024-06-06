//Creaiamo container per box numeri 
const container = document.querySelector(".container")

//Creare ciclo numeri 
for (let i = 1; i <= 100; i++){
    console.log(i);

    
    //Creiamo box per numeri 
    const element = `<div class="box"> $(i) </div>`;
    console.log(element);


    //Stampiamo in html 
    container.innerHTML+= element;


  


}

