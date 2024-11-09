import React from 'react'

// import '../index.css';

export default function Header() {
    return (
        <>
            <header className="navbar bg-base-100 shadow-md">
                {/* Logo Section */}
                <div className="navbar-start flex items-center">
                    <a className="btn btn-ghost normal-case text-xl" href="#" >
                        <img src="/Meubel House_Logos-05.png" alt='logo' width="28" />
                        Furniro
                    </a>
                </div>

                {/* Navigation Links Desktop*/}
                <div className="navbar-center">
                    <ul className="menu menu-horizontal text-xl px-1 hidden lg:flex">
                        <li ><a href="#home">Home</a></li>
                        <li ><a href="#shop">Shop</a></li>
                        <li ><a href="#about">About</a></li>
                        <li ><a href="#contact">Contact</a></li>
                    </ul>
                </div>




                {/* Icons Section Desktop */}
                <div className="navbar-end hidden lg:flex">
                    <button className="btn btn-ghost btn-circle">
                        <img src="/profile.png" alt="" />
                    </button>
                    <button className="btn btn-ghost btn-circle">
                        <img src="/search.png" alt="" />
                    </button>
                    <button className="btn btn-ghost btn-circle">
                        <img src="/favorite.png" alt="" />
                    </button>
                    <button className="btn btn-ghost btn-circle">
                        <img src="/basket.png" alt="" />
                    </button>
                </div>

                {/* Navigation Links Mobile */}
                <div className='navbar-end lg:hidden'>
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a href="#home">Home</a></li>
                            <li>
                                <a>Shop</a>
                                <ul className="p-2">
                                    <li><a href="#shop">Shop 1</a></li>
                                    <li><a href="#shop">Shop 2</a></li>
                                </ul>
                            </li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>


                    {/* Icons Section Mobile */}
                    <div className=" lg:hidden ">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <img src='/apps.svg' width="15" />
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 shadow">
                                <button className="btn btn-ghost btn-circle">
                                    <img src="/profile.png" alt="" />
                                </button>
                                <button className="btn btn-ghost btn-circle">
                                    <img src="/search.png" alt="" />
                                </button>
                                <button className="btn btn-ghost btn-circle">
                                    <img src="/favorite.png" alt="" />
                                </button>
                                <button className="btn btn-ghost btn-circle">
                                    <img src="/basket.png" alt="" />
                                </button>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>


        </>
    )
}
