import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={`sticky py-4 ${styles.header}`}>
      <div className="container">
        <div className="w-full flex items-center justify-between">
          <div className={`flex-1 ${styles.brandArea}`}>
            <h2 className="font-bold text-2xl">My e-Shop</h2>
          </div>
          <div className={`flex-2 ${styles.searchArea}`}>
            <div className={`w-full ${styles.searchWrapper}`}>
              <select className={styles.categoryDropdown}>
                <option>All Category</option>
                <option>Men</option>
                <option>Women</option>
              </select>
              <input className="w-full" placeholder="Search here ...." />
              <i class="uil uil-search"></i>
            </div>
          </div>
          <div className={`flex-1 ${styles.cartLogin}`}>
            <div className={styles.cartLoginWrapper}>
              <div className={styles.cart}>
                <i class="uil uil-shopping-bag"></i>
                <span className={styles.cartProductCount}>0</span>
              </div>
              <div className={styles.login}>
                <i class="uil uil-user"></i>
                <div className={styles.loginregister}>
                  <label>Login</label>
                  <label>Register</label>
                </div>
              </div>
              <i class="uil uil-list-ui-alt"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
