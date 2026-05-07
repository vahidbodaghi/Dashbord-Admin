import { useState } from "react";
import SectionTitle from "../../components/common/SectionTitle";
import { useNavigate } from "react-router";
import Summaries from "../../features/Summaries/Summaries";
import DetailsCharts from "../../features/DetailsCharts/DetailsCharts";
import ProductsTable from "../../features/ProductTable/ProductsTable";
import QuickOverview from "../../features/QuickOverview/QuickOverview";

export default function Home() {
  const [isRedirecting, setIsRedirecting] = useState(false);
  const navigate = useNavigate();

  const toggle = () => {
    setIsRedirecting(!isRedirecting);
  };

  const CTAButton = () => {
    const clickHandler = () => {
      toggle();
      setTimeout(() => {
        navigate("products");
      }, 2000);
    };
    return (
      <button
        onClick={clickHandler}
        className="bg-green-600/80 font-regular px-4 py-2 text-sm rounded-md cursor-pointer hover:opacity-90 text-black"
      >
        {isRedirecting ? "در حال انتقال..." : "ایجاد محصول"}
      </button>
    );
  };
  return (
    <>
      <SectionTitle title={"داشبورد"} Buttons={<CTAButton />} />
      <Summaries/>
      <div>
        <DetailsCharts/>
        <ProductsTable/>
        <QuickOverview/>
      </div>
    </>
  );
}
