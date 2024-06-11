// ! Filtreleme işlemi için;
const searchInput = document.querySelector("#searchInput");
const searcBtn = document.querySelector("#searchBtn");
// console.log(searchInput);
// console.log(searcBtn);


searcBtn.addEventListener("click", function(e){
    e.preventDefault();
    let searcTerm = searchInput.value.trim().toLowerCase();
    // console.log(searcTerm);

    let cards = document.querySelectorAll(".col-4")
    // console.log(cards);

    for(let i = 0; i < cards.length; i++){
        let card = cards[i];
        let productName = card.querySelector(".card-title").innerHTML.toLowerCase();
        // console.log(productName);

        if(productName.includes(searcTerm)){
            card.style.display = "block"
        }else{
            card.style.display = "none"
        }
    }
    searchInput.value = ""
})


// ! Sepeti arttırıp azaltmak için;
const row = document.querySelector(".row");
const sepet = document.querySelector("#result");

row.addEventListener("click", function(e){
    // console.log(e.target);
    if(e.target.className.includes("add-to-card")){
        sepet.innerHTML++;
    }else if(e.target.className.includes("remove-to-card")){
        if(sepet.innerHTML != 0){
            sepet.innerHTML--;
        }
    }
})


// ! Markalara göre Filtreleme yapmak için;
// const toyota = document.querySelector("#toyota");
// const renault = document.querySelector("#renault");
// const peugeot = document.querySelector("#peugeot");

// // console.log(toyota);

// toyota.addEventListener("click", function(){
//     let cards = document.querySelectorAll(".col-4")
//     // console.log(cards);

//     for(let i = 0; i < cards.length; i++){
//         let card = cards[i];
//         let productName = card.querySelector(".card-title").innerHTML.toLowerCase();
//         // console.log(productName);

//         if(productName.includes("toyota")){
//             card.style.display = "block"
//         }else{
//             card.style.display = "none"
//         }
//     }
//     searchInput.value = ""
// })

// renault.addEventListener("click", function(){
//     let cards = document.querySelectorAll(".col-4")
//     // console.log(cards);

//     for(let i = 0; i < cards.length; i++){
//         let card = cards[i];
//         let productName = card.querySelector(".card-title").innerHTML.toLowerCase();
//         // console.log(productName);

//         if(productName.includes("renault")){
//             card.style.display = "block"
//         }else{
//             card.style.display = "none"
//         }
//     }
//     searchInput.value = ""
// })

// peugeot.addEventListener("click", function(){
//     let cards = document.querySelectorAll(".col-4")
//     // console.log(cards);

//     for(let i = 0; i < cards.length; i++){
//         let card = cards[i];
//         let productName = card.querySelector(".card-title").innerHTML.toLowerCase();
//         // console.log(productName);

//         if(productName.includes("peugeot")){
//             card.style.display = "block"
//         }else{
//             card.style.display = "none"
//         }
//     }
//     searchInput.value = ""
// })

// ! Markaya göre filtreleme olayının kısa yolu;
const toyota = document.querySelector("#toyota");
const renault = document.querySelector("#renault");
const peugeot = document.querySelector("#peugeot");

function filtrele(marka){
    const cards = document.querySelectorAll(".col-4");

    for(let i = 0; i < cards.length; i++){
        let card = cards[i];
        let productName = card.querySelector(".card-title").innerHTML.trim().toLocaleLowerCase();

        // ! Short
        card.style.display = productName.includes(marka) ? "block" : "none"

    }
}

toyota.addEventListener("click", ()=> filtrele("toyota"));
renault.addEventListener("click", ()=> filtrele("renault"));
peugeot.addEventListener("click", ()=> filtrele("peugeot"));