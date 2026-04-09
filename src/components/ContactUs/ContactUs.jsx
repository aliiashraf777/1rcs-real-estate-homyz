import './ContactUs.css';
import { MdCall } from 'react-icons/md';
import { BsFillChatDotsFill } from 'react-icons/bs';
import { HiChatBubbleBottomCenter } from 'react-icons/hi2';

const ContactUs = () => {
    return (
        <section className="c-wrapper">
            <div className="c-container innerWidth paddings flexCenter">
                {/* left content */}
                <div className="c-content flexColStart">
                    <h4 className='orangeText'>Contact Us</h4>
                    <h3 className='primaryText'>Easy to contact us</h3>
                    <p className='secondaryText'>We always ready to help by providijng the best services for you. We beleive a good blace to live can make your life better
                    </p>

                    {/* contacts */}
                    <div className="contactModes flexColStart">
                        {/* 1st row */}
                        <div className="c-row flexStart">
                            {/* mode 1 */}
                            <div className="mode flexColCenter">
                                <div className="detail-wrap flexStart">
                                    <div className="icon flexCenter">
                                        <MdCall size={25} />
                                    </div>
                                    <div className="detail flexColStart">
                                        <h3 className='primaryText'>Call</h3>
                                        <p className='secondaryText'>021 1223 14514</p>
                                    </div>
                                </div>
                                <button className="btn ">
                                    Call Now
                                </button>
                            </div>
                            {/* mode 2 */}
                            <div className="mode flexColCenter">
                                <div className="flexStart detail-wrap">
                                    <div className="icon flexCenter">
                                        <BsFillChatDotsFill size={25} />
                                    </div>
                                    <div className="detail flexColStart">
                                        <h3 className='primaryText'>Chat</h3>
                                        <p className='secondaryText'>021 1223 14514</p>
                                    </div>
                                </div>
                                <button className="btn flexCenter">
                                    Chat Now
                                </button>
                            </div>
                        </div>

                        {/* 2nd row */}
                        <div className="c-row flexStart">
                            {/* mode 1 */}
                            <div className="mode flexColCenter">
                                <div className="flexStart detail-wrap">
                                    <div className="icon flexCenter">
                                        <BsFillChatDotsFill size={25} />
                                    </div>
                                    <div className="detail flexColStart">
                                        <h3 className='primaryText'>Video Call</h3>
                                        <p className='secondaryText'>021 1223 14514</p>
                                    </div>
                                </div>
                                <button className="btn flexCenter">
                                    Video Call Now
                                </button>
                            </div>
                            {/* mode 2 */}
                            <div className="mode flexColCenter">
                                <div className="flexStart detail-wrap">
                                    <div className="icon flexCenter">
                                        <HiChatBubbleBottomCenter size={25} />
                                    </div>
                                    <div className="detail flexColStart">
                                        <h3 className='primaryText'>Message</h3>
                                        <p className='secondaryText'>021 1223 14514</p>
                                    </div>
                                </div>
                                <button className="btn flexCenter">
                                    Message Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* right img */}
                <div className="c-image">
                    <figure className="domImg-container">
                        <img src="/assets/contact.jpg" alt="cotnact" />
                    </figure>
                </div>

            </div>
        </section>
    )
}

export default ContactUs
