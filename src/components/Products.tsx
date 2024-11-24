import React from 'react'
import { products as products } from '../products'; // فایل products.ts در ریشه پروژه است


export default function Products() {
    const calculateDiscount = (mainPrice: string, salePrice?: string) => {
        if (!salePrice) return null;
        const discount =
            ((parseFloat(mainPrice.replace(/\./g, '')) - parseFloat(salePrice.replace(/\./g, ''))) /
                parseFloat(mainPrice.replace(/\./g, ''))) *
            100;
        return `${Math.abs(Math.round(discount))}% OFF`;
    };
    return (
        <>
            <div >
                <h2 className='text-3xl text-center font-bold mb-6'>Our Products</h2>
                <div className="grid sm:gird-cols-2 md:grid-cols-2 lg:grid-cols-4  gap-6 mx-24">
                    {products.slice(0, 8).map((product) => (
                        <div
                            key={product.id}
                            className="relative group bg-gray-300 shadow-md overflow-hidden transition-all duration-300"
                        >
                            {/* تخفیف برای محصولات حراجی */}
                            {product.saleprice && (
                                <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-1">
                                    {calculateDiscount(product.mainprice, product.saleprice)}
                                </span>
                            )}

                            {/* تصویر و محتوا */}
                            <div className="h-40 bg-gray-200 flex items-center justify-center">
                                <span className="text-gray-500">Product Image</span>
                            </div>

                            {/* توضیحات محصول */}
                            <div className="p-4">
                                <h3 className="text-lg font-semibold">{product.name}</h3>
                                <p className="text-gray-500 text-sm">{product.category}</p>
                                <div className="flex items-center mt-2">
                                    <span className={`text-lg font-bold ${product.saleprice ? 'text-black-700' : 'text-black'}`}>
                                        {product.mainprice} $
                                    </span>
                                    {product.saleprice && (
                                        <span className="text-sm text-gray-400 line-through ml-2">{product.saleprice} $</span>
                                    )}
                                </div>
                            </div>

                            {/* افکت‌ها هنگام هاور */}
                            <div className="absolute inset-0 bg-gray-900 bg-opacity-0 group-hover:bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <button className="btn btn-primary mb-4">Add to Cart</button>
                                <div className="flex space-x-4 text-white">
                                    <span className="flex items-center">
                                        <i className="icon-share mr-1" /> Share
                                    </span>
                                    <span className="flex items-center">
                                        <i className="icon-compare mr-1" /> Compare
                                    </span>
                                    <span className="flex items-center">
                                        <i className="icon-like mr-1" /> Like
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='flex justify-center mt-4 md-5'>
                    <button type="button" className='btn btn-outline btn-accent rounded-0 text-orange-500  hover:text-white hover:bg-orange-500 hover:border-none  items-center  px-12 my-6'>Show More</button>


                </div>
            </div>
        </>
    )
}
