import Link from "next/link"

const HeaderLink = () => {
    
    return (
        <>
            <div className="header-link">
                <div className="container">
                    <div className="header-link_inner">
                        <Link href="#" className="header-link_inner-link">О наc</Link>
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