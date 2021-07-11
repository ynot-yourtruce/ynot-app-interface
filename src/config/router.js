import Home from "../pages/Home";
import Liquidity from "../pages/Liquidity";
import Trading from "../pages/Trading";
import PoolDetails from "../pages/PoolDetails";
import Staking from "../pages/Staking";
import Swap from "../pages/Swap";

export const routes = [
    {
        path: "/",
        exact: true,
        component: Home
    },
    {
        path: "/trading",
        exact: true,
        component: Trading
    },
    {
        path: "/liquidity",
        exact: true,
        component: Liquidity
    },
    {
        path: "/swap",
        exact: true,
        component: Swap
    },
    {
        path: "/pool/:address",
        exact: true,
        component: PoolDetails
    },
    {
        path: "/staking",
        exact: true,
        component: Staking
    }
];