import React, { PropsWithChildren, useRef } from "react";
import Link from "next/link";
import { RightArrow } from "./icons";
// import { ReactComponent as Arrow } from "../public/icons/right-arrow.svg";

interface IModalProps {
    active: boolean;
    onClose: () => void;
}
const HeaderLinkModal: React.FC<IModalProps> = ({ active, onClose }) => {
    return (
        <>
            {active ? (
                <div className={"header_link_modal"} onClick={onClose}>
                    <div className="modal">
                        <div className="modal-link">О компании</div>
                        <RightArrow/>
                    </div>
                    <Link href="#" className="modal">
                        <Link href="#" className="modal-link">
                            Наши сотрудники
                        </Link>
                        <RightArrow/>
                    </Link>
                    <Link href="#" className="modal">
                        <Link href="#" className="modal-link">
                            Автопарк Токидоки
                        </Link>
                        <RightArrow/>
                    </Link>
                    <Link href="#" className="modal">
                        <Link href="#" className="modal-link">
                            Офис Токидоки
                        </Link>
                        <RightArrow/>
                    </Link>
                    <Link href="#" className="modal">
                        <Link href="#" className="modal-link"></Link>
                        <RightArrow/>
                    </Link>
                    <Link href="#" className="modal">
                        <Link href="#" className="modal-link">
                            Агентский договор
                        </Link>
                        <RightArrow/>
                    </Link>
                    <Link href="#" className="modal">
                        <Link href="#" className="modal-link">
                            Учредительные документы
                        </Link>
                        <RightArrow/>
                    </Link>
                    <Link href="#" className="modal">
                        <Link href="#" className="modal-link">
                            Видео
                        </Link>
                        <RightArrow/>
                    </Link>
                    {/*<div className="modal">
            <Link href="#" className="modal-link">Видео</Link>
            {/* <img src="/icons/right-arrow.svg"/> 
        </div>
         <div className="modal">
            <Link href="#" className="modal-link">Автопарк Токидоки</Link>
            <img src="/icons/right-arrow.svg"/>
        </div>
        <div className="modal">
            <Link href="#" className="modal-link">Офис Токидоки</Link>
            <img src="/icons/right-arrow.svg"/>
        </div>
        <div className="modal">
            <Link href="#" className="modal-link">Агентский договор</Link>
            <img src="/icons/right-arrow.svg"/>
        </div>
        <div className="modal">
            <Link href="#" className="modal-link">Учредительные документы</Link>
            <img src="/icons/right-arrow.svg"/>
        </div>
        <div className="modal">
            <Link href="#" className="modal-link">Видео</Link>
            <img src="/icons/right-arrow.svg"/>
        </div> */}
                </div>
            ) : null}
        </>
    );
};
export default HeaderLinkModal;
