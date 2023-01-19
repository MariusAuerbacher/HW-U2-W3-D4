
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
                        <button type="button" value="Click" class="btn btn-outline-success" id="editBtn">Edit</button>
                        <button type="button" value="Click" id="deleteBtn" class="btn btn-outline-warning">Delete</button>
                  </div>
          </div> `
    


      container.innerHTML = content
      const editBtn = document.querySelector("#editBtn")
      const deleteBtn = document.querySelector("#deleteBtn")
      editBtn.addEventListener("click", () => editProduct(data._id))
      deleteBtn.addEventListener("click", () => deleteProduct(data._id))
    })


    function editProduct(product) {
        console.log(product)
    }
     
    function deleteProduct(product) {
        console.log(product)
    }

