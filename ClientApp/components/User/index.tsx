import * as React from 'react';
import './styles.css';
import { Link, LinkProps } from 'react-router-dom';

export class User extends React.Component<{}, UserState> {
    constructor(props: any){
        super (props);

        this.state = {
            loggedIn: false
        }

    }   

    logIn(){
        this.setState({loggedIn: true})
    }

    logOut(){
        this.setState({loggedIn: false})
    }

    render(){
        return (
            <div className="right">
                {(this.state.loggedIn) ? (
                <span>Logged in: pfp@tuck.as <Link to={'/'} onClick={this.logOut.bind(this)} title={"Log out"}>Log out</Link></span>
                ) : (
                    <Link to={'/'} onClick={this.logIn.bind(this)} title={"Log in"}>Log in</Link>
                )}
            </div>
        )
    }
}

interface UserState {
    loggedIn: boolean;
}