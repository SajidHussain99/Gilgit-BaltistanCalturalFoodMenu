

let foodArray=[
    {
        image:"../images/chapshoro.jpg",
        fName:"Chap Shrow", 
        fPrice:"$15.6",
        type:1,
        disc:"Lorem ipsum dolor sit amet consectetur adipisicing elit"

    },
    {
        image:"../images/chapshoro.jpg",
        fName:"Chap Shrow", 
        fPrice:"$15.6",
        type:1,
        disc:"adipisci earum quas vero quidem! Tempora, fuga maxime."
    },
    {
        image:"../images/dawdo.jpg",
        fName:"dawdo", 
        fPrice:"$15.6",
        type:1
    },
    {
        image:"../images/sharbat.jpg",
        fName:"Sharbat", 
        fPrice:"$20",
        type:1
    },
    {
        image:"../images/friedEgg.jpg",
        fName:"Chap Shrow", 
        fPrice:"$15.6",
        type:3
    },
];

let foodItems =document.querySelector('.r3')
function allFood(){

    let foodItems ='';

    foodArray.forEach(element => {
        const item =`
        <div class="col-md-6 col-sm-12 col-lg-6 f-card" id="food-cards">
        <div class="row s-card" id="s-card">
            <div class="col-md-5 col-sm-5 col-lg-5">
                <div class="img-div">
                    <img src="${element.image}">
                </div>
                
            </div>
            
            <div class="col-md-7 col-sm-7 col-lg-7">
                <div class="row r3-1">
                    <h2 class="pl-2 f-name" id="f-name">${element.fName}</h2>
                    <p class="price" id=">${element.fPrice}</p>
                </div>
                <div class="row r3-2">
                    <p class="pl-2 discription" id="discription">${element.disc}</p>
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

