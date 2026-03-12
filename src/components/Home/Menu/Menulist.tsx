"use client";

import { useEffect, useState } from "react";

const MenuList = () => {
  const [menu, setMenu] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/menu")
      .then((res) => res.json())
      .then((data) => setMenu(data));
  }, []);

  const placeOrder = async (item: any) => {
    const orderData = {
      items: [
        {
          name: item.name,
          price: item.price,
          quantity: 1
        }
      ],
      totalPrice: item.price
    };

    await fetch("/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(orderData)
    });

    alert("Order placed!");
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-5">Our Menu</h2>

      {menu.length === 0 ? (
        <p>No menu items available</p>
      ) : (
        menu.map((item: any) => (
          <div key={item._id} className="border p-4 mb-4 rounded">
            <h3 className="text-xl font-semibold">{item.name}</h3>
            <p>{item.description}</p>
            <p className="font-bold text-primary">₹{item.price}</p>

            <button
              className="bg-primary text-white px-4 py-2 mt-2 rounded"
              onClick={() => placeOrder(item)}
            >
              Order
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default MenuList;