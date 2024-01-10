import React from "react";

import css from "./Header.module.scss";

const Header = ({ setPage }) => {
    return (
        <div className={css.container}>
            <h1 onClick={() => setPage("Hello")}>A Header</h1>
            <ul>
                <li onClick={() => setPage("Spinner")}>Spinner</li>
                <li onClick={() => setPage("ProgressBar")}>Progess</li>
                <li onClick={() => setPage("Data")}>Data</li>
                <li onClick={() => setPage("Data2")}>Data 2</li>
            </ul>
        </div>
    );
};

export default Header;