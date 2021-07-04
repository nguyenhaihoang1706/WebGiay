import React from 'react'
import './NavBar.css';

export default function NavBar() {
    return (
      <div className="row">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Trang Chủ <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Giới Thiệu
                </a>
              </li>
              <li className="nav-item product">
                <a className="nav-link" href="#">
                  Sản Phẩm
                </a>
                <div className="sanPham-content">
                  <ul className="level0">
                    <li>
                      <a>Adidas</a>
                      <ul>
                        <li>
                          <a>NMD</a>
                        </li>
                        <li>
                          <a>Ultra Boost</a>
                        </li>
                        <li>
                          <a>YEEZY</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a>Nike</a>
                      <ul>
                        <li>
                          <a>AF1</a>
                        </li>
                        <li>
                          <a>Jordan</a>
                        </li>
                        <li>
                          <a>Air max</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a>Puma</a>
                      <ul>
                        <li>
                          <a>Puma One</a>
                        </li>
                        <li>
                          <a>Puma King</a>
                        </li>
                        <li>
                          <a>Puma Future</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Tin Tức
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Liên Hệ
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
}
