import React, { useEffect, useState } from "react";
import styles from "./RandomCategory.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
const products = [
  {
    id: 1,
    title: "Beauty Product #1",
    src: "./assets/img/products/beauty1.jpg",
    description: "Demo product to give you some idea about it.",
    isSizeable: false,
    availableSize: [""],
    category_id: 5,
    tag_id: [],
    stock: 6000,
    sold: 400,
    rating: 4.5,
  },
  {
    id: 2,
    title: "Beauty Product #2",
    src: "./assets/img/products/beauty2.jpg",
    description: "Demo product to give you some idea about it.",
    isSizeable: false,
    availableSize: [""],
    category_id: 5,
    tag_id: [],
    stock: 500,
    sold: 400,
    rating: 4.1,
  },
  {
    id: 3,
    title: "Book #1",
    src: "./assets/img/products/book1.jpg",
    description: "Demo product to give you some idea about it.",
    isSizeable: false,
    availableSize: [""],
    category_id: 7,
    tag_id: [],
    stock: 567,
    sold: 400,
    rating: 4.2,
  },
  {
    id: 4,
    title: "book #2",
    src: "./assets/img/products/book2.png",
    description: "Demo product to give you some idea about it.",
    isSizeable: false,
    availableSize: [""],
    category_id: 7,
    tag_id: [],
    stock: 534,
    sold: 400,
    rating: 4.9,
  },
  {
    id: 5,
    title: "Jewellry #1",
    src: "./assets/img/products/jewllry1.jpg",
    description: "Demo product to give you some idea about it.",
    isSizeable: false,
    availableSize: [""],
    category_id: 6,
    tag_id: [],
    stock: 12,
    sold: 400,
    rating: 4.6,
  },
  {
    id: 6,
    title: "Jewellry #2",
    src: "./assets/img/products/jewllry2.jpg",
    description: "Demo product to give you some idea about it.",
    isSizeable: false,
    availableSize: [""],
    category_id: 6,
    tag_id: [],
    stock: 342,
    sold: 400,
    rating: 5,
  },
  {
    id: 7,
    title: "Monitor #1",
    src: "./assets/img/products/monitor1.jpg",
    description: "Demo product to give you some idea about it.",
    isSizeable: false,
    availableSize: [""],
    category_id: 3,
    tag_id: [],
    stock: 45,
    sold: 400,
    rating: 3.5,
  },
  {
    id: 8,
    title: "Monitor #2",
    src: "./assets/img/products/monitor2.png",
    description: "Demo product to give you some idea about it.",
    isSizeable: false,
    availableSize: [""],
    category_id: 3,
    tag_id: [],
    stock: 234,
    sold: 400,
    rating: 5,
  },
  {
    id: 9,
    title: "Smartphone #1",
    src: "./assets/img/products/phone1.jpg",
    description: "Demo product to give you some idea about it.",
    isSizeable: false,
    availableSize: [""],
    category_id: 1,
    tag_id: [],
    stock: 543,
    sold: 400,
    rating: 4.9,
  },
  {
    id: 10,
    title: "Smartphone #2",
    src: "./assets/img/products/phone2.jpg",
    description: "Demo product to give you some idea about it.",
    isSizeable: false,
    availableSize: [""],
    category_id: 1,
    tag_id: [],
    stock: 56,
    sold: 400,
    rating: 4.8,
  },
  {
    id: 11,
    title: "Smartphone #3",
    src: "./assets/img/products/phone3.png",
    description: "Demo product to give you some idea about it.",
    isSizeable: false,
    availableSize: [""],
    category_id: 1,
    tag_id: [],
    stock: 77,
    sold: 400,
    rating: 4.7,
  },
  {
    id: 12,
    title: "Shirt #1",
    src: "./assets/img/products/shirt1.jpg",
    description: "Demo product to give you some idea about it.",
    isSizeable: false,
    availableSize: [""],
    category_id: 2,
    tag_id: [],
    stock: 98,
    sold: 400,
    rating: 4.6,
  },
  {
    id: 13,
    title: "Shirt #2",
    src: "./assets/img/products/shirt2.png",
    description: "Demo product to give you some idea about it.",
    isSizeable: false,
    availableSize: [""],
    category_id: 2,
    tag_id: [],
    stock: 23,
    sold: 400,
    rating: 4.5,
  },
  {
    id: 14,
    title: "Toy #1",
    src: "./assets/img/products/toy1.jpeg",
    description: "Demo product to give you some idea about it.",
    isSizeable: false,
    availableSize: [""],
    category_id: 8,
    tag_id: [],
    stock: 234,
    sold: 400,
    rating: 5,
  },
  {
    id: 15,
    title: "Toy #2",
    src: "./assets/img/products/toy2.jpg",
    description: "Demo product to give you some idea about it.",
    isSizeable: false,
    availableSize: [""],
    category_id: 8,
    tag_id: [],
    stock: 54,
    sold: 400,
    rating: 5,
  },
  {
    id: 16,
    title: "Toy #3",
    src: "./assets/img/products/toy3.jpg",
    description: "Demo product to give you some idea about it.",
    isSizeable: false,
    availableSize: [""],
    category_id: 8,
    tag_id: [],
    stock: 12,
    sold: 400,
    rating: 4,
  },
  {
    id: 17,
    title: "T-shirt #1",
    src: "./assets/img/products/tshirt1.jpg",
    description: "Demo product to give you some idea about it.",
    isSizeable: false,
    availableSize: [""],
    category_id: 2,
    tag_id: [],
    stock: 44,
    sold: 400,
    rating: 4.5,
  },
  {
    id: 18,
    title: "T-shirt #2",
    src: "./assets/img/products/tshirt2.jpg",
    description: "Demo product to give you some idea about it.",
    isSizeable: false,
    availableSize: [""],
    category_id: 2,
    tag_id: [],
    stock: 980,
    sold: 400,
    rating: 3.5,
  },
  {
    id: 19,
    title: "Television #1",
    src: "./assets/img/products/tv1.jpg",
    description: "Demo product to give you some idea about it.",
    isSizeable: false,
    availableSize: [""],
    category_id: "",
    tag_id: [],
    stock: 23,
    sold: 400,
    rating: 4.8,
  },
  {
    id: 20,
    title: "Television #2",
    src: "./assets/img/products/tv2.jpg",
    description: "Demo product to give you some idea about it.",
    isSizeable: false,
    availableSize: [""],
    category_id: 1,
    tag_id: [],
    stock: 43,
    sold: 400,
    rating: 4.5,
  },
  {
    id: 21,
    title: "Television #3",
    src: "./assets/img/products/tv3.jpg",
    description: "Demo product to give you some idea about it.",
    isSizeable: false,
    availableSize: [""],
    category_id: 4,
    tag_id: [],
    stock: 566,
    sold: 400,
    rating: 3,
  },
  {
    id: 22,
    title: "Television #4",
    src: "./assets/img/products/tv4.png",
    description: "Demo product to give you some idea about it.",
    isSizeable: false,
    availableSize: [""],
    category_id: 1,
    tag_id: [],
    stock: 345,
    sold: 400,
    rating: 5,
  },
];

