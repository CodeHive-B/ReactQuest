import { NavLink, useLocation } from 'react-router-dom';
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import styles from './Navbar.module.css';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <nav className={styles.navbar}>
            <div className={styles.hamburger} onClick={toggleMenu}>
                {isOpen ? <FaTimes size={30} color='white' /> : <FaBars size={30} color='white' />}
            </div>
            <ul className={`${styles.menu} ${isOpen ? styles.open : styles.closed}`}>
                <li>
                    <NavLink 
                        className={({ isActive }) => (isActive ? styles.active : styles.link)}
                        to="/"
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        className={({ isActive }) => (isActive ? styles.active : styles.link)}
                        to="/counter"
                    >
                        Counter Example
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        className={({ isActive }) => (isActive ? styles.active : styles.link)}
                        to="/login"
                    >
                        Login Example
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        className={({ isActive }) => (isActive ? styles.active : styles.link)}
                        to="/fetch-user"
                    >
                        API Fetching Example
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        className={({ isActive }) => (isActive ? styles.active : styles.link)}
                        to="/conditional_rendering"
                    >
                        Conditinal Rendering
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        className={({ isActive }) => (isActive ? styles.active : styles.link)}
                        to="/lists_keys"
                    >
                        Lists & Keys
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;