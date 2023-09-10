import { AiFillCalendar, AiFillSetting } from "react-icons/ai";
import { BiSolidDashboard } from "react-icons/bi";
import { MdBedroomParent } from "react-icons/md";
import { FaUserTie } from "react-icons/fa";

export const navItems = [
  {
    href: "/",
    item: "Dashboard",
    icon: <BiSolidDashboard />,
  },
  {
    href: "/booking",
    item: "Room Booking",
    icon: <AiFillCalendar />,
  },
  {
    href: "/rooms",
    item: "Hotel Rooms",
    icon: <MdBedroomParent />,
  },
  {
    href: "/settings",
    item: "Settings",
    icon: <AiFillSetting />,
  },
];
