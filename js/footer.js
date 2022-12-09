var pFooter = (function() {
    var content;
  
    var init = function() {
      content = $('#footer');
      content.html(`
      <div class="row footer-body">
      <div class="row">
        <div class="col col-four footer-section">
          <h3 class="footer-title">VỀ BUTTER</h3>
          <hr class="footer-hr">
          <div class="footer-content">
            <a class="footer-infor" href="">Câu chuyện thương hiệu</a> <br>
            <a class="footer-infor" href="">Sứ mệnh Butter</a> <br>
            <a class="footer-infor" href="">Khuyến mãi</a> <br>
            <a class="footer-infor" href="">Sản phẩm Butter</a> <br>
            <a class="footer-infor" href="">Cửa hàng</a> <br>
          </div>
        </div>

        <div class="col col-four footer-section">
          <h3 class="footer-title">HỖ TRỢ</h3>
          <hr class="footer-hr">
          <div class="footer-content">
            <a class="footer-infor" href="">Chính sách bảo mật</a> <br>
            <a class="footer-infor" href="">Chính sách thanh toán</a> <br>
            <a class="footer-infor" href="">Chính sách giao hàng</a> <br>
            <a class="footer-infor" href="">Điều khoản sử dụng</a>
          </div>
        </div>

        <div class="col col-four footer-section">
          <h3 class="footer-title">LIÊN HỆ</h3>
          <hr class="footer-hr">
          <div class="footer-content">
            <a class="footer-infor" href=""><img src="/img/icon/locationfooter.svg">B2-14, Tầng B2, Sài Gòn Centre, 65
              Lê Lợi, P. Bến Nghé, Q.1, TP. HCM</a> <br>
            <a class="footer-infor" href=""><img src="/img/icon/phonefooter.svg">028 3821 7219</a> <br>
            <a class="footer-infor" href=""><img src="/img/icon/mailfooter.svg">butterbakery@gmail.com</a> <br>
          </div>
        </div>

        <div class="col col-third footer-section">
          <img src="/img/icon/fanpage.svg">
          <div class="footer-content">
            <div class="socials-list-icon">
              <a href=""><img src="/img/icon/facebook.svg"></i></a>
              <a href=""><img src="/img/icon/instagram.svg"></i></a>
              <a href=""><img src="/img/icon/tik_tok.svg"></i></a>
            </div>
          </div>
        </div>

      </div>
      <br>

      <div class="row">

        <div class="col col-third footer-section">
          <h3 class="footer-title">THÔNG TIN KHUYẾN MÃI</h3>
          <hr class="footer-hr">
          <div class="footer-content center-content">
            <div>
              <input type="text" name="" placeholder="Nhập email của bạn *" required id="" class="form-control">
            </div>
            <div>
              <input type="text" name="" placeholder="Đóng góp ý kiến của bạn cho Butter nhé (nếu có)" id=""
                class="form-control form-control-fb">
            </div>
            <button class="form-send"><span>Gửi</span></button>
          </div>
        </div>

        <div class="col col-third footer-section">
          <h3 class="footer-title">PHƯƠNG THỨC THANH TOÁN</h3>
          <hr class="footer-hr">
          <div class="footer-content">
            <div class="payment-list">
              <img src="/img/icon/momo.svg">
              <img src="/img/icon/zalopay.svg">
              <img src="/img/icon/shopeepay.svg">
            </div>
          </div>
        </div>

        <div class="col col-four footer-section" style="margin-left: 24px">
          <img src="/img/icon/bocongthuong.svg" alt="Bộ công thương" width="70%">
        </div>
      </div>
    </div>
      `);
    };
  
    return {
      init: init
    }
  })();

$(document).ready(function(){
    pFooter.init();
})