import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class ErrorNotFound extends Component  {
    render() {
        return (
            <div id='error' style={{marginBottom: 20}}>
                <h1 className="notFoundTitle">Oops! That page can’t be found.</h1>
                <p className="notFoundDesc">
                        It looks like nothing was found at this location.
                        Maybe try one of the links in the menu or press back to go to the previous page.
                </p>
                <Link
                    to="/"
                    style={{
                        display: 'inline-block',
                        marginTop: '20px',
                        padding: '10px 20px',
                        fontSize: '16px',
                        color: '#fff',
                        backgroundColor: '#00bc77',
                        textDecoration: 'none',
                        borderRadius: '5px',
                    }}
                    >
                    Go to Homepage
                </Link>
            </div>
        );
    }
}