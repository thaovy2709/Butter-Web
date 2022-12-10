fetch("./productList.json")
.then(function(response){
    return response.json();
})
.then(function(productList){
    let placeholder = document.querySelector(".item-card");
    let out ="";
    for(let item of productList){
        out +=  `
        <div style="width:225px;height:225px;overflow:hidden">
          <img class="item-img" src='${item.image}'>
        </div>
        <div class="item-content">
          <div class="item-name">
            <h3>${item.name}</h3>
            <img src='${item.wishlist}'>
          </div>
          <div class="rating">
            <img src='${item.rating-star}'>
            <div class="rate">
              <p>${item.rating}</p>
              <span>${item.stock}</span>
            </div>
          </div>
          <div class="unit">
            <p>${item.unit}</p>
          </div>
          <div class="price">
            <h3 class="sale-price">${item.price}</h3>
          </div>
        </div>
        `;
    }
    placeholder.innerHTML = out;

})
