import { useEffect, useState } from "react";
import CardProduct from "./components/CardProduct";
import CartListItem from "./components/CartListItem";
import Navbar from "./components/Navbar";

import menus from "./dummy-data";

export default function App() {
  const [total, setTotal] = useState(0);
  const [purchasedItem, setPurchasedItem] = useState(0);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const totalHarga = cart?.reduce((prev, curr) => prev + curr.amount * curr.price, 0);
    const jumlahItem = cart?.reduce((prev, curr) => prev + curr.amount, 0);

    setTotal(totalHarga);
    setPurchasedItem(jumlahItem);
  }, [cart]);

  const addToCart = (id) => {
    const cartIndex = cart?.findIndex((item) => item.id === id);

    if (cartIndex === -1) {
      const menuIndex = menus?.findIndex((item) => item.id === id);
      const newItem = menus[menuIndex];
      newItem.amount = 1;

      setCart([...cart, newItem]);
    } else {
      increaseCartAmount(id);
    }
  };

  const decreaseCartAmount = (id) => {
    const cartIndex = cart?.findIndex((item) => item.id === id);

    if (cart[cartIndex].amount > 1) {
      setCart(
        [...cart]?.map((item, index) => {
          index === cartIndex && item.amount--;
          return item;
        })
      );
    } else {
      setCart([...cart].filter((item) => item.id !== id));
    }
  };

  const increaseCartAmount = (id) => {
    const cartIndex = cart?.findIndex((item) => item.id === id);

    setCart(
      [...cart]?.map((item, index) => {
        index === cartIndex && item.amount++;
        return item;
      })
    );
  };

  return (
    <div className="bg-secondary">
      <Navbar totalItem={purchasedItem} />
      <div className="container py-5">
        <div className="row">
          <div className="col-md-8">
            <div className="card w-100">
              <div className="card-body">
                <div className="row">
                  {menus.map((menu) => (
                    <div key={menu.id} className="col-md-4 col-sm-6 col-12 my-2">
                      <CardProduct {...menu} addToCart={() => addToCart(menu.id)} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <ol className="list-group">
              {cart.map((c) => {
                return <CartListItem key={c.id} {...c} increase={() => increaseCartAmount(c.id)} decrease={() => decreaseCartAmount(c.id)} />;
              })}
              <li className="list-group-item d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Total Harga</div>
                </div>
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(total)}
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}