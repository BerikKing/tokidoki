import React, { PropsWithChildren, useRef } from "react"
import Link from "next/link";
// import { ReactComponent as Arrow } from "../public/icons/right-arrow.svg";

interface IModalProps {
    active: boolean;
    onClose: () => void;
}
const HeaderLinkModal = ({ active, onClose }: PropsWithChildren<IModalProps>) => {

return (
    <>
    
    <div className= {active ? "header_link_modal active" : "header_link_modal"}
      onClick={onClose}>
        <Link href="#" className="modal">
            <Link href="#" className="modal-link" onClick={(Event) => Event.stopPropagation()}>О компании</Link>
            {/* <img src="/icons/right-arrow.svg"/> */}
            {/* <Arrow class="" /> */}
            <div className="svg">
                <svg width="10"  viewBox="0 0 7 10" fill="#D2D3D8" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 9L5 5L1 1" stroke="none" stroke-width="1.5"/>
                </svg>
            </div>
        </Link>
        <Link href="#" className="modal">
            <Link href="#" className="modal-link">Наши сотрудники</Link>
            {/* <img src="/icons/right-arrow.svg"/> */}
            {/* <Arrow class="" /> */}
            <div className="svg">
                <svg width="10"  viewBox="0 0 7 10" fill="#D2D3D8" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 9L5 5L1 1" stroke="none" stroke-width="1.5"/>
                </svg>
            </div>
        </Link>
        <Link href="#" className="modal">
            <Link href="#" className="modal-link">Автопарк Токидоки</Link>
            {/* <img src="/icons/right-arrow.svg"/> */}
            {/* <Arrow class="" /> */}
            <div className="svg">
                <svg width="10"  viewBox="0 0 7 10" fill="#D2D3D8" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 9L5 5L1 1" stroke="none" stroke-width="1.5"/>
                </svg>
            </div>
        </Link>
        <Link href="#" className="modal">
            <Link href="#" className="modal-link">Офис Токидоки</Link>
            {/* <img src="/icons/right-arrow.svg"/> */}
            {/* <Arrow class="" /> */}
            <div className="svg">
                <svg width="10"  viewBox="0 0 7 10" fill="#D2D3D8" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 9L5 5L1 1" stroke="none" stroke-width="1.5"/>
                </svg>
            </div>
        </Link>
        <Link href="#" className="modal">
            <Link href="#" className="modal-link"></Link>
            {/* <img src="/icons/right-arrow.svg"/> */}
            {/* <Arrow class="" /> */}
            <div className="svg">
                <svg width="10"  viewBox="0 0 7 10" fill="#D2D3D8" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 9L5 5L1 1" stroke="none" stroke-width="1.5"/>
                </svg>
            </div>
        </Link>
        <Link href="#" className="modal">
            <Link href="#" className="modal-link">Агентский договор</Link>
            {/* <img src="/icons/right-arrow.svg"/> */}
            {/* <Arrow class="" /> */}
            <div className="svg">
                <svg width="10"  viewBox="0 0 7 10" fill="#D2D3D8" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 9L5 5L1 1" stroke="none" stroke-width="1.5"/>
                </svg>
            </div>
        </Link>
        <Link href="#" className="modal">
            <Link href="#" className="modal-link">Учредительные документы</Link>
            {/* <img src="/icons/right-arrow.svg"/> */}
            {/* <Arrow class="" /> */}
            <div className="svg">
                <svg width="10"  viewBox="0 0 7 10" fill="#D2D3D8" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 9L5 5L1 1" stroke="none" stroke-width="1.5"/>
                </svg>
            </div>
        </Link>
        <Link href="#" className="modal">
            <Link href="#" className="modal-link">Видео</Link>
            {/* <img src="/icons/right-arrow.svg"/> */}
            {/* <Arrow class="" /> */}
            <div className="svg">
                <svg width="10"  viewBox="0 0 7 10" fill="#D2D3D8" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 9L5 5L1 1" stroke="none" stroke-width="1.5"/>
                </svg>
            </div>
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
    </>
)
}
export default HeaderLinkModal