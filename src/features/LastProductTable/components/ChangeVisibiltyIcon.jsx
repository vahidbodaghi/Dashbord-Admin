import { HiEye } from "react-icons/hi2";
import Modal from "../../../components/common/Modal/Modal";
import clsx from "clsx";

export default function ChangeVisibiltyIcon({ onToggle, product }) {
  const Trigger = () => (
    <button className="text-lg text-green-600 cursor-pointer">
      <HiEye className="text-xl" />
    </button>
  );
  return (
    <Modal
      title="تغییر وضعیت انتشار"
      Trigger={<Trigger />}
      onSubmit={() => onToggle(product.id)}
    >
      <div>
        <p>
          آیا از{" "}
          <span
            className={clsx(
              product.isPunlished
                ? "text-red-600 bg-red-400/60"
                : "text-green-600 bg-green-400/60",
              "px-2 rounded-lg py-1 inline-block",
            )}
          >
            <strong>{product.isPunlished ? "خصوصی" : "عمومی"}</strong>
          </span>{" "}
          کردن این محصول اطمینان دارید؟
        </p>
      </div>
    </Modal>
  );
}
