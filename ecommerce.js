const openpopbtn = document.querySelector(".seerchinn");
const poppingall =document.querySelector(".foralpoping")
const closepopbtn =document.querySelector(".closepopii");
const findproduct = document.querySelector(".run");
const shvle =document.querySelector(".searchinput");
const proddispl = document.querySelector(".secondbody");
const testing=document.querySelector(".try");
const onlybodyp =document.querySelector(".bodypart")
const onlylastp = document.querySelector(".lastpart");
const blanker = document.querySelector(".blank");

// searchvle.value =searchvule;ted
openpopbtn.addEventListener("click",()=>{
    poppingall.style.display="block";
})
closepopbtn.addEventListener("click",()=>{
    poppingall.style.display="none";
    proddispl.style.display="none";
    onlybodyp.style.display="flex";
    onlylastp.style.display="flex";
    blanker.style.display="block"
})
let productss =[];
findproduct.addEventListener("click",()=>{
    // function fetchdata(){
        proddispl.innerHTML = "";
        onlybodyp.style.display="none";
        onlylastp.style.display="none";
        blanker.style.display="none";
    proddispl.style.display="flex";
       searching= shvle.value;
       console.log(searching);
       fetch(`https://dummyjson.com/products/search?q=${searching}`)
        .then(res => res.json())
        .then(data=>{ 
            console.log(data)
            productss.push(...data.products)
            console.log(productss)
            productss.map((prc,index)=>{
                let yut =`  <div class="productdiv">
                <img src="${prc.images[0]}" alt="${prc.images[0]}" class="productimg">
        <p class="productname"><span class="forb4pric">${prc.title} </span><span class="forprice">$${prc.price}</span> </span></p>
        <p class="aboutalitt">Stock:${prc.stock}</p>
        <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
        <br><button class="addtocart">Add to cart</button>
    </div>
                `
                console.log(prc.stock)
                // let index= ++
                proddispl.innerHTML += yut

            })
    
});
})
// fetchdata();
            
/* <img src="${prc[].images}" alt="${prc.products[0].images[0]}" class="productimg"> */
        
