import clsx from "clsx";
import { NavLink } from "react-router";

export default function SidbarBody({ menus }) {
  return (
    <ul className="mt-10 space-y-8 font-light">
      {menus.map((menu) => (
        <li
          key={menu.id}
          className="*:flex *:items-center *:gap-5 w-full px-2 *:p-2 text-xl"
        >
          <NavLink
            to={menu.href}
            className={({ isActive }) =>
              clsx(
                isActive &&
                  "bg-green-100 relative before:absolute before:h-full before:w-1 before:bg-gray-500 before:-right-2 ",
                "hover:bg-green-200/90 rounded-2xl",
              )
            }
          >
            <menu.Icon /> {menu.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
