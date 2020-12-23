import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import LocalMallTwoToneIcon from '@material-ui/icons/LocalMallTwoTone';
import { Badge, IconButton } from '@material-ui/core';
import GradeTwoToneIcon from '@material-ui/icons/GradeTwoTone';
import { MainContext } from '../../contexts/MainContext';
import './Header.css';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
} from 'reactstrap';

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const { productsCountInCart, productsCountInFavorite } = useContext(MainContext)

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar className="navbar" color="black" light expand="md">
                <NavbarBrand style={{fontSize: '25px'}} className="first_nav" href="/">KOIO</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar style={{ justifyContent: 'space-between' }}>
                    <Nav className="" navbar>
                        <NavItem>
                            <NavLink href="/components/">About Us</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Sale</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Gifts</NavLink>
                        </NavItem>
                    </Nav>
                    <div className="right_navs d-flex col-lg-4" style={{ justifyContent: 'space-around', cursor: 'pointer' }}>
                        <Link to='/signin'>
                            <NavbarText className="nav_1 mt-1">Sign In</NavbarText>
                        </Link>
                        <Link to='/signup'>
                            <NavbarText className="nav_2 mt-1">Sign Up</NavbarText>
                        </Link>
                        <Link to="/cart" style={{ color: 'inherit' }}>
                            <IconButton color="inherit">
                                <Badge badgeContent={productsCountInCart} color="secondary">
                                    <LocalMallTwoToneIcon style={{ color: 'grey' }} />
                                </Badge>
                            </IconButton>
                        </Link>

                        <Link to="/favorite" style={{ color: 'inherit' }}>
                            <IconButton color="inherit">
                                <Badge badgeContent={productsCountInFavorite} color="secondary">
                                    <GradeTwoToneIcon style={{fontSize: '25px', color: 'grey'}} />
                                </Badge>
                            </IconButton>
                        </Link>
                    </div>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Header;