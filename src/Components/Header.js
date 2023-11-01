import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
import logo from "../Images/logo.png"

import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {

    // const [state, dispatch] = useStateValue();

    const [{ basket, user }, dispatch] = useStateValue();


    function handleAuthentication() {
        if (user)
            auth.signOut()
    }


    return (
        <nav className='header'>

            {/* logo left */}
            <Link to="/">
                <img className='header_logo'
                    src={logo} alt="logo" />
            </Link>

            {/* search box */}
            <div className="header_search">
                <input type="text" className="header_searchInput" />
                <SearchIcon className='header_searchIcon' />
            </div>


            {/* 4 links */}
            <div className="header_nav">
                {/* href will refresh the page but this link will not refresh the PAGE : SPA(SINGLE  APPLICATION) */}

                {/* no user then only re-direct to login page */}
                <Link to={!user && '/login'}
                    className='header_link'>


                    <div
                        onClick={handleAuthentication}
                        className="header_option">

                        <span className='header_optionLineOne'>Hello Guest</span>
                        <span className='header_optionLineTwo'>{user ? 'Sign In' : 'Sign out'}</span>

                    </div>

                </Link>



                <Link to="/" className='header_link'>

                    <div className="header_option">
                        <span className='header_optionLineOne'>Returns</span>
                        <span className='header_optionLineTwo'>& Orders</span>
                    </div>

                </Link>



                <Link to="/" className='header_link'>

                    <div className="header_option">
                        <span className='header_optionLineOne'>Your</span>
                        <span className='header_optionLineTwo'>Prime</span>
                    </div>

                </Link>


                {/* checkout */}
                <Link to="/checkout" className='header_link'>
                    <div className="header_optionBasket">
                        {/* basket icon */}
                        <ShoppingBasketIcon />

                        {/* number of item in basket */}
                        <span className='header_optionLineTwo header_optionBasketCount'>{basket?.length}</span>

                        {/* basket?.length is a safe navigation operator that is used in JavaScript to avoid an error in case the value of basket is null or undefined */}

                    </div>
                </Link>

            </div>


            {/* basket icon (number icon) */}
        </nav>
    )
}

export default Header
