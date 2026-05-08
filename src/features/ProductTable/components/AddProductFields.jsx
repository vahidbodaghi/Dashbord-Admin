import { useEffect, useState } from "react";
import Modal from "../../../components/common/Modal/Modal";
import useCreate from "../../../hook/useCreate";

export default function AddProductFields({ onCreate }) {
  const [formState, setFormState] = useState({
    title: "",
    description: "",
    price: "",
    image: "",
    isPublished: false,
    inventory: "",
  });

  const { create, loading, error } = useCreate();

  const handleChange = (field, value) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
  };

  const createNewProduct = async () => {
    const newProduct = {
      title: formState.title,
      description: formState.description,
      price: Number(formState.price),
      image: formState.image,
      isPublished: formState.isPublished,
      inventory: Number(formState.inventory),
    };

    const result = await create("http://localhost:3001/products", newProduct);
    if (result) {
      onCreate?.(result);


      setFormState({
        title: "",
        description: "",
        price: "",
        image: "",
        isPublished: false,
        inventory: "",
      });
      return true;
    }

    return false;
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      setFormState((prev) => ({
        ...prev,
        image: reader.result,
      }));
    };

    reader.readAsDataURL(file);
  };

  return (
    <Modal
      title="ایجاد محصول جدید"
      onSubmit={createNewProduct}
      Trigger={
        <button className="bg-green-500/80 font-regular px-4 py-2 text-sm rounded-md cursor-pointer hover:opacity-90 text-white shadow">
          ایجاد محصول
        </button>
      }
    >
      <div className="flex flex-col gap-5 w-full max-w-lg">
        <div className="flex flex-col gap-2">
          <label htmlFor="title" className="text-sm font-medium text-gray-600">
            نام محصول
          </label>
          <input
            type="text"
            id="title"
            value={formState.title}
            onChange={(e) => handleChange("title", e.target.value)}
            placeholder="مثلاً: کفش اسپرت نایکی"
            className="bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-400 transition p-2.5"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="description"
            className="text-sm font-medium text-gray-600"
          >
            توضیحات محصول
          </label>
          <textarea
            id="description"
            rows="3"
            value={formState.description}
            onChange={(e) => handleChange("description", e.target.value)}
            placeholder="مثلاً: این کفش با بالاترین کیفیت برای دویدن طراحی شده..."
            className="bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-400 transition p-2.5 resize-none"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="price" className="text-sm font-medium text-gray-600">
            قیمت (تومان)
          </label>
          <input
            type="number"
            id="price"
            value={formState.price}
            onChange={(e) => handleChange("price", e.target.value)}
            placeholder="مثلاً: ۳۵۰۰۰۰"
            className="bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-400 transition p-2.5"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="inventory" className="text-sm font-medium text-gray-600">
            موجودی (تعداد)
          </label>
          <input
            type="number"
            id="inventory"
            value={formState.inventory}
            onChange={(e) => handleChange("inventory", e.target.value)}
            placeholder="1 عدد"
            className="bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-400 transition p-2.5"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="image" className="text-sm font-medium text-gray-600">
            تصویر محصول
          </label>

          {formState.image && (
            <img
              src={formState.image}
              alt="preview"
              className="h-20 w-20 rounded-lg object-cover border border-gray-200 mb-2"
            />
          )}

          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageUpload}
            className="block w-full text-sm text-gray-600 file:mr-4 file:py-1 file:px-3 file:rounded-lg file:border-0 file:text-sm file:bg-green-500 file:text-white hover:file:bg-green-600 cursor-pointer"
          />
        </div>

        <div className="flex items-center gap-3 mt-2">
          <input
            type="checkbox"
            id="isPublished"
            checked={formState.isPublished}
            onChange={(e) => handleChange("isPublished", e.target.checked)}
            className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
          />
          <label htmlFor="isPublished" className="text-sm text-gray-700">
            انتشار عمومی (فعال باشد یعنی محصول عمومی است)
          </label>
        </div>

        {loading && (
          <p className="text-sm text-gray-400 mt-1">در حال ذخیره تغییرات...</p>
        )}
      </div>
    </Modal>
  );
}
