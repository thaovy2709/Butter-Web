var pHeader = (function() {
    var content;
  
    var init = function() {
      content = $('#header');
      content.html(`
      <div id="header1">
      <div id="logo">
        <a><img src="/img/logovang.png" alt="Butter" id="logo"></a>
      </div>

      <div id="delivery">
        <img src="/img/shipping.png" alt="shipping" id="shipping_icon">
        <span>
          <h6><b>Giao hàng</b></h6>
          <p>Trường Đại học Kinh tế - Luật</p>
        </span>
      </div>

      <div class="search_wrapper">
        <div class="search_bar">
          <input type="text" name="" placeholder="Hôm nay bạn muốn ăn gì...">
          <span class="search_icon"><img src="/img/icon/Search.svg"></span>
          <span class="bottom"></span>
          <span class="right"></span>
          <span class="top"></span>
          <span class="left"></span>
        </div>
      </div>

      <!--Start of cart-->
      <div class="link">
        <div class="cart"><a href="cart.html">
            <div class="icon"><img src="/img/icon/Bag.svg"></div>
          </a></div>
        <!--End of cart-->

        <!--Start of notification-->
        <div class="notification"><a href="notification.html">
            <div class="icon"><img src="/img/icon/Bell.svg"></div>
          </a>
          <ul class="subnav">
            <p id="notification-lable">Thông báo của bạn</p>
            <li>
              <a href="cart.html">
                <div class="notify-section">
                  <div class="notify-thumb">
                    <img src="/img/notification/noti1.svg">
                  </div>
                  <div class="notify-text">
                    <span>
                      <h6>Đơn hàng đang xử lý</h6>
                      <p>26/11/2022</p>
                    </span>
                    <p>Bạn đã đặt hàng thành công! Hiện đơn hàng đang được chuẩn bị và sẽ giao đến bạn trước 5 giờ
                      chiều.</p>
                  </div>
                </div>
              </a>

              <a href="productlist.html">
                <div class="notify-section">
                  <div class="notify-thumb">
                    <img src="/img/notification/noti2.svg">
                  </div>
                  <div class="notify-text">
                    <span>
                      <h6>Kẹo ngon mời bạn ăn nha</h6>
                      <p>25/11/2022</p>
                    </span>
                    <p>Silver Pop sang xịn mịn đã chính thức ra mắt tại nhà Butter rồi đấy! Thử ngay bạn nhé.</p>
                  </div>
                </div>
              </a>

              <a href="myvoucher.html">
                <div class="notify-section">
                  <div class="notify-thumb">
                    <img src="/img/notification/noti3.svg">
                  </div>
                  <div class="notify-text">
                    <span>
                      <h6>Ví Momo tặng bạn mã 50k</h6>
                      <p>24/11/2022</p>
                    </span>
                    <p>Mã giảm có hiệu lực đến hết ngày 30/11. Đến ngay Butter và mua đơn hàng 100k để áp mã bạn nhé.
                    </p>
                  </div>
                </div>
              </a>

              <a href="promotion.html">
                <div class="notify-section">
                  <div class="notify-thumb">
                    <img src="/img/notification/noti4.svg">
                  </div>
                  <div class="notify-text">
                    <span>
                      <h6>Gift box mùa Noel</h6>
                      <p>23/11/2022</p>
                    </span>
                    <p>Butter sắp ra mắt gift box độc quyền cho mùa Noel 2022 để bạn dành tặng những người thân yêu.</p>
                  </div>
                </div>
              </a>

              <a href="blog.html">
                <div class="notify-section">
                  <div class="notify-thumb">
                    <img src="/img/notification/noti5.svg">
                  </div>
                  <div class="notify-text">
                    <span>
                      <h6>Tất tần tật về cake flour</h6>
                      <p>22/11/2022</p>
                    </span>
                    <p>Bài blog mới: Tất tần tật về cake flour đã được cập nhật. Đọc để hiểu thêm về cake flour bạn nhé.
                    </p>
                  </div>
                </div>
              </a>

              <a href="#">
                <div class="notify-section">
                  <div class="notify-thumb">
                    <img src="/img/notification/noti6.svg">
                  </div>
                  <div class="notify-text">
                    <span>
                      <h6>Butter chào bạn mới</h6>
                      <p>20/11/2022</p>
                    </span>
                    <p>Butter chào bạn. Chúc bạn sẽ có nhiều trải nghiệm tuyệt vời nhé!</p>
                  </div>
                </div>
              </a>

            </li>
          </ul>
        </div>

        <!--End of notification-->

        <!--Start of account-->
        <div class="account"><a href="myaccount.html">
            <div class="icon"><img src="/img/icon/avatar.svg"></div>
          </a>
          <ul class="subnav">
            <li>
              <a href="myaccount.html">
                <div class="icon"><img src="/img/icon/viewer.svg"></div>
                <span>Tài khoản của tôi</span>
              </a>

            </li>
            <li>
              <a href="signup.html">
                <div class="icon"><img src="/img/icon/addmember.svg"></div>
                <span>Đăng ký</span>
              </a>

            </li>
            <li>
              <a href="signup.html">
                <div class="icon"><img src="/img/icon/signin.svg"></div>
                <span>Đăng nhập</span>
              </a>

            </li>
            <li>
              <a href="signup.html">
                <div class="icon"><img src="/img/icon/signout.svg"></div>
                <span>Đăng xuất</span>
              </a>

            </li>
          </ul>
        </div>
      </div>
    </div>
    <!--End of account-->

    <div id="header2" class="active">
      <div class="nav-category"><a href="productlist.html">
          <img src="/img/icon/category.svg">
          <span class="active" id="select"><b>Danh mục sản phẩm</b></span>
          <i><img class="icon" src="/img/icon/Expand_down_bold.svg"></i>
        </a>

        <ul class="subnav">
          <li><a href="productlistcookie.html">Bánh quy</a></li>
          <li><a href="productlistcandy.html">Kẹo</a></li>
          <li><a href="productlistbread.html">Bánh mì</a></li>
          <li><a href="productlistcake.html">Bánh kem</a></li>
          <li class="last-item"><a href="productlistdrink.html">Thức uống</a></li>
        </ul>
      </div>

      <div id="navigation">
        <ul class="nav">
          <li><a class="active" href="index.html" class="now">Trang chủ</a></li>
          <li><a href="aboutus.html">Về Butter</a></li>
          <li><a href="butterid.html">ButterID</a></li>
          <li><a href="blog.html">Blogs</a></li>
          <li><a href="promotion.html">Khuyến mãi</a></li>
          <li><a href="gallery.html">Gallery</a></li>
          <li><a href="support.html">Hỗ trợ</a></li>
        </ul>
      </div>
    </div>
      `);
    };
  
    return {
      init: init
    }
  })();

$(document).ready(function(){
    pHeader.init();
})