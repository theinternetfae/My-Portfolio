import Header from "./utilComp/Header.jsx";
import { Outlet } from "react-router-dom";

function Layout() {
    return ( 
        <main className="test">
            <Header />

            <Outlet />
        </main>
    );
}

export default Layout;