import { createContext, useState } from "react";

const projectContext = createContext();

const ProjectProvider = ({ children }) => {
  const [cart, setCart] = useState(["1", "2", "3", "7"]);

  const addToCart = (obj) => {
    let ocart = [...cart];
    ocart.push(obj);
    setCart(ocart);
  };

  const removeToCart = (documentId) => {
    let ocart = [...cart];
    const productIndex = ocart.findIndex((el) => el.documentId == documentId);
    ocart.splice(productIndex, 1);
    setCart(ocart);
  };

  return (
    <projectContext.Provider
      value={{
        cart,
        removeToCart,
        addToCart,
      }}
    >
      {children}
    </projectContext.Provider>
  );
};

export { ProjectProvider, projectContext };
