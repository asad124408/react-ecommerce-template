import React, { useState } from "react";
import styles from "./Category.module.css";

const categories = [
  {
    id: 1,
    src: "assets/img/category/electronics.jpg",
    name: "Electronics",
    seq: 1.0,
  },
  {
    id: 2,
    src: "assets/img/category/cloth.jpg",
    name: "Clothings",
    seq: 2.0,
  },
  {
    id: 3,
    src: "assets/img/category/computer.jpg",
    name: "Computers",
    seq: 3.0,
  },
  {
    id: 4,
    src: "assets/img/category/home.jpg",
    name: "Home & Kitchen",
    seq: 4.0,
  },
  {
    id: 5,
    src: "assets/img/category/beauty.jpg",
    name: "Health & beauty",
    seq: 7.0,
  },
  {
    id: 6,
    src: "assets/img/category/jewelry.jpg",
    name: "Jewelry",
    seq: 6.0,
  },
  {
    id: 7,
    src: "assets/img/category/book.jpg",
    name: "Books",
    seq: 5.0,
  },
  {
    id: 8,
    src: "assets/img/category/toy.jpg",
    name: "Toys",
    seq: 8.0,
  },
  {
    id: 9,
    src: "assets/img/category/furniture.jpg",
    name: "Furniture",
    seq: 9.0,
  },
  {
    id: 10,
    src: "assets/img/category/shoe.jpg",
    name: "Shoes",
    seq: 10.0,
  },
];

function TopCategory() {
  const [allCategories, setAllCategories] = useState(categories);
  return (
    <div className={styles.topCategory}>
      <div className="container">
        <div className={styles.categoryArea}>
          <label className={styles.categoryCaption}>Top Categories</label>
          <div className={styles.categoryWrapper}>
            {allCategories &&
              allCategories.length > 0 &&
              allCategories.map(
                (n, i) =>
                  n.seq < 9 && (
                    <div className={styles.categoryItem}>
                      <img src={n.src} alt={n.name} />
                      <label>{n.name}</label>
                    </div>
                  )
              )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopCategory;
