import React from 'react';
import ThemeSelector from './ThemeSelector';

const Footer = () => {
    return (
        <div className="max-w-full">
            {/* Divider line */}
            <div className="max-w-full border-t border-gray-200" />

            {/* Footer Container */}
            <footer className="max-w-full bg-white">
                <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full">

                        {/* Logo and Address Section */}
                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold">Funiro.</h2>
                            <p className="text-gray-400 text-m">
                                400 University Drive Suite 200 Coral Gables,<br />
                                FL 33134 USA
                            </p>
                        </div>

                        {/* Links Section */}
                        <div className="space-y-4">
                            <h3 className="text-2xl text-gray-500">Links</h3>
                            <ul className="font-bold space-y-2">
                                <li><a href="/home" className="hover:text-gray-600">Home</a></li>
                                <li><a href="/shop" className="hover:text-gray-600">Shop</a></li>
                                <li><a href="/about" className="hover:text-gray-600">About</a></li>
                                <li><a href="/contact" className="hover:text-gray-600">Contact</a></li>
                            </ul>
                        </div>

                        {/* Help Section */}
                        <div className="space-y-4">
                            <h3 className="text-gray-500">Help</h3>
                            <ul className="font-bold space-y-2">
                                <li><a href="/payment" className="hover:text-gray-600">Payment Options</a></li>
                                <li><a href="/returns" className="hover:text-gray-600">Returns</a></li>
                                <li><a href="/privacy" className="hover:text-gray-600">Privacy Policies</a></li>
                            </ul>
                        </div>

                        {/* Newsletter Section */}
                        <div className="space-y-4">
                            <h3 className="font-bold text-gray-400">Newsletter</h3>
                            <div className="join w-full">
                                <input
                                    type="text"
                                    placeholder="Enter Your Email Address"
                                    className="input input-bordered join-item flex-1 border-none active:border-none focus:border-none outline-none"
                                />
                                <button className="btn btn-neutral join-item normal-case">SUBSCRIBE</button>
                            </div>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="mt-12">
                        <p className="text-sm text-gray-600">2023 furino. All rights reserved</p>
                    </div>
                </div>
                <ThemeSelector />
            </footer>
        </div>
    );
};

export default Footer;