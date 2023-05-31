const fullname =document.getElementById("name")
const image = document.getElementById("img")
const title = document.getElementById("title")
const phone = document.getElementById("phone")
const email = document.getElementById("email")
const address = document.getElementById("address")

const url = "http://randomuser.me/api/"

const cardData = () => {

    fetch(url) 
        .then(response => {

            return response.json();

        })
        .then((data) => {
            image.src =` ${data.results[0].image.medium}`;
            fullname.textContent +=`${data.results[0].name.title}. ${data.results[0].name.first} ${data.results[0].name.second} ${data.results[0].name.last}`
            phone.textContent += `${data.results[0].phone}`
            email.textContent += `${data.results[0].email}`
            address.textContent+= `${data.results[0].address}`

            console.log(data.results[0].image.medium)
        });

    

        };

        cardData
    