function RandomCategory() {
  const [randomProducts, setRandomProducts] = useState([]);
  const [randomCategoryName, setRandomCategoryName] = useState("");
  const [randomCategoryid, setRandomCategoryid] = useState("");

  useEffect(() => {
    let rnd = Math.floor(Math.random() * (categories.length - 1 - 1 + 1)) + 1;

    console.log("rnd: ", rnd);
    // Need to check if already this random number selected previously or not when redux will be implemented
    let rndObj = categories.filter((x) => x.id === rnd);
    let rndProcucts = products.filter((x) => x.category_id === rnd);
    console.log("prd: ", rndProcucts);
    if (rndObj.length > 0) {
      setRandomProducts(rndProcucts);
      setRandomCategoryid(rnd);
      setRandomCategoryName(rndObj[0].name);
    }
  }, []);
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return <div className={className} style={{ ...style }} onClick={onClick} />;
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return <div className={className} style={{ ...style }} onClick={onClick} />;
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="randomCategoryProducts">
      <div className="container">
        <div className={styles.randomCategoryArea}>
          <label className={styles.randomCategoryCaption}>
            {randomCategoryName}
          </label>
          <div className={styles.randomCategoryWrapper}>
            {randomProducts &&
              randomProducts.length > 0 &&
              randomProducts.map((n, i) => (
                <div className={styles.randomCategoryItem}>
                  <img src={n.src} alt={n.title} />
                  <label>{n.title}</label>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RandomCategory;
