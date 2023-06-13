import React from "react";
import './pages_css/cartpage.css';
import AlkenazLogo from '../imagess/Alkenaz_logo2.webp';
import Footer from "../componets/Footer";
import { useNavigate } from "react-router-dom";
const apiUrl = 'http://localhost:9000/server/api';


function CartPage() {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = React.useState([]);

  React.useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || {};
    setCartItems(Object.values(cart));
  }, []);

  function handleQuantityChange(index, e) {
    const cart = JSON.parse(localStorage.getItem('cart')) || {};
    const item = cart[cartItems[index].product.id];
    item.quantity = parseInt(e.target.value);
    localStorage.setItem('cart', JSON.stringify(cart));
    setCartItems(Object.values(cart));
  }

  function handleSizeChange(index, e) {
    const cart = JSON.parse(localStorage.getItem('cart')) || {};
    const item = cart[cartItems[index].product.id];
    item.size = e.target.value;
    localStorage.setItem('cart', JSON.stringify(cart));
    setCartItems(Object.values(cart));
  }

  function handleRemoveItem(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || {};
    const item = cart[cartItems[index].product.id];
    delete cart[item.product.id];
    localStorage.setItem('cart', JSON.stringify(cart));
    setCartItems(Object.values(cart));
  }

  function handleClearCart() {
    localStorage.removeItem('cart');
    setCartItems([]);
  }

  const subtotal = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const vat = subtotal * 0.15;
  const total = subtotal + vat;

  async function makeOrder() {
    
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      email: localStorage.getItem("email"),
      items: cartItems,
      totalPrice: total,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    const response = await fetch(
      apiUrl+"/makeOrder.php",
      requestOptions
    );
    const result = await response.json();
    console.log(result);

    if (result.success) {
      localStorage.removeItem("items");
      navigate("/");
    } else {
      alert(result.message);
    }
  }

  return (
    <>
      <nav className="navbar">
        <div className="brand">
          <img src={AlkenazLogo} className="brand-logo" alt="alkenaz"/>
        </div>
      </nav>
      <section className="cart">
        <div className="cart-items">
          {cartItems.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Size</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, i) => (
                  <tr key={i}>
                    <td>
                      <img src={item.product.img} alt="" />
                      <div>
                        <h3>{item.product.name}</h3>
                        <p>{item.product.shortDes}</p>
                      </div>
                    </td>
                    <td>
                      <select value={item.size} onChange={(e) => handleSizeChange(i, e)}>
                        <option value="s">S</option>
                        <option value="m">M</option>
                        <option value="l">L</option>
                        <option value="xl">XL</option>
                      </select>
                    </td>
                    <td>
                      <select value={item.quantity} onChange={(e) => handleQuantityChange(i, e)}>
                        {[...Array(10)].map((_, i) => (
                          <option value={i + 1}>{i + 1}</option>
                        ))}
                      </select>
                    </td>
                    <td>{item.product.price * item.quantity} SAR</td>
                    <td>
                      <button onClick={() => handleRemoveItem(i)}>Remove</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>
        {cartItems.length > 0 && (
          <div className="cart-summary">
            <h3>Cart Summary</h3>
            <table>
              <tbody>
                <tr>
                  <td>Subtotal</td>
                  <td>{subtotal} SAR</td>
                </tr>
                <tr>
                  <td>VAT (15%)</td>
                  <td>{vat.toFixed(2)} SAR</td>
                </tr>
                <tr>
                  <td>Total</td>
                  <td>{total.toFixed(2)} SAR</td>
                </tr>
              </tbody>
            </table>
            <button onClick={handleClearCart}>Clear Cart</button>
            <button onClick={makeOrder}>make order</button>
          </div>
        )}
      </section>
      <Footer />
    </>
  );
}

export default CartPage;