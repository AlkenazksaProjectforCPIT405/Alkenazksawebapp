import React, { useState, useEffect } from "react";

import "./pages_css/orderspage.css";

const apiUrl = "http://localhost:9000/server/api";

function OrdersPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        const email = localStorage.getItem("email");
        var requestOptions = {
          method: "GET",
          redirect: "follow",
        };
        try {
            console.log(email);
          const response = await fetch(
           apiUrl+ `/getOrders.php?email=${email}`,
            requestOptions
          );
          const result = await response.json();
          setOrders(result);
          console.log(result)
        } catch (e) {
          alert("Oops, Something went wrong.");
        }
      };
    fetchData();
  }, []);

  return (
    <div className="orders">
      <h1 className="orders-heading">Orders</h1>
      {orders.length > 0 ? (
        <table className="orders-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Email</th>
              <th>Items</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
  {orders.map((order) => (
    <tr key={order.id}>
      <td>{order.id}</td>
      <td>{order.email}</td>
      <td>
        <ul>
          {order.items.map((item, index) => (
            <li key={index}>
              {item.name} ({item.quantity})
            </li>
          ))}
        </ul>
      </td>
      <td>{order.total_price}</td>
    </tr>
  ))}
</tbody>
        </table>
      ) : (
        <p className="orders-no-results">No orders found.</p>
      )}
    </div>
  );
}

export default OrdersPage;