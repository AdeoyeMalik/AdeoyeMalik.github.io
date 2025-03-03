const dicv =document.querySelector(".forall");
const did =document.querySelector(".ff");
const searchbtnn =document.querySelector(".searchbtn");

let countries = []
function fetchdata (){
    fetch("https://restcountries.com/v3.1/all")
    .then((response)=>response.json())
    .then ((data)=>{
        countries.push(...data)
        console.log(countries);
        countries.map (( country, index)=>{
            let boat = ` <div class = "ff" key=${country.name.official} onclick="showmore(${index})">
            <h1>${country.name.official}</h1>
            <p>${country.capital[0]}</p>
            <p>${country.region}</p>
            </div>
             ` 
             dicv.innerHTML += boat;
    })
  
    })
    .catch((error)=>console.log(error));

}
fetchdata();
function showmore(num){
      console.log(countries[num])
}
searchbtnn.addEventListener("click",()=>{
    const value =document.querySelector("#wordt");
    let gottenvalue = value.value;
    console.log(gottenvalue);

    fetch(`${gottenvalue}`,{
        method:"GET",
        headers:{
            'Content-Type':'application/json'
        }
    }).then((response)=>(response.json))
    .then((data)=>{
        console.log(data)
        const result =data;
    }).catch((err)=>console.error(err))
})
// assignment dictionary not the sam api like 
// recipe or cook book able to search for a dish 
// movies
// api  weather (country to search)
// mine 
// ecommerce api
