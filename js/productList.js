function loadProduct(url){
  fetch(url)
  .then(function(response){
      return response.json();
  })
  .then(function(productList){
      let placeholder = document.querySelector(".product-item");
      let out ="";
      for(let item of productList){
          out +=  `
         
          <div class="item-card">
          
          <div class="product-detail">
            <div style="width:225px;height:225px;overflow:hidden">
            <a href="productdetail.html">
              <img class="item-img" src="${item.image}">
            </a>
            </div>
            <div class="item-content">
              <div class="item-name">
                <h3>${item.name}</h3>
                <img src="/img/icon/addtowishlist.svg">
              </div>
              <div class="rating">
                <img src="/img/icon/yellowstar.svg">
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
          </div>
          <a href="productdetail.html">
          <button class="btnDesign">
            <div class="btnOrderText">
              <img src="/img/icon/BagRed.svg">
              <h3>Đặt mua</h3>
            </div>
          </button>
          </a>
          </div>
         
         
          `;
      }
      placeholder.innerHTML = out;
  
  })
}



