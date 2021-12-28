
document.body.innerHTML = `<div class="heading-container"> 
<h1>Brewery List </h1>
</div>`;   

<div id="maincontainer" class="main-container"></div>;

const getData = async () => {
    try {
        const data = await fetch("https://api.openbrewerydb.org/breweries");
        const breweries = await data.json();

        maincontainer.innerHTML = "";
        breweries.forEach(brewery) => {
            displayData(brewery);
        });
    } catch(error) {
        console.log(error);  
    }
};  


 getData();

 const displayData = (obj) => {
       maincontainer.innerHTML += `
       <div class="container">
       <h3 class="blue">Brewery city:<span>${obj.city}</span></h3>
       <p class = "para blue"> Brewery type:<span>${obj.brewery_type}</span></p> 
       <p class = "para blue"> Brewery address:<span>${obj.street}</span></p> 
       <p class = "para blue"> Brewery website:<span>${obj.website_url}</span></p> 
       <p class = "para blue"> Brewery phone:<span>${obj.phone}</span></p>
       
       </div>;`
 };