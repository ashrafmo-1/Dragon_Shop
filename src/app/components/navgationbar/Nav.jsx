"use client"
import "./globals.scss"
import React, {useState} from 'react';
import Link from 'next/link';
import dynamic from "next/dynamic";
import Image from 'next/image';
import toggle from "./assets/list.png";
import cart from "./assets/cart.png";
import wishlist from "./assets/heart.png"
import {Fascinate, Love_Light, Roboto} from '@next/font/google';
import { useSelector } from "react-redux";

const roboto = Roboto({
    subsets: ["latin"],
    weight: ['300', '400', '500', '700', '900']
});

// navgation bar dinamic call by cleint side
const DinamicBtn = dynamic(() => import("../loignBtn/loginbtn"), {
    ssr: false,
});

const Nav = () => {
    const [active, setactive] = useState(false);
    const handelClick = () => {
        setactive(!active);
        console.log(active);
    };

  const products = useSelector((state) => state.cart); // Fixed error reading 'map' by correctly returning state.cart;

    return (
        <section className="navgation_bar py-3">
            <div id="container">
            <div className="nav_header d-flex justify-content-between align-items-center">
                <Link href={"/"} className="brand_title text-decoration-none"><h1>dragon store</h1></Link>
                <button className="btn"><DinamicBtn /></button>
                <div className="toggleBtn" onClick={handelClick}><Image src={toggle} width={30} height={20} alt="toggle" /></div>
            </div>
                <div className="links_and_controls my-2 d-flex justify-content-between align-items-center" id={active ? 'active' : ''} >
                    <div className="links d-flex gap-4">
                        <li> <Link href="/" className='nav-link text-white fs-5 fw-medium'>home</Link> </li>
                        <li> <Link href="/aboutus" className='nav-link text-white fs-5 fw-medium'>about us</Link> </li>
                        <li> <Link href="/features" className='nav-link text-white fs-5 fw-medium'>features</Link> </li>
                        <li> <Link href="/products" className='nav-link text-white fs-5 fw-medium'>products</Link> </li>
                        <li> <Link href="/contact" className='nav-link text-white fs-5 fw-medium'>contact me</Link> </li>
                    </div>
                    <div className="controls d-flex align-items-center gap-5">
                        <Link href={"cart"} className="add_to_cart d-flex justify-content-center align-items-center text-decoration-none">
                            <Image src={cart} width={36} height={36} alt='add to cart' />
                            <span className="cart_icon_title">cart</span>
                            <p className="cart_length"> {products.length} </p>
                        </Link>
                        <Link href={'wishlist'} className="wishlist d-flex justify-content-center align-items-center gap-1 text-decoration-none">
                            <Image src={wishlist} width={32} height={32} alt='add to cart' /> <span className="cart_icon_title"> wishlist</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Nav