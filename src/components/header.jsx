import React from "react";
import { ActionArea } from "./ActionArea";
import SearchBar from "./SearchBar";

const Header = ({ onMenuClick, menuActive }) => {
    return(
        <header>

            <div className="header-brand-container">
                <span
                    className={`material-symbols-outlined menu-icon ${menuActive ? 'menu-active' : ''}`}
                    onClick={onMenuClick}
                >
                    menu
                </span>

                <a>
                    <img src="https://www.gstatic.com/images/branding/product/2x/keep_2020q4_48dp.png" alt="google-keep-logo"/>
                    <span>Keep</span>
                </a>
            </div>
            <section>
                <SearchBar />
            </section>
            <section>
                <ActionArea />
            </section>

        </header>
    );
};



export default Header;