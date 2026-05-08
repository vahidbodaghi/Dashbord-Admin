import clsx from "clsx";
import { useState } from "react";
import { BiX } from "react-icons/bi";
import ModalFooter from "./ModalFooter";

export default function Modal({ Trigger, children, title, onSubmit }) {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => setIsOpenModal(!isOpenModal);

  return (
    <>
      <div onClick={openModal}>{Trigger}</div>
      <div
        className={clsx(
          "fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 scroll-auto",
          isOpenModal ? "" : "invisible opacity-0",
        )}
      >
        <div className="max-w-full rounded-lg overflow-hidden bg-white drop-shadow-2xl/30  max-h-full scroll-auto">
          <div className="flex items-center justify-between px-4 h-4 my-4 ">
            <span className="text-lg text-zinc-800 font-bold">{title}</span>
            <button
              className="text-2xl text-zinc-500 cursor-pointer"
              onClick={openModal}
            >
              <BiX />
            </button>
          </div>
          <div className="p-4 py-5 border-y border-gray-500 shadow bg-gray-200">
            {children}
          </div>
          <div className="min-h-14 flex items-center justify-end px-4 gap-2 ">
            <ModalFooter onSubmit={onSubmit} openModal={openModal} />
          </div>
        </div>
      </div>
    </>
  );
}
