import React from 'react'
import './Search.css';

export default function Search() {
    return (
      <div>
        <form action="/search" method="get">
          <div className="input-group">
            <input
              style={{ width: "100%" }}
              type="text"
              className="form-control"
              placeholder="Bạn cần tìm gì hôm nay?"
            />
            <span style={{ display: "block" }} className="input-group-btn">
              <button className="btn btn-default" type="submit">
                <i class="fa fa-search"></i>
              </button>
            </span>
          </div>
        </form>
        <button className='btn-close close'>
        </button>
      </div>
    );
}
