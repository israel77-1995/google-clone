import React from "react";
import { ActionArea } from "./ActionArea";
import SearchBar from "./SearchBar"; 

import Lightbulb from "../assets/light-logo.svg";

const Header = () => {
    return(
        <header>


            <span className="material-symbols-outlined">menu</span>
            <section>
                <img src={Lightbulb} alt="" />
                <a>
                    
                    <img src ="https://www.gstatic.com/images/branding/product/2x/keep_2020q4_48dp.png" />
                    <span>Keep</span>
                </a>

               
            </section>
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