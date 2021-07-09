import Home from "../pages/Home";
import Liquidity from "../pages/Liquidity";
import MarketMakers from "../pages/MarketMakers";
import PoolDetails from "../pages/PoolDetails";

export const routes = [
    {
        path: "/",
        exact: true,
        component: Home
    },
    {
        path: "/market-makers",
        exact: true,
        component: MarketMakers
    },
    {
        path: "/liquidity",
        exact: true,
        component: Liquidity
    },
    {
        path: "/pool/:address",
        exact: true,
        component: PoolDetails
    }
];