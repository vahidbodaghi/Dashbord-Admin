import clsx from "clsx";
import { BiShoppingBag } from "react-icons/bi";
import { BsEye, BsEyeSlash } from "react-icons/bs";

const ProductCard = ({ product }) => {
  return (
    <article className="w-full duration-150  p-4  space-y-3 border border-green-400 bg-white ">
      <header className="h-[200px] w-full flex items-center justify-center overflow-hidden!">
        <img
          src={product.image}
          className="size-full object-cover duration-150 hover:scale-110  transition-all rounded-lg"
          alt={product.title}
        />
      </header>
      <main className="space-y-6">
        <h2 className="font-bold line-clamp-2">{product.title}</h2>
        <p className=" text-neutral-500 line-clamp-3 text-sm">
          {product.description}
        </p>

        <div className="flex justify-between items-center gap-1">
          <div className="text-xs text-zinc-600 inline-flex gap-1 items-center">
            <BiShoppingBag className="size-4" />
            <span>تعداد موجودی:</span>
            <span>{product.inventory}</span>
          </div>
          <div
            className={clsx(
              "rounded-md text-sm flex justify-between items-center gap-1 py-0.5 px-1",
              product.isPunlished
                ? "bg-green-400/50 text-green-600"
                : "bg-red-400/50 text-red-600",
            )}
          >
            {product.isPunlished ? (
              <>
                <BsEye />
                منتشر شده
              </>
            ) : (
              <>
                <BsEyeSlash />
                مخفی شده
              </>
            )}
          </div>
        </div>
      </main>
      <footer className="flex items-center justify-between">
        <div className="inline-flex items-center gap-1">
          <span className="text-lg font-black"> {product.price} </span>
          <span className="text-zinc-500 text-xs">تومان</span>
        </div>

        <div className="flex items-center gap-1 text-lg!">Icons</div>
      </footer>
    </article>
  );
};

export default ProductCard;
