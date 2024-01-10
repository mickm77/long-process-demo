import React from "react";
import Header from "./Header";

import css from "./Layout.module.scss";


const Layout = ({ children, setPage }) => {
    return (
        <>
            <Header setPage={setPage} />
            <div className={css.container}>
                {children}
            </div>
        </>
    );
};

export default Layout;