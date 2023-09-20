import React from 'react'
import logo from '../assets/imgs/logo.svg'
import { RiLinkedinFill } from "react-icons/ri"
import { AiFillGithub } from "react-icons/ai"
import { Link } from 'react-router-dom'

export function AppFooter() {

    const year = new Date().getFullYear()
    const socialLinks = [
        {
            icon: <AiFillGithub />,
            path: 'https://github.com/etailevi/happy-tails'
        },
        {
            icon: <RiLinkedinFill />,
            name: 'Etai',
            path: 'https://www.linkedin.com/in/etai-levi/'
        },
        {
            icon: <RiLinkedinFill />,
            name: 'Tamar',
            path: 'https://www.linkedin.com/in/tamar-millgram/'
        },
    ]
    const quickLinks1 = [
        {
            path: '/',
            display: 'Home',
        },
        {
            path: '/about',
            display: 'About',
        },
        {
            path: '/contact',
            display: 'Contact Us',
        },
    ]
    const quickLinks2 = [
        {
            path: '/vet',
            display: 'Find a Vet',
        },
        {
            path: '/',
            display: 'Request an Appointment',
        },
        {
            path: '/',
            display: 'Find a Location',
        },
    ]
    return (
        <footer className='app-footer'>
            <main className='footer-content flex between wrap'>
                <section className='footer-details flex between column'>
                    <div className='copyrights flex between column '>
                        <img src={logo} alt="Happy Tails logo" />
                        <p>Copyright © {year} developed by Tamar millgram and Etai Levi.</p>
                    </div>
                    <div className="social-links flex align-center wrap">
                        {socialLinks.map((link, idx) => (
                            <Link
                                to={link.path}
                                key={idx}
                                target='_blank'
                                className='flex center'>
                                <i className='flex center'>{link.icon}</i>
                                {link.name && <span>{link.name}</span>}
                            </Link>
                        ))}
                    </div>
                </section>
                <section className='quick-links flex between wrap'>
                    <div>
                        <h3>Quick Links</h3>
                        <ul className='flex column'>
                            {quickLinks1.map((link, idx) => (
                                <Link to={link.path} key={idx}>
                                    {link.display}
                                </Link>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3>I'd like to</h3>
                        <ul className='flex column'>
                            {quickLinks2.map((link, idx) => (
                                <Link to={link.path} key={idx}>
                                    {link.display}
                                </Link>
                            ))}
                        </ul>
                    </div>
                </section>
            </main>
        </footer>
    )
}
