import { createContext, useState } from "react";

export const ModalContext = createContext();

function ModalProvider({ children }) {
  const [showModal, setShowModal] = useState(false);
  const [productData, setProductData] = useState([]);

  function selectHandler(data) {
    setShowModal(true);
    setProductData(data);
  }

  const contextValue = {
    showModal,
    setShowModal,
    selectHandler,
    productData,
  };
  return (
    <>
      <ModalContext.Provider value={contextValue}>
        {children}
      </ModalContext.Provider>
    </>
  );
}

export default ModalProvider;
