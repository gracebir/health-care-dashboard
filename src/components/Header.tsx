/** @format */
import { useState } from "react";
import logo from "../assets/logo.svg";
import doctor from "../assets/senior.png";
import { navbar_data } from "../assets/navbar-data";
import setting from "../assets/icons/settings.svg";
import vertical from "../assets/icons/vert_tree_dots.svg";

const Header = () => {
    const [active] = useState("Patients");
    return (
        <header className='bg-white lg:max-w-[1564px] w-full h-[72px] flex justify-between items-center mx-auto shadow-md rounded-[70px] px-8'>
            <a href='#'>
                <img src={logo} alt='logo' />
            </a>
            <nav className='lg:flex hidden items-center space-x-4 font-bold text-sm'>
                {navbar_data.map((navtitem) => (
                    <a key={navtitem.id} href={navtitem.href}>
                        <div
                            className={`flex gap-[9px] items-center px-4 py-3 hover:bg-active-blue ${
                                active === navtitem.title && `bg-active-blue`
                            } rounded-[41px]`}
                        >
                            <img src={navtitem.logo} alt={navtitem.title} />
                            <span>{navtitem.title}</span>
                        </div>
                    </a>
                ))}
            </nav>
            <div className='lg:flex hidden items-center gap-4'>
                <div className='flex gap-2 items-center'>
                    <img src={doctor} alt='doctor' />
                    <div className='flex flex-col'>
                        <span className='font-bold font-sm leading-4'>
                            Dr. Jose Simmons
                        </span>
                        <span className='text-sm text-cl-gray'>
                            General Practitioner
                        </span>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <a href='#'>
                        <img src={setting} alt='setting' />
                    </a>
                    <a href='#'>
                        <img src={vertical} alt='vert' />
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
