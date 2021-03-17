import React, {Component} from 'react'

export class Header extends Component{
    render(){
        return(
        <div>
        <div id="header">
        <div className="container">
            <div id="welcomeLine" className="row">
            <div className="span6">Welcome!<strong> User</strong></div>
            <div className="span6">
                <div className="pull-right">
                <a href="product_summary.html"><span className>Fr</span></a>
                <a href="product_summary.html"><span className>Es</span></a>
                <span className="btn btn-mini">En</span>
                <a href="product_summary.html"><span>£</span></a>
                <span className="btn btn-mini">$155.00</span>
                <a href="product_summary.html"><span className>$</span></a>
                <a href="product_summary.html"><span className="btn btn-mini btn-primary"><i className="icon-shopping-cart icon-white" /> [ 3 ] Itemes in your cart </span> </a> 
                </div>
            </div>
            </div>

            <div id="logoArea" className="navbar">
            <a id="smallScreen" data-target="#topMenu" data-toggle="collapse" className="btn btn-navbar">
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
            </a>
            <div className="navbar-inner">
                <a className="brand" href="index.html"><img src="themes/images/logo.png" alt="Bootsshop" /></a>
                <form className="form-inline navbar-search" method="post" action="products.html">
                <input id="srchFld" className="srchTxt" type="text" />
                <select className="srchTxt">
                    <option>All</option>
                    <option>CLOTHES </option>
                    <option>FOOD AND BEVERAGES </option>
                    <option>HEALTH &amp; BEAUTY </option>
                    <option>SPORTS &amp; LEISURE </option>
                    <option>BOOKS &amp; ENTERTAINMENTS </option>
                </select> 
                <button type="submit" id="submitButton" className="btn btn-primary">Go</button>
                </form>
                <ul id="topMenu" className="nav pull-right">
                <li className><a href="/">Home</a></li>
                <li className><a href="normal.html">Delivery</a></li>
                <li className><a href="/contact">Contact</a></li>
                <li className>
                    <a href="#login" role="button" data-toggle="modal" style={{paddingRight: 0}}><span className="btn btn-large btn-success">Login</span></a>
                    <div id="login" className="modal hide fade in" tabIndex={-1} role="dialog" aria-labelledby="login" aria-hidden="false">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                        <h3>Login Block</h3>
                    </div>
                    <div className="modal-body">
                        <form className="form-horizontal loginFrm">
                        <div className="control-group">								
                            <input type="text" id="inputEmail" placeholder="Email" />
                        </div>
                        <div className="control-group">
                            <input type="password" id="inputPassword" placeholder="Password" />
                        </div>
                        <div className="control-group">
                            <label className="checkbox">
                            <input type="checkbox" /> Remember me
                            </label>
                        </div>
                        </form>		
                        <button type="submit" className="btn btn-success">Sign in</button>
                        <button className="btn" data-dismiss="modal" aria-hidden="true">Close</button>
                    </div>
                    </div>
                </li>
                </ul>
            </div>
            </div>
        </div>
        </div>
        </div>
        )
    }
}

export default Header