"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from 'next/image';
import Link from "next/link";
import { useEffect, useState, useRef } from 'react';
import AA from '../public/images/AA.jpg'
import A from '../public/images/A.jpg'
import S from '../public/images/S.jpg'
import W from '../public/images/W.jpg'
import T from '../public/images/T.jpg'
import Qa from '../public/images/Qa.jpg'
import { Product } from '../types'
import NewA from "./New";


const products: Product[] = [
    {
        id: 1,
        image: T,
        title: 'Spring Fashion Sale',
        price: 2400,
    },
    {
        id: 2,
        image: Qa,
        title: 'Trendy Styles',
        price: 2000,
    },
    {
        id: 3,
        image: A,
        title: 'Casual Wear',
        price: 1000,
    },
    {
        id: 4,
        image: AA,
        title: 'Extra Savings',
        price: 2500,
    },
];
const slides = [
    {
        image: T,
        title: 'Spring Fashion Sale',
        description: 'Get 40% to 70% off on all clothing collections. Limited time only!',
        link: '/shop',
        price: '2400'
    },
    {
        image: Qa,
        title: 'Trendy Styles',
        description: 'Refresh your wardrobe with this season’s must-haves.',
        link: '/shop/trending',
        price: '2000'
    },

    {
        image: A,
        title: 'Casual’ Wear',
        description: 'Cute, comfy, and made to move — perfect for little ones.',
        link: '/shop/kids',
        price: '1000'
    },
    {
        image: AA,
        title: 'Extra Savings',
        description: 'Use code **SAVE20** at checkout for an extra 20% off!',
        link: '/shop/all',
        price: '2500'
    },
];



export default function EXPage() {
    const handleAddToCart = (item: Product) => {
        const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');

        const existingItem = existingCart.find((x: any) => x.id === item.id);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            existingCart.push({
                id: item.id,
                name: item.title,
                image: item.image.src, // convert StaticImageData to string
                price: item.price,
                quantity: 1,
            });
        }

        localStorage.setItem('cart', JSON.stringify(existingCart));
        alert(`${item.title} added to cart!`);
    };


    return (<>

        <div className="grid grid-cols-1 text-center sm:grid-cols-2 md:grid-cols-4 gap-0">

            {products.map((product) => (
                <div key={product.id} className="flex flex-col items-center p-2">
                    <Image
                        src={product.image}
                        alt={product.title}
                        width={144}
                        height={144}
                        className="w-36 h-36 rounded-full object-cover shadow-xl"
                    />
                    <h3 className="mt-2 text-lg">{product.title}</h3>
                    <p className="text-sm text-gray-700">From Rs. {product.price}</p>
                    <button
                        onClick={() => handleAddToCart(product)}
                        className="mt-2 px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                        Add to Cart
                    </button>
                </div>
            ))}


        </div>


         

        <div className="grid grid-cols-1 text-center sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10 p-4">

            {products.map((product) => (
                <div key={product.id} className="flex flex-col items-center  mt-20">
                    <Image
                        src={product.image}
                        alt={product.title}
                        
                        className="w-full h-[350px]   object-cover shadow-xl"
                    />
                    <h3 className="mt-2 text-lg">{product.title}</h3>
                    <p className="text-sm text-gray-700">From Rs. {product.price}</p>
                    <button
                        onClick={() => handleAddToCart(product)}
                        className="mt-2 px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                        Add to Cart
                    </button>
                </div>
            ))}

        </div>
        <br/>
 
    </>
    );
}














