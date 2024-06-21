import React, { useEffect, useRef } from "react";

function Modal({ openModal, closeModal, children, title }) {
  const ref = useRef();

  useEffect(() => {
    if (openModal) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [openModal]);

  return (
    <dialog ref={ref} onCancel={closeModal}>
      <div className="h-96 w-96 flex flex-col p-4">
        <div className="flex justify-end w-full">
          <button
            className="bg-gray-100 hover:bg-sky-500 hover:text-white font-bold size-6 rounded-full transition-all"
            onClick={closeModal}
          >
            x
          </button>
        </div>
        <h2 className="text-lg font-semibold border-b m-1">{title}</h2>
        <div className="">{children}</div>
      </div>
    </dialog>
  );
}

export default Modal;
