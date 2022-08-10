
let harryPot= async ()=>{
    let data = await fetch('https://hp-api.herokuapp.com/api/characters ');
    let res = await data.json();
    let newArr=res.slice(0,25);
    console.log(newArr)
    dynaCard(newArr)
}


document.addEventListener('DOMContentLoaded',harryPot)

let dynaCard= (arr,index)=>{

    let cardPlus=''

    arr.forEach(val=>{
      console.log(val.wizard)
       
        cardPlus+=`<div class="col" >
        <div class="card" id="card">
          <img src="${val.image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${val.name}</h5>
            <h6>Actor: ${val.actor}</h6>
            <p>Ancestry: ${val.ancestry?val.ancestry:'No data'}</p>
            <p>House: ${val.house?val.house:'No data'}</p>
            <p>Wizard: ${val.wizard?'Yes':'No'}</p>
            <ul><h6>Wand</h6>
            <li>Wood: ${val.wand.wood?val.wand.wood:'None'}</li>
            <li>Core: ${val.wand.core?val.wand.core:'None'}</li>
            <li>Length: ${val.wand.length?val.wand.length:'None'}</li>
            </ul>
          </div>
        </div>
      </div>`
       
       
    })
    document.getElementById('dynaCard').innerHTML=cardPlus
    
}