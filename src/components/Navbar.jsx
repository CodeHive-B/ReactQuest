import { Link } from 'react-router-dom';
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import styles from './Navbar.module.css';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <nav className={styles.nav}>
            <div className={styles.hamburger} onClick={toggleMenu}>
                {isOpen ? <FaTimes size={30} color='white' /> : <FaBars size={30} color='white' />}
            </div>
            <ul className={`${styles.ul} ${isOpen ? styles["mobile-menu"] : ""}`}>
                <li><Link className={styles.a} to="/">Home</Link></li>
                <li><Link className={styles.a} to="/counter">Counter Example</Link></li>
                <li><Link className={styles.a} to="/login">Login Example</Link></li>
                <li><Link className={styles.a} to="/fetch-user">API Fetching Example</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;