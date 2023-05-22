import Link from "next/link";
import React from "react";
import { Head } from "next/document";
// import Image from "next/image";
const Header = () => {


    return (
        <>
        <section className="header">
            <div className="container">
                <div className="header_inner">
                    <div className="header_inner_left">
                        <div className="header_inner_logo">
                            <Link href="#"><img src="/icons/logo.svg" alt="" /></Link>
                            
                        </div>
                        <div className="header_inner_offer">
                            <div className="header_inner_offer_text">
                            От Японии до Владивостока <br />
                                            один шаг с Токидоки 
                            </div>
                            <Link href="#" className="header_inner_offer_link">Агентский договор</Link>
                        </div>
                    </div>
                    <div className="header_inner_social">
                        <Link href="#" className="header_inner_social_img"><img src="/icons/vk-logo.svg" /></Link>
                        <Link href="#" className="header_inner_social_img"><img src="/icons/telegram-logo.svg" /></Link>
                        <Link href="#" className="header_inner_social_img"><img src="/icons/youtube-logo.svg" /></Link>
                    </div>
                    <div className="header_inner_contact">
                        <div className="header_inner_number">
                            <Link href="tel:83832555007">8 (383) 2-555-007</Link>
                        </div>
                        <div className="header_inner_call">
                            <Link href="#">Заказать звонок</Link>
                        </div>
                    </div>
                    <button className="button_header">
                            <img src="/icons/copy.svg"/>
                            <div className="header_inner_btnText">Заключить договор</div>
                        </button>
                </div>
            </div>
        </section>
        </>
    )
}
export default Header