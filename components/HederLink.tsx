import Link from "next/link"
import HeaderLinkModal from "./HeaderLinkModal";
import React, { PropsWithChildren, useRef } from "react";

const HeaderLink = () => {
    const [modalIsOpen, setModalIsOpen] = React.useState<boolean>(false);
    const onCloseModal = () => setModalIsOpen(false);
    
    return (
        <>
            <div className="header-link">
                <HeaderLinkModal active={modalIsOpen} onClose={onCloseModal}></HeaderLinkModal>
                <div className="container">
                    <div className="header-link_inner">
                        <Link href="#" className="header-link_inner-link" onClick={() => setModalIsOpen(true)}>О наc</Link>
                        <Link href="#" className="header-link_inner-link">Новости</Link>
                        <Link href="#" className="header-link_inner-link">Аукционы</Link>
                        <Link href="#" className="header-link_inner-link">Конструктор</Link>
                        <Link href="#" className="header-link_inner-link">В пути</Link>
                        <Link href="#" className="header-link_inner-link">Как купить</Link>
                        <Link href="#" className="header-link_inner-link">Важная информация</Link>
                        <Link href="#" className="header-link_inner-link">Вопросы</Link>
                        <Link href="#" className="header-link_inner-link">Отзывы</Link>
                        <Link href="#" className="header-link_inner-link">Доставка</Link>
                        <Link href="#" className="header-link_inner-link">Контакты</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default HeaderLink