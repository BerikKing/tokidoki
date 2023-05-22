import Link from "next/link";
import HeaderLinkModal from "./HeaderLinkModal";
import React, { PropsWithChildren, useRef } from "react";

const HeaderLink = () => {
    const [modalIsOpen, setModalIsOpen] = React.useState<boolean>(false);
    const onCloseModal = () => setModalIsOpen(false);

    return (
        <>
            <div className="header-link">
                <HeaderLinkModal
                    active={modalIsOpen}
                    onClose={onCloseModal}
                ></HeaderLinkModal>
                <div className="container">
                    <div className="header-link_inner">
                        <div
                            className="header-link_inner-link"
                            onClick={() => setModalIsOpen(!modalIsOpen)}
                        >
                            О наc
                        </div>
                        <div className="header-link_inner-link"
                        onClick={() => setModalIsOpen(!modalIsOpen)}>
                            Новости
                        </div>
                        <div className="header-link_inner-link"
                        onClick={() => setModalIsOpen(!modalIsOpen)}>
                            Аукционы
                        </div>
                        <div className="header-link_inner-link"
                        onClick={() => setModalIsOpen(!modalIsOpen)}>
                            Конструктор
                        </div>
                        <div className="header-link_inner-link"
                        onClick={() => setModalIsOpen(!modalIsOpen)}>
                            В пути
                        </div>
                        <div className="header-link_inner-link"
                        onClick={() => setModalIsOpen(!modalIsOpen)}>
                            Как купить
                        </div>
                        <div className="header-link_inner-link"
                        onClick={() => setModalIsOpen(!modalIsOpen)}>
                            Важная информация
                        </div>
                        <div className="header-link_inner-link"
                        onClick={() => setModalIsOpen(!modalIsOpen)}>
                            Вопросы
                        </div>
                        <div className="header-link_inner-link"
                        onClick={() => setModalIsOpen(!modalIsOpen)}>
                            Отзывы
                        </div>
                        <div className="header-link_inner-link"
                        onClick={() => setModalIsOpen(!modalIsOpen)}>
                            Доставка
                        </div>
                        <Link href="#" className="header-link_inner-link"
                        onClick={() => setModalIsOpen(!modalIsOpen)}>
                            Контакты
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};
export default HeaderLink;
