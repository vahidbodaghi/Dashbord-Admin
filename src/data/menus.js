import { BiCommentDetail } from "react-icons/bi";
import {
  HiOutlineChatBubbleLeftRight,
  HiOutlineHome,
  HiOutlineShoppingCart,
  HiOutlineUsers,
} from "react-icons/hi2";

const menus = [
  {
    id: crypto.randomUUID(),
    href: "/",
    title: "داشبورد",
    Icon: HiOutlineHome,
  },
  {
    id: crypto.randomUUID(),
    href: "products",
    title: "محصولات",
    Icon: HiOutlineShoppingCart,
  },
  {
    id: crypto.randomUUID(),
    href: "users",
    title: "کاربران",
    Icon: HiOutlineUsers,
  },
  {
    id: crypto.randomUUID(),
    href: "tickets",
    title: "تیکت ها",
    Icon: BiCommentDetail,
  },
  {
    id: crypto.randomUUID(),
    href: "comments",
    title: "کامنت ها",
    Icon: HiOutlineChatBubbleLeftRight,
  },
];

export default menus;
