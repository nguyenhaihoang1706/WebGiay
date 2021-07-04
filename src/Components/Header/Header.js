import React from "react";
import NavBar from "../NavBar/NavBar";
import Search from "../Search/Search";
import './Header.css';

export default function Header() {
  return (
    <>
    {/* <div className="search-bar">
      <Search/>
    </div> */}
    <header className="header">
        <div className="container">
        <div className="row top-header">
          <div className="col-md-5 left-header">
            <div className="text">
              <span>hotline: </span>
              <p></p>
            </div>
          </div>
          <div className="col-md-2 mid-header">
            <a href="#">
              <img src="./img/logo/logoGiay.jpeg" />
            </a>
          </div>
          <div className="col-md-5 right-header">
            <ul className="justify-end">
              <li className="item item-account">
                <a>TÀI KHOẢN</a>
                <ul>
                  <li>
                    <a>
                      <i style={{ paddingRight: 5 }} class="fas fa-user"></i>
                      Đăng nhập
                    </a>
                  </li>
                  <li>
                    <a>
                      <i
                        style={{ paddingRight: 5 }}
                        class="fas fa-user-plus"
                      ></i>
                      Đăng ký
                    </a>
                  </li>
                </ul>
              </li>
              <li className="item item-cart">
                <a>
                  GIỎ HÀNG
                  <i style={{ height: 10 }} class="fas fa-cart-arrow-down"></i>
                  <span className="count_item_pr">0</span>
                </a>
                <div className="cart-content">
                  <ul>
                    <div>
                      <p>Không có sản phẩm nào trong giỏ hàng.</p>
                    </div>
                  </ul>
                </div>
              </li>
              <li className="item item-search">
                <a>
                  <i class="fas fa-search"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
        <div style={{paddingBottom:10}}class="container nav-bar">
          <NavBar/>
        </div>
      </header>
      </>
  );
}
