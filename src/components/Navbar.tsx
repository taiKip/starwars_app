import React from 'react'
import classes from './Navbar.module.css'
const Navbar = ({ setPage }: {
    setPage: (pageName:string) => void;

}) => {
    return (
        <nav className={classes.navbar}>
            <button onClick={() => { setPage("planets") }}>Planets</button>
            <button onClick={() => { setPage("people") }}>People</button>
        </nav>
    )
}

export default Navbar
