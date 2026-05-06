import { HiOutlineTrash } from "react-icons/hi2";
import Modal from "../../../components/common/Modal/Modal";

export default function RemoveProductIcon({ product, onRemove }) {
  return (
    <Modal
      title="حذف محصول"
      Trigger={
        <button className="text-lg text-red-500 cursor-pointer">
          <HiOutlineTrash className="text-xl" />
        </button>
      }
      onSubmit={onRemove}
    >
      <div className="flex items-center justify-center">
        آیا از حذف محصول
        <p className="px-2 py-1 rounded-md bg-red-500/15 mx-1 text-red-600 font-bold">
          {product.title}
        </p>
        اطمینان دارید؟
      </div>
    </Modal>
  );
}
