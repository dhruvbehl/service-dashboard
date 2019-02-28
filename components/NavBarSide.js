import React from 'react';
import { Nav, NavItem, NavLink} from 'reactstrap';
import '../styles/sidebar.css';

export default class NavBarSide extends React.Component {
    constructor(props) {
        super(props);

        this.toggleError = this.toggleError.bind(this);
        this.togglePrice = this.togglePrice.bind(this);
        this.toggleVolume = this.toggleVolume.bind(this);

        this.state = {
            dropdownError: false,
            dropdownPrice: false,
            dropdownVolume: false
        };
    }

    toggleError(){
        this.setState({
            dropdownError: !this.state.dropdownError
        });
    }

    togglePrice(){
        this.setState({
            dropdownPrice: !this.state.dropdownPrice
        });
    }

    toggleVolume() {
        this.setState({
            dropdownVolume: !this.state.dropdownVolume
        });
    }
    render() {
        return (
            <Nav className="col-md-2 d-none d-md-inline-flex bg-dark sidebar">
                <div className="sidebar-sticky">
                    <ul className="nav flex-column">
                        <NavItem>
                            <NavLink href="/platforms">Platforms</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/brokers">Services</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/instances">Instances</NavLink>
                        </NavItem>
                    </ul>
                </div>
            </Nav>
        );
    }
}