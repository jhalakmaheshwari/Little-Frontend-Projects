import React from "react";
import { getCartItems } from "../models/cart";
import shoppingItems from "../utils/shoppingItems.json";
import { Link } from "react-router-dom";

class Element {
  constructor(elemName, price, quantity) {
    this.elemName = elemName;
    this.price = price;
    this.quantity = quantity;
  }
}

class Shopping extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: shoppingItems,
      cart: []
    };
  }

  getCart = async () => {
    // getCartItems().then((data) => {
    //   console.log(data);
    // });
    let cartItems = await getCartItems();
    console.log(">>>>>>>", cartItems);
  };

  addToCart = (item) => {
    const quantity = parseInt(document.getElementById("quantity").value);
    console.log("QUANTITY", quantity);

    let updateCartItem;
    if (this.state.cart[item.id]) {
      updateCartItem = this.state.cart[item.id];
      updateCartItem.quantity += quantity;
    } else {
      updateCartItem = new Element(item.title, item.price, quantity);
    }
    console.log("updated cart::", updateCartItem);
    const updateCart = this.state.cart;
    updateCart[item.id] = updateCartItem;
    this.setState({
      cart: updateCart
    });
  };

  createCart = (item) => {
    return (
      <div className="card">
        <img src="img_avatar.png" alt="Avatar" style={{ width: "100%" }} />
        <div className="container">
          <h4>
            <b>{item?.title}</b>
          </h4>
          <div>
            <span>{`Price: $${item?.price}`}</span>
            <select name="quantity" id="quantity">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
            <button id="addToCartBtn" onClick={() => this.addToCart(item)}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    );
  };

  render() {
    console.log("CART", this.state.cart);
    return (
      <>
        Shopping
        <Link to="/shoppingCart">
          <button>
            <span>Cart: {this.state.cart.length}</span>
          </button>
        </Link>
        <ul>
          {this.state.items.map((item) => (
            <li>{this.createCart(item)}</li>
          ))}
        </ul>
      </>
    );
  }
}

export default Shopping;
