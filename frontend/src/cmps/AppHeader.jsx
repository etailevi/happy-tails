import React, { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../assets/imgs/logo.svg'
import { HiMenu, HiX } from "react-icons/hi"
export function AppHeader() {
    const navLinks = [
        {
            path: '/',
            label: 'Home'
        },
        {
            path: '/about',
            label: 'About'
        },
        {
            path: '/vet',
            label: 'Find a Vet'
        },
    ]
    const [stickyHeader, setStickyHeader] = useState(false)
    const stickyClass = stickyHeader ? 'sticky-header' : ''
    const [isSideMenu, setIsSideMenu] = useState(false)
    const sideMenu = isSideMenu ? 'side-menu' : ''
    const headerRef = useRef(null)
    const menuRef = useRef(null)

    useEffect(() => {
        handleStickyHeader()

        return () => window.removeEventListener('scroll', handleStickyHeader)
    }, [])

    function handleStickyHeader() {
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                setStickyHeader(true)
            } else {
                setStickyHeader(false)
            }
        })
    }

    function toggleMenu() {
        setIsSideMenu(prev => !prev)
    }

    if (window.innerWidth > 630 + 'px') setIsSideMenu(false)
    console.log('side-menu', sideMenu)
    return (
        <div className={`bg-header ${stickyClass}`} ref={headerRef}>
            <header className='app-header flex between align-center'>
                <div className='logo'>
                    <Link to={'/'} className=' flex align-center'>
                        <img src={Logo} alt='app logo' />
                    </Link>
                </div>
                <nav className={`main-nav flex ${sideMenu}`} ref={menuRef} onClick={toggleMenu}>
                    <ul className={`clean-list flex ${sideMenu}`}>
                        {
                            navLinks.map((link, idx) =>
                                <li key={idx}>
                                    <NavLink to={link.path}>
                                        {link.label}
                                    </NavLink>
                                </li>
                            )
                        }
                    </ul>
                </nav>
                <div className='nav-login hovered flex'>
                    <Link to={'/login'} className='btn-login flex center'>
                        Login
                    </Link>
                </div>
                <span className='btn-menu hidden' onClick={toggleMenu}>
                    {isSideMenu ? <HiX /> : <HiMenu />}
                </span>
            </header>
        </div>
    )
}
