import "./Main.css";
import { Search } from "../Search/Search";
import { Products } from "../Products/Products";
import { Modal } from "../Modal/Modal";
import { useProducts } from "../hooks/product";

export const Main = () => {
  const {
    loading,
    error,
    modalItem,
    products,
    setItemID,
    setModalItemOpen,
    setPendingModal,
    setSearch,
    modalItemOpen,
    pendingModal,
  } = useProducts();

  const openModal = (id: string) => {
    setItemID(id);
    setModalItemOpen(true);
    setPendingModal(true);

    setTimeout(() => {
      setPendingModal(false);
    }, 1000);
  };

  const closeModal = () => {
    setModalItemOpen(false);
  };

  return (
    <div className="main">
      <Search setSearch={setSearch} />
      {loading && <p className="loader">Loading...</p>}
      {error && <p className="error">{error}</p>}
      <div className="main__items">
        {products.map((product, key) => (
          <Products product={product} key={key} openModal={openModal} />
        ))}
      </div>
      <Modal
        modalItem={modalItem}
        setModalItemOpen={modalItemOpen}
        pendingModal={pendingModal}
        closeModal={closeModal}
      />
    </div>
  );
};
