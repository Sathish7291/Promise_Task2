
const  API_URL = "https://api.tcgdex.net/v2/en/sets";

const fetchPromise = (content)=>{
  const divtag = document.getElementsByClassName("data-values");
  
  content.forEach(content=>{
    let res =document.createElement("div");
    res.setAttribute("class", "card");
    res.setAttribute("style", "width: 18rem");
    res.innerHTML = ` 
              <img src= "${content.logo}.png" class="card-img-top" alt="Image Not Available">
              <div class="card-body">
              <p class="card-text"> ID : ${content.id.toUpperCase()} </p>
              <p>Name : ${content.name}</p>
              <p>Card-Count : ${content.cardCount.total}</p>
              </div>`;
            divtag[0].append(res);
          })
        }

async function getData()
{
  try{
    let res = await fetch(API_URL,{
      method:"GET",
      headers:{
        "Content-Type":"application/json"
      }
    })
    let content = await res.json()
    if(content.length)
    {
       fetchPromise(content);
    }
  }catch(error){
      console.log(error)
  }
}
getData()