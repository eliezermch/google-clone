import React from 'react'
import '../css/footerimage.css'

const FooterImage = () => {
    return (
        <div>
            <footer className='footer'>
                <section className='footer-top-container_image'>
                    <ul className="footer-top-list_image">
                        <p>Argentina</p>
                    </ul>
                </section>
                <section className='footer-bottom-container_image'>
                    <ul className="footer-bottom-list-left_image">
                        <li>
                            <a href="/">About</a>
                        </li>
                        <li>
                            <a href="/">Advertising</a>
                        </li>
                        <li>
                            <a href="/">Business</a>
                        </li>
                        <li>
                            <a href="/">How search works</a>
                        </li>
                    </ul>
                    <ul className='footer-bottom-list-right_image'>
                        <li>
                            <a href="/">Privacy</a>
                        </li>
                        <li>
                            <a href="/">Terms</a>
                        </li>
                        <li>
                            <a href="/">Settings</a>
                        </li>    
                    </ul>
                </section>
            </footer>
        </div>
    )
}

export { FooterImage }