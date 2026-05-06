import { useState, useEffect } from "react";
import { BiEdit } from "react-icons/bi";
import Modal from "../../../components/common/Modal/Modal";
import useUpdate from "../../../hook/useUpdate";

export default function EditProductIcon({ product, onUpdate }) {
  const { update, loading } = useUpdate();

  const [formState, setFormState] = useState({
    title: product.title || "",
    description: product.description || "",
    price: product.price || "",
    image: product.image || "",
    isPublished: product.isPunlished ?? false, 
  });

  useEffect(() => {
    setFormState({
      title: product.title || "",
      description: product.description || "",
      price: product.price || "",
      image: product.image || "",
      isPublished: product.isPunlished ?? false,
    });
  }, [product]);

  const handleChange = (field, value) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
  };

  
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      handleChange("image", reader.result);
    };
    reader.readAsDataURL(file);
  };


  const handleSubmit = async () => {
    const updatedProduct = {
      ...product,
      title: formState.title,
      description: formState.description,
      price: Number(formState.price),
      image: formState.image,
      isPunlished: formState.isPublished,
    };

    const result = await update(
      `http://localhost:3001/products/${product.id}`,
      updatedProduct
    );

    if (result) {
      onUpdate?.(result);
      return true; 
    }

    return false; 
  };

  const Trigger = (
    <button
      type="button"
      className="text-lg text-green-700 hover:text-green-600 transition cursor-pointer"
    >
      <BiEdit className="text-xl" />
    </button>
  );

  return (
    <Modal
      title="ویرایش جزئیات محصول"
      Trigger={Trigger}
      onSubmit={handleSubmit}
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
          <label htmlFor="description" className="text-sm font-medium text-gray-600">
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

