import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import ProductProvider from "./contexts/ProductContext.tsx";
import SidebarProvider from "./contexts/SIdebarContext.tsx";
import CartProvider from "./contexts/CartContext.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <SidebarProvider>
        <CartProvider>
            <ProductProvider>
                <React.StrictMode>
                    <App />
                </React.StrictMode>
            </ProductProvider>
        </CartProvider>
    </SidebarProvider>
);
