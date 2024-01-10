import React from "react";
import Header from "./Header";

import css from "./Layout.module.scss";


const Layout = ({ children }) => {
    return (
        <>
            <Header />
        <div className={css.container}>
            {children}
        </div>
            </>
    );
};

export default Layout;