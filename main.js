const fullname =document.getElementById("fullname")
const image = document.getElementById("image")
const title = document.getElementById("title")
const phone = document.getElementById("phonenumber")
const email = document.getElementById("email")
const address = document.getElementById("streetaddress")
const btn = document.getElementById("btn")
const url = "https://randomuser.me/api/"

function cardData(){

    fetch(url) 
        .then(response => {

            return response.json();

        })
        .then((data) => {
            console.log(data);
            image.src =` ${data.results[0].picture.medium}`;
            fullname.textContent +=`${data.results[0].name.first}  ${data.results[0].name.last}`
            title.textContent = `${data.results[0].name.title}`
            phone.textContent += `${data.results[0].phone}`
            email.textContent += `${data.results[0].email}`
            address.textContent+= `${data.results[0].location.city}`
           

            console.log(data.results[0].image.medium)
        });

    

        };

btn.addEventListener("click", cardData)
    
