import React from 'react';
import "./globals.scss";
import Image from 'next/image';
import lap from './assets/categories/laptop.jpg';
import camira from './assets/categories/camira.jpg';
import iphone from './assets/categories/ipone 12.jpg';
import sama3a from './assets/categories/sma3a.jpg';
import smarwatch from './assets/categories/xiaomi_redmi_watch.png';
import MainTitle from '../components/mainTitle/MainTitle';
import Feed_back from '../feedback/page';
import Footer from '../components/footer/Footer';
import Boxes_products from "../fetchproduct/boxes_products";

const HomePage = () => {
    return (
    <div className='home'>
        <div className="nav-slide">
            <div className="nav-links d-flex align-items-center justify-content-center gap-5  text-black py-2 fs-5">
                <div className="link">Furniture</div>
                <div className="link">Outdoor</div>
                <div className="link">Tabletop & Bar</div>
                <div className="link">Kitchen</div>
                <div className="link">Bedding</div>
                <div className="link">Bath</div>
                <div className="link">Tocnology</div>
                <div className="link">Decor & Pillows</div>
                <div className="link">Rugs</div>
                <div className="link">Window</div>
                <div className="link">Laptop</div>
                <div className="link">Mobile</div>
                <div className="link">Cars</div>
                <div className="link">Tools</div>
                <div className="link text-danger">Sale</div>
                <div className="link text-success">Gifts</div>
            </div>
        </div>

        <div className="lading-home d-flex justify-content-center align-items-center flex-column py-3">
                <div className="text-title text-center">
                    <h1 className='title text-white'>dragon store' full ecommerce</h1>
                    <p className='description fs-1 mb-5'>“really beautiful & worth the price”</p>
                    <p className='sale d-flex flex-column fs-1 text-white'><span>up to 44% sale: </span>4th of july event</p>
                </div>
                <div className='btns d-flex gap-4 align-items-center justify-content-center mt-3'>
                    <button className='links-btns btn fw-bold fs-3 py-2 px-4'>fashon woman</button>
                    <button className='links-btns btn fw-bold fs-3 py-2 px-4'>fashon man</button>
                </div>
        </div>

        <section className='categories'>
            <MainTitle title='categories' />
        <div className="categories-boxes mb-5 mt-5 d-flex justify-content-center align-items-center flex-wrap gap-5 ">
            <div className="category-box text-center">
                <Image className='img mt-3' src={lap} alt='' width={150} height={110} />
                <p className='description mt-4'>laptops</p>
                <p className="offer btn btn-outline-success mt-3 py-1 px-3">offer 44%</p>
            </div>
            <div className="category-box text-center">
                <Image className='img mt-3'src={camira} alt='' width={150} height={110} />
                <p className='description mt-4'>camira</p>
                <p className="offer btn btn-outline-success mt-3  py-1 px-3">offer 44%</p>
            </div>
            <div className="category-box text-center">
                <Image className='img mt-3'src={iphone} alt='' width={150} height={110} />
                <p className='description mt-4'>iphone</p>
                <p className="offer btn btn-outline-success mt-3 py-1 px-3">offer 44%</p>
            </div>
            <div className="category-box text-center">
                <Image className='img mt-3'src={sama3a} alt='' width={150} height={110} />
                <p className='description mt-4'>oula</p>
                <p className="offer btn btn-outline-success mt-3 py-1 px-3">offer 44%</p>
            </div>
            <div className="category-box text-center">
                <Image className='img mt-3'src={smarwatch} alt='' width={150} height={110} />
                <p className='description mt-4'>smarwatch</p>
                <p className="offer btn btn-outline-success mt-3 py-1 px-3">offer 44%</p>
            </div>
        </div>
        </section>

        <section>
            <Boxes_products />
        </section>

        <section className='Feed_back'>
            <Feed_back />
        </section>

        <section className='Footer'>
            <Footer />
        </section>
    </div>
    )
}

export default HomePage;