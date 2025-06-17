import { DollarSign, House, Settings, ShoppingBag, ShoppingCart, Users } from 'lucide-react'


export const menuItems  = [
    {
        id: 1,
        name: "Dashboard",
        icon: House,
        href: "/pages/home",
    },
    {
        id: 2,
        name: "Projects",
        icon: ShoppingBag,
        href: "/pages/projects",
    },
    {
        id: 3,
        name: "Package",
        icon: Users,
        href: "/pages/package",
    },
    {
        id: 4,
        name: "Billing",
        icon: DollarSign,
        href: "",
    },
    {
        id: 5,
        name: "Dev Tools",
        icon: ShoppingCart,
        href: "",
    },
    {
        id: 6,
        name: "Profile",
        icon: Settings,
        href: "",
    },
];