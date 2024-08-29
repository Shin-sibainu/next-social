import { SIDEBAR_ITEMS } from "@/app/constants/navigation";
import Link from "next/link";

const LeftSidebar = () => {
  return (
    <nav className="p-4 border-r h-full">
      <ul className="space-y-4">
        {SIDEBAR_ITEMS.map((item) => (
          <li key={item.path}>
            <Link
              href={item.path}
              className="flex items-center hover:bg-gray-200 px-4 py-2 transition-all duration-150 rounded-xl md:text-xl"
            >
              {item.icon && <item.icon className="w-6 h-6 mr-2" />}
              <span className="font-semibold">{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default LeftSidebar;
