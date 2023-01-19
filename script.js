/* Here is the API endpoint:

https://striveschool-api.herokuapp.com/api/product/



Here is the product model:

{
  "_id": "5d318e1a8541744830bef139", //SERVER GENERATED
  "name": "app test 1",  //REQUIRED
  "description": "somthing longer", //REQUIRED
  "brand": "nokia", //REQUIRED
  "imageUrl": "https://drop.ndtv.com/TECH/product_database/images/2152017124957PM_635_nokia_3310.jpeg?downsize=*:420&output-quality=80", //REQUIRED
  "price": 100, //REQUIRED
  "userId": "admin", //SERVER GENERATED
  "createdAt": "2019-07-19T09:32:10.535Z", //SERVER GENERATED
  "updatedAt": "2019-07-19T09:32:10.535Z", //SERVER GENERATED
  "__v": 0 //SERVER GENERATED
}


"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5MzA5OWU3MzczODAwMTUzNzQzNzIiLCJpYXQiOjE2NzQxMjk1NjEsImV4cCI6MTY3NTMzOTE2MX0.xLZbd18eY9cEszvpns8hA0S8oF5GkKRnIzM6ecPZsKk"




fetch("https://striveschool-api.herokuapp.com/api/put-your-endpoint-here/", {
headers: {
"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5MzA5OWU3MzczODAwMTUzNzQzNzIiLCJpYXQiOjE2NzQxMjk1NjEsImV4cCI6MTY3NTMzOTE2MX0.xLZbd18eY9cEszvpns8hA0S8oF5GkKRnIzM6ecPZsKk"
}
})
https://striveschool-api.herokuapp.com/api/product/
https://striveschool-api.herokuapp.com/books

*/

const url = "https://striveschool-api.herokuapp.com/api/product/5d318e1a8541744830bef139"

const options = {
  method: "GET",
  headers: {
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5MzA5OWU3MzczODAwMTUzNzQzNzIiLCJpYXQiOjE2NzQxMjk1NjEsImV4cCI6MTY3NTMzOTE2MX0.xLZbd18eY9cEszvpns8hA0S8oF5GkKRnIzM6ecPZsKk"
  } 

}

fetch(url, options)
    .then((res) => res.json())
    .then((data) => {
      const container = document.querySelector(".container")
      
      const content =    `
          <div class="col-3">
                  <div class="card">
                     <img src="${data.imageUrl}" class="card-img-top" alt="...">
                      <div class="card-body">
                          <h5 class="card-title">${data.brand} ${data.price}</h5>
                      </div>
                        <button type="button" value="Click" class="btn btn-outline-success" id="addCart" onClick="addToCart(this)">Add to Cart</button>
                        <button type="button" value="Click" onClick="skipBook()" class="btn btn-outline-warning">Skip</button>
                  </div>
          </div> `
    


      container.innerHTML = content
    })
















/*
window.onload = () => {
  getMerch();
}

const getItems = async () => {
    const res = await fetch(url, options)
    const events = await res.json()
    console.log(events)
    .then((res) => res.json())
    .then((data) => {
      const container = document.querySelector(".container")
      const arrayOfItems = data.map(({name, brand, imageUrl, price}) => {
        return `
          <div class="col-3 d-flex align-items-stretch">
                  <div class="card">
                     <img src="${imageUrl}" class="card-img-top" alt="...">
                      <div class="card-body">
                          <h5 class="card-title">${name} ${brand} </h5>
                          <p>Price: ${price}$</p>

                      </div>
                        <button type="button" value="Click" class="btn btn-outline-success" id="addCart" onClick="addToCart(this)">Add to Cart</button>
                        <button type="button" value="Click" onClick="skipItem()" class="btn btn-outline-warning">Skip</button>
                  </div>
          </div> `
    
      })
      const stringOfItems = arrayOfItems.join("")
      console.log(stringOfItems)
      container.innerHTML = stringOfItems
    })
  }


getItems()
*/