import { MdDashboard } from "react-icons/md";
import type { LinksGroupProps } from "../lib/interface";
import { FiAlertCircle } from "react-icons/fi";
import { FaFish } from "react-icons/fa";

export const ops_paths: LinksGroupProps[] = [
  {
    items: [
      {
        label: "Dashboard",
        link: "/",
        icon: MdDashboard,
      },
      { label: "Ponds", link: "/ponds", icon: FaFish },
      { label: "Alerts", link: "/alerts", icon: FiAlertCircle },
    ],
    label: "",
  },
];
