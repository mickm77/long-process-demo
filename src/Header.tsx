import React from "react";

import css from "./Header.module.scss";

const Header = () => {
    return (
        <div className={css.container}>
            <h1>Header</h1>
            <ul>
                <li>Spinner</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
            </ul>
        </div>
    );
};

export default Header;