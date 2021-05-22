

let foodArray=[
    {
        image:"../images/chapshoro2.jpg",
        fName:"Chap Shrow", 
        fPrice:"RS: 200",
        type:2,
        disc:"Chapshoro is the most delicious cuisine of Gilgit-Baltistan."

    },
    {
        image:"../images/tumoro.jpg",
        fName:"Tumoro Chai", 
        fPrice:"RS: 150",
        type:1,
        disc:"Tumuro is collected from the high mountains, surrounding Nagar valley."
    },
    {
        image:"../images/baling.jpg",
        fName:"Baling Chai", 
        fPrice:"RS: 300",
        type:1,
        disc:"They boil walnuts shells and black tea in the water."
    },
    {
        image:"../images/mamtu1.JPG",
        fName:"Mamtu", 
        fPrice:"RS: 250",
        type:1,
        disc:"Mamtu or meat dumpling is a steam-dish, of mince meat of lamb or beef."
    },
    {
        image:"../images/sharbat.jpg",
        fName:"Sharbat", 
        fPrice:"RS: 500",
        type:2,
        disc:"Sharbat is another energizing dish from Gilgit-Baltistan. The locals prepare it with wheat and butter."
    },
    {
        image:"../images/chupati.jpg",
        fName:"Chappati", 
        fPrice:"RS: 150",
        type:1,
        disc:"Chappati (bread) is a basic item of the breakfast in Gilgit-Baltistan.It is made up of wheat flour, which remains in the Oven (Tandoor) overnight."

    },
    
    {
        image:"../images/Diram.jpg",
        fName:"Diram Fiti", 
        fPrice:"RS: 500",
        type:2,
        disc:"Diram Fiti is bread, made from sprouted wheat flour, with its natural sweetness. The locals serve it with a mixture of butter, almonds or apricot oil.",
    },
    {
        image:"../images/giyaling.png",
        fName:"Giyaling", 
        fPrice:"RS: 300",
        type:1,
        disc:"It’s flat bread, which is made up of whole grain flour. It is rich in vitamin B-17 and the local people serve it with butter, spreading over it.",
    },
    {
        image:"../images/biryani.webp",
        fName:"Biryani", 
        fPrice:"RS: 500",
        type:2,
        disc:"Biryani is a mixed rice dish originating among the Muslims of the Indian subcontinent. ",
    },
    {
        image:"../images/karahi.jpg",
        fName:"Karahi", 
        fPrice:"RS: 500",
        type:2,
        disc:"Chicken karahi (known as gosht karahi when prepared with goat or lamb meat instead of chicken), or kadai chicken,",
    },
    
  


];

let foodItems =document.querySelector('.r3')
let breakfastItems =document.querySelector('.r3')

window.onload = function() {
    allFood();
    let x = document.querySelector('#all');
    x.classList.add('allIntial');
    

  };


function allFood(){

     foodItems ='';

    foodArray.forEach(element => {
        const item =`
        
        <div class=" mt-4 text-left col-md-5 col-sm-12 col-lg-5 f-card" id="food-cards">
        
            <div class="row s-card" id="s-card">
                <div class="col-md-5 col-sm-5 col-lg-6 outer-img-div ">
                    <div class=" img-div text-center">
                        <img src="${element.image}" alt="food image" class="food-img" id="food-img">
                    </div>
                    
                </div>
                
                <div class="col-md-7 col-sm-7 col-lg-6">
                    <div class="row r3-1 text-center">
                        <h2 class="pl-2 f-name" id="f-name">${element.fName}</h2>
                        <p class="price">${element.fPrice}</p>
                    </div>
                    <div class="row r3-2 text-center">
                        <p class="pl-2 discription text-center" id="discription">${element.disc}</p>
                    </div>
                </div>
            </div>
           
        </div>
    
        `
    console.log(element.fPrice);
    foodItems += item;
   
    });

    document.querySelector('.r3').innerHTML=foodItems;
    // document.getElementsById('food-cards').innerHtml=allCards;


}

// end of all food 

 //////////Break fast /////////

function Breakfast(){
    let x = document.querySelector('#all');
    x.classList.remove('allIntial');

    let breakfastItems ='';

    foodArray.forEach(element => {
        console.log(element.type);
        let item1 ="";
        if(element.type === 1 )
        {
            item1 =`
            <div class=" mt-4 text-left col-md-5 col-sm-12 col-lg-5 f-card" id="food-cards">
                <div class="row s-card" id="s-card">
                    <div class="col-md-5 col-sm-5 col-lg-6 outer-img-div ">
                        <div class=" img-div text-center">
                            <img src="${element.image}" alt="food image" class="food-img" id="food-img">
                        </div>
                        
                    </div>
                    
                    <div class="col-md-7 col-sm-7 col-lg-6">
                        <div class="row r3-1 text-center">
                            <h2 class="pl-2 f-name" id="f-name">${element.fName}</h2>
                            <p class="price">${element.fPrice}</p>
                        </div>
                        <div class="row r3-2 text-center">
                            <p class="pl-2 discription text-center" id="discription">${element.disc}</p>
                        </div>
                    </div>
                </div>
            </div>
            `
        }

    breakfastItems += item1;
   
    });
 

    document.querySelector('.r3').innerHTML=breakfastItems;
    // document.getElementsById('food-cards').innerHtml=allCards;


}

  // end break fast 

   //////////lunch start /////////

function lunch(){
    let x = document.querySelector('#all');
    x.classList.remove('allIntial');

    let breakfastItems ='';

    foodArray.forEach(element => {
        console.log(element.type);
        let item1 ="";
        if(element.type === 2 )
        {
            item1 =`
            <div class=" mt-4 text-left col-md-5 col-sm-12 col-lg-5 f-card" id="food-cards">
                <div class="row s-card" id="s-card">
                    <div class="col-md-5 col-sm-5 col-lg-6 outer-img-div ">
                        <div class=" img-div text-center">
                            <img src="${element.image}" alt="food image" class="food-img" id="food-img">
                        </div>
                        
                    </div>
                    
                    <div class="col-md-7 col-sm-7 col-lg-6">
                        <div class="row r3-1">
                            <h2 class="pl-2 f-name" id="f-name">${element.fName}</h2>
                            <p class="price ">${element.fPrice}</p>
                        </div>
                        <div class="row r3-2 text-center">
                            <p class="pl-2 discription text-center" id="discription">${element.disc}</p>
                        </div>
                    </div>
                </div>
            </div>
            `
        }

    breakfastItems += item1;
   
    });
 

    document.querySelector('.r3').innerHTML=breakfastItems;
    // document.getElementsById('food-cards').innerHtml=allCards;


}

  // end Shaks fast
