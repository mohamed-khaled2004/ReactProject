import { useEffect, useState } from "react";
import axios from "axios";
import "font-awesome/css/font-awesome.min.css";
import Footer from "../Components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import Modal from "react-modal";
import "aos/dist/aos.css";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    zIndex: 10100,
  },
  content: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "50vw",
    padding: "20px",
    maxHeight: "92vh",
    zIndex: 1051,
  },
};

Modal.setAppElement("#root");

export default function TeshirtStore() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [praned, setPraned] = useState([]);
  const [cart, setCart] = useState([]);

  const GetDateTraingProgram = () => {
    axios
      .get(`http://localhost:1337/api/tshirtmos?populate=*`)
      .then((res) => setPraned(res.data.data))
      .catch((err) => console.error("Error fetching data:", err));
  };

  const addToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);
    let updatedCart;

    if (exists) {
      updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      updatedCart = [...cart, { ...product, quantity: 1 }];
    }

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeToCart = (productId) => {
    let updatedCart = [...cart];
    const index = updatedCart.findIndex((item) => item.id === productId);
    if (index !== -1) {
      if (updatedCart[index].quantity > 1) {
        updatedCart[index].quantity -= 1;
      } else {
        updatedCart.splice(index, 1);
      }
      setCart([...updatedCart]);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };

  const getTotalPrice = () =>
    cart.reduce((total, item) => total + item.Tshirts_price * item.quantity, 0);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    if (savedCart) {
      setCart(savedCart);
    }
    GetDateTraingProgram();
    AOS.init();
  }, []);

  return (
    <div>
      <nav className="navbar navbar-light bg-light" style={{ paddingTop: "100px" }}>
        <button className="btn btn-primary" onClick={() => setIsOpen(true)}>
          <FontAwesomeIcon icon={faCartShopping} /> Cart ({cart.length})
        </button>
      </nav>

      <div className="container h-75 pt-1">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
          {praned.map((el) => (
            <div
              key={el.id}
              className="col"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div
                className="card"
                style={{
                  border: "none",
                  height: "100%",
                }}
              >
                <div className="card-img-container" style={{ height: "200px" }}>
                  <img
                    src={`http://localhost:1337/` + el.imgmo[0]?.url}
                    alt={el.title_t}
                    style={{
                      width: "100%",
                      height: "172%",
                      objectFit: "cover",
                      padding: "20px",
                    }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{el.title_t}</h5>
                  <p className="card-text">
                    {el.Tshirts_price || "Price Unavailable"} $
                  </p>
                  <button
                    className="btn btn-primary"
                    onClick={() => addToCart(el)}
                  >
                    Shop
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setIsOpen(false)}
        style={customStyles}
      >
        <h2 className="fs-5">Shopping Cart</h2>

        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul className="list-group mb-4">
            {cart.map((item) => (
              <li
                key={item.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                {item.title_t} - ${item.Tshirts_price} x {item.quantity}
                <div>
                  <button
                    className="btn btn-primary btn-sm me-2"
                    onClick={() => addToCart(item)}
                  >
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => removeToCart(item.id)}
                  >
                    <FontAwesomeIcon icon={faMinus} />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
        <h4>Total: ${getTotalPrice()}</h4>
        <button className="btn btn-primary">Checkout</button>
      </Modal>
    </div>
  );
}
