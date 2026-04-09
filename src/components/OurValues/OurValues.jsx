import './OurValues.css'
// import {
//     Accordion,
//     AccordionItem,
//     AccordionItemHeading,
//     AccordionItemButton,
//     AccordionItemPanel,
//     AccordionItemState,
// } from 'react-accessible-accordion';
// import 'react-accessible-accordion/dist/fancy-example.css';
import AccordionRdx from '../../utils/AccordionRdx'

const OurValues = () => {
    return (
        <section className="v-wrapper">
            <div className="v-container innerWidth paddings flexCenter">
                {/* left content */}
                <div className="v-image">
                    <figure className="domImg-container">
                        <img src="/assets/value.png" alt="val" />
                    </figure>
                </div>

                {/* right content */}
                {/* <div className="v-content flexColStart"> */}
                <div className="v-content">
                    <div className="flexColStart">
                        <h4 className='orangeText'>Our Value</h4>
                        <h3 className='primaryText'>Value We Give to You</h3>
                        <p className='secondaryText'>We always ready to help by providijng the best services for you. <br />
                            We beleive a good blace to live can make your life better
                        </p>
                    </div>

                    {/* Accordion Rdx */}
                    <div className="accordionRdx-wrap">
                        <AccordionRdx />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurValues
