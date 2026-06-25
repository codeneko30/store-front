import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route('seasonal-favorites', 'routes/seasonal-favorites.tsx'),
    route('checkout', 'routes/checkout.tsx'),
    route('404', 'routes/404.tsx'),
    route('cart', 'routes/cart.tsx'),
    route('order-confirmation', 'routes/order-confirmation.tsx'),
    route('product-detail', 'routes/product-detail.tsx'),

    route('test', 'routes/test.tsx'),
    route('test-2', 'routes/test-2.tsx'),
    route('test-3', 'routes/test-3.tsx')







] satisfies RouteConfig;
