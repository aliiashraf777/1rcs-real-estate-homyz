import { useState } from 'react';
import './header.css'
import { BiMenuAltRight } from 'react-icons/bi';
import OutsideClickHandler from 'react-outside-click-handler';


const header = () => {

    const [menuOpened, setMenuOpened] = useState(false);

    const getMenuStyle = (menuOpened) => {
        if (document.documentElement.clientWidth <= 800) {
            return { right: !menuOpened && '-100%' }
        }
    }

    return (
        <section className="h-wrapper">
            <div className="h-container flexCenter paddings innerWidth">

                <div className="logo">
                    <img className='logo-img' src="/assets/homyz1.png" alt="homyzLogo" width={100} />
                </div>

                <OutsideClickHandler
                    onOutsideClick={() => { setMenuOpened(false) }}>
                    <div className="h-menu flexCenter"
                        style={getMenuStyle(menuOpened)}
                    >
                        <a href="">Residencies</a>
                        <a href="">Our Values</a>
                        <a href="">Contact Us</a>
                        <a href="">Get Started</a>

                        <button className='btn'>
                            <a href="">Contact</a>
                        </button>
                    </div>
                </OutsideClickHandler>

                {/* mobile menu */}
                <div className="menu-icon" onClick={() => setMenuOpened((prev) => !prev)}>
                    <BiMenuAltRight />
                </div>
            </div>

        </section>
    )
}

export default header
