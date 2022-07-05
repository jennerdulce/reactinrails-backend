import React, { Component } from 'react';
import { Nav, NavItem } from 'reactstrap'


class Header extends Component {
    render() {
        const {
            logged_in,
            current_user,
            new_user_route,
            sign_in_route,
            sign_out_route
          } = this.props
          console.log("logged_in:", logged_in)
          console.log("current_user:", current_user)
          console.log("new_user_route:", new_user_route)
          console.log("sign_in_route:", sign_in_route)
          console.log("sign_out_route:", sign_out_route)
        return (
            <div>
               <h1>React in Rails with Devise</h1>
                    <Nav>
                    {logged_in &&
                        <NavItem>
                        <a href={sign_out_route} className="nav-link">Sign Out</a>
                        </NavItem>
                    }
                    {!logged_in &&
                        <NavItem>
                        <a href={sign_in_route} className="nav-link">Sign In</a>
                        </NavItem>
                    }
                    {!logged_in &&
                        <NavItem>
                        <a href={new_user_route} className="nav-link">Sign Up</a>
                        </NavItem>
                    }
                    </Nav>
            </div>
        );
    }
}

export default Header;