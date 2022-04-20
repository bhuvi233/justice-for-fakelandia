import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "./footer";
import { Nav } from "./nav";

export const MainLayout: React.FC = () =>
    <main className="main__container">
        <div>
            <Nav />
            <Outlet/>
        </div>
        <Footer />
    </main>