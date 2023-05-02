import React from "react";
import "./Modal.css";
import { Data } from "../Types/types";

interface ModalProps {
  modalItem: Data | undefined;
  setModalItemOpen: boolean;
  pendingModal: boolean;
  closeModal: () => void;
}

export const Modal = (props: ModalProps) => {
  return (
    <div
      className={`modal__container ${
        props.setModalItemOpen && "modal__container_open"
      }`}
      onClick={(event) => {
        if (event.target !== event.currentTarget) return;
        props.closeModal();
      }}
    >
      <div className="modal">
        {props.pendingModal ? (
          <span className="modal__loader">Loading...</span>
        ) : (
          <div className="modal__content">
            <div className="modal__box">
              <div
                className="modal__image"
                style={{
                  backgroundImage: `url(${
                    props.modalItem && props.modalItem.urls.regular
                  })`,
                }}
              ></div>
              <div className="modal__info">
                <p className="modal__info_user">
                  {props.modalItem &&
                    (props.modalItem.user.name || "Unknown username")}
                </p>
                <p>
                  <span className="modal__info_category">Location:</span>{" "}
                  {props.modalItem &&
                    (props.modalItem.user.location || "Unknown location")}
                </p>
                <div className="modal__info_likes">
                  <span className="modal__info_category">Likes:</span>{" "}
                  {props.modalItem && props.modalItem.likes}❤️
                </div>
              </div>
            </div>
            <button className="closeModal" onClick={() => props.closeModal()}>
              X
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
