import './Footer.css';

const Footer = () => {
    return (
        <section className="f-wrapper">
            <div className="f-container innerWidth paddings flexCenter">
                {/* footer logo */}
                <div className="f-logo flexColStart">
                    <img className='f-logo' src="/assets/homyz2.png" alt="" width={120} />

                    <p className="secondaryText">
                        Our vision is to make all people <br />
                        the best place to live for them.
                    </p>
                </div>

                <ul className='f-menu f-menuCenter flexCenter'>
                    <li><a href="">Property</a></li>
                    <li><a href="">Services</a></li>
                    <li><a href="">Product</a></li>
                    <li><a href="">About Us</a></li>
                </ul>

                {/* footer links */}
                <div className="f-links flexColStart">
                    <h2 className="primaryText">
                        Information
                    </h2>
                    <p className="secondaryText">145 New York, FL 5467, USA
                    </p>

                    <ul className='f-menu f-menuEnd flexCenter'>
                        <li><a href="">Property</a></li>
                        <li><a href="">Services</a></li>
                        <li><a href="">Product</a></li>
                        <li><a href="">About Us</a></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Footer
