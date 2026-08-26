import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// Product images

// Bouquet flowers
import flower1 from "../assets/flower-1.png";
import flower2 from "../assets/flower-2.png";
import flower3 from "../assets/flower-3.jpg";
import red1 from "../assets/red-1.jpg";

// Sunflowers
import yellow2 from "../assets/yellow-2.webp";
import yellow1 from "../assets/yellow-1.webp";

// Fresh flowers
import white1 from "../assets/fresh-white.webp";
import pink1 from "../assets/fresh-pink.jpg";
import red2 from "../assets/fresh-red.jpg";

// Orchids
import orchid1 from "../assets/orchid-blue.jpg";
import orchid2 from "../assets/mix-orchid.jpg";

// Pink bouquet
import pinkBouquet from "../assets/pink-boq.jpg";

// Sevanthi
import sev2 from "../assets/sev-2.webp";
import sev1 from "../assets/sev-white.webp";

// Redux
import { addToCart } from "../redux/cartSlice";

import {
  addToWishlist,
  removeFromWishlist,
} from "../redux/wishlistSlice";


function Product({ search, category }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Get wishlist items from Redux
  const wishlistItems = useSelector(
    (state) => state.wishlist.items
  );

  // Get cart items from Redux
  const cartItems = useSelector(
    (state) => state.cart.items
  );


  // =========================
  // PRODUCTS
  // =========================

  const products = [
    {
      id: 1,
      name: "Purple Orchid Bouquet",
      image: flower1,
      price: "₹699",
      category: "Bouquet",
    },

    {
      id: 2,
      name: "Rose Bouquet",
      image: flower2,
      price: "₹599",
      category: "Bouquet",
    },

    {
      id: 3,
      name: "Mixed Flower Basket",
      image: flower3,
      price: "₹899",
      category: "Bouquet",
    },

    {
      id: 4,
      name: "Red Roses Bouquet",
      image: red1,
      price: "₹799",
      category: "Bouquet",
    },

    {
      id: 5,
      name: "Yellow Sunflowers",
      image: yellow2,
      price: "₹699",
      category: "Loose Flowers",
    },

    {
      id: 6,
      name: "Yellow Sunflowers",
      image: yellow1,
      price: "₹799",
      category: "Loose Flowers",
    },

    {
      id: 7,
      name: "White Lilies",
      image: white1,
      price: "₹899",
      category: "Garland",
    },

    {
      id: 8,
      name: "Pink Peonies",
      image: pink1,
      price: "₹999",
      category: "Garland",
    },

    {
      id: 9,
      name: "Red Roses",
      image: red2,
      price: "₹799",
      category: "Bouquet",
    },

    {
      id: 10,
      name: "Blue Orchid",
      image: orchid1,
      price: "₹1299",
      category: "Orchid",
    },

    {
      id: 11,
      name: "Mixed Orchids",
      image: orchid2,
      price: "₹1499",
      category: "Orchid",
    },

    {
      id: 12,
      name: "Pink Bouquet",
      image: pinkBouquet,
      price: "₹1299",
      category: "Bouquet",
    },

    {
      id: 13,
      name: "Sevanthi",
      image: sev2,
      price: "₹599",
      category: "pooja",
    },

    {
      id: 14,
      name: "White Sevanthi",
      image: sev1,
      price: "₹499",
      category: "pooja",
    },
  ];


  // =========================
  // SEARCH + CATEGORY FILTER
  // =========================

  const filteredProducts = products.filter((item) => {

    const matchesSearch =
      !search ||
      item.name
        .toLowerCase()
        .includes(search.toLowerCase());


    const matchesCategory =
      !category ||
      category === "All" ||
      item.category === category;


    return matchesSearch && matchesCategory;
  });


  // =========================
  // ADD TO CART
  // =========================

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };


  // =========================
  // WISHLIST
  // =========================

  const handleWishlist = (item) => {

    const exists = wishlistItems.some(
      (wishlistItem) =>
        wishlistItem.id === item.id
    );


    if (exists) {

      dispatch(
        removeFromWishlist(item.id)
      );

    } else {

      dispatch(
        addToWishlist(item)
      );

    }
  };


  // =========================
  // BUY NOW
  // =========================

  const handleBuyNow = (item) => {

    dispatch(
      addToCart(item)
    );

    navigate("/cart");
  };


  // =========================
  // UI
  // =========================

  return (

    <Row
  className="g-2"
  style={{
    marginLeft: "-8px",
    marginRight: "-8px",
  }}
>

      {/* Products Heading */}

      <Col xs={12}>

        <h2
          className="mb-5"
          style={{
            color: "#2b5605c7",
            fontFamily: "Georgia",
            fontWeight: "bold",
            marginLeft: "120px",
          }}
        >

          <i className="bi bi-arrow-right"></i>{" "}

          Products

        </h2>

      </Col>


      {/* Products */}

      {filteredProducts.length > 0 ? (

        filteredProducts.map((item) => {

          // Wishlist check

          const isWishlist =
            wishlistItems.some(
              (wishlistItem) =>
                wishlistItem.id === item.id
            );


          // Cart check

          const cartItem =
            cartItems.find(
              (cartItem) =>
                cartItem.id === item.id
            );


          return (

            <Col
              xs={6}
              sm={6}
              lg={3}
              className="mb-3 px-1"
              key={item.id}
            >

              <Card
                className="shadow border-0 h-100"
                style={{
                  borderRadius: "15px",
                }}
              >

                {/* Product Image */}

                <Card.Img
                  variant="top"
                  src={item.image}
                  alt={item.name}
                  style={{
                        height: "clamp(170px, 25vw, 300px)",
                        width: "100%",
                        objectFit: "contain",
                        backgroundColor: "#f8f8f8",
                        borderTopLeftRadius: "15px",
                        borderTopRightRadius: "15px",
                          }}
                  />


                <Card.Body className="text-center">

  {/* Product Name */}
  <Card.Title
    style={{
      fontSize: "20px",
      fontWeight: "500",
      marginBottom: "10px",
    }}
  >
    {item.name}
  </Card.Title>

  {/* Price */}
  <h5 className="text-success mb-3">
    {item.price}
  </h5>

  {/* Wishlist + Add To Cart */}
  <div
    className="d-flex justify-content-center align-items-center gap-2 mb-2"
  >

    {/* Wishlist */}
    <Button
      variant={
        isWishlist
          ? "danger"
          : "outline-danger"
      }
      style={{
        width: "52px",
        height: "45px",
        padding: "0",
      }}
      onClick={() =>
        handleWishlist(item)
      }
    >
      <i
        className={
          isWishlist
            ? "bi bi-heart-fill"
            : "bi bi-heart"
        }
        style={{ fontSize: "20px" }}
      ></i>
    </Button>

    {/* Add To Cart */}
    <Button
      variant={
        cartItem
          ? "success"
          : "outline-dark"
      }
      style={{
        height: "45px",
        fontSize: "15px",
        whiteSpace: "nowrap",
      }}
      onClick={() =>
        handleAddToCart(item)
      }
    >
      <i className="bi bi-cart-plus"></i>{" "}
      {cartItem
        ? `Added (${cartItem.quantity})`
        : "Add to Cart"}
    </Button>

  </div>

  {/* Buy Now */}
  <Button
    variant="dark"
    className="w-100"
    style={{
      height: "45px",
      fontSize: "16px",
    }}
    onClick={() =>
      handleBuyNow(item)
    }
  >
    <i className="bi bi-lightning-fill"></i>{" "}
    Buy Now
  </Button>

</Card.Body>

              </Card>

            </Col>

          );

        })

      ) : (

        <Col>

          <h4 className="text-center text-danger">
            No products found
          </h4>

        </Col>

      )}

    </Row>

  );
}


export default Product;