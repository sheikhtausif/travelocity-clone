/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import travelNavbar from "../module/travelnavbar.module.css"
import travellogo from "../images/travellogo.svg"
import MenuList from "../Component/MenuList"
const TravelNavbar = () => {

    return (
        <div className={travelNavbar.Navbarnav}>
            <div>
                <img className={travelNavbar.NavbarnavLogo} src={travellogo} alt="travellogo" />
                <MenuList />
                <div>

                </div>
            </div>

            <ul className={travelNavbar.NavbarUl}>
                <li className={travelNavbar.NavbarLi}><a className={travelNavbar.travelNavLink} href="#"> Home </a> </li>
                <li className={travelNavbar.NavbarLi}><a className={travelNavbar.travelNavLink} href="#"> Profile </a></li>
                <li className={travelNavbar.NavbarLi}><a className={travelNavbar.travelNavLink} href="#"> Espansio </a></li>
                <li className={travelNavbar.NavbarLi}><a className={travelNavbar.travelNavLink} href="#"> Support </a></li>
                <li className={travelNavbar.NavbarLi}><a className={travelNavbar.travelNavLink} href="#"> TravelName </a></li>
            </ul>

        </div>
    )
}

export default TravelNavbar
