fetch("/data/productList.json")
.then(function(response){
    return response.json();
})
.then(function(productList){
    let placeholder = document.querySelector(".item-card");
    let out ="";
    for(let item of productList){
        out +=  `
        <a href="productdetail.html">
        <div class="product-detail">
          <div style="width:225px;height:225px;overflow:hidden">
            <img class="item-img" src="/img/ProductList/daisy1.png">
          </div>
          <div class="item-content">
            <div class="item-name">
              <h3>Daisy</h3>
              <img src="/img/icon/addtowishlist.svg">
            </div>
            <div class="rating">
              <img src="/img/icon/yellowstar.svg">
              <div class="rate">
                <p>4.9</p>
                <span>Còn 50 sản phẩm</span>
              </div>
            </div>
            <div class="unit">
              <p>Đơn vị: cái</p>
            </div>
            <div class="price">
              <h3 class="sale-price">250.000 vnđ</h3>
            </div>
          </div>
        </div>
        <button class="btnDesign">
          <div class="btnOrderText">
            <img src="/img/icon/BagRed.svg">
            <h3>Đặt mua</h3>
          </div>
        </button>
        </a>
        `;
    }
    placeholder.innerHTML = out;

})
