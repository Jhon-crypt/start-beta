import React from 'react'
import logo from '../assets/logo.png'

function NavItems(props: 
{
    title : string
}
){

    return (

        <>
        <li className="nav-item">
            <a className="nav-link text-dark" href="null"><b>
                {props.title}
            </b></a>
        </li>
        </>

    )

}



function Header(){

    const nav_heading : any = {

        title : 'StartBeta',
        logo_url : logo
        
    }

    let nav_titles = [

    
        {nav_title : 'Home'},
        {nav_title : 'About'},
        {nav_title : 'Course'},
        {nav_title : 'Blog'},
        {nav_title : 'Contacts'}
    
    ];

    return (
        <>
        <nav className="navbar navbar-expand-md bg-white mt-3">
            <div className="container">
                <a className="navbar-brand text-dark" href="Home">
                
                    <img src={nav_heading.logo_url} height="40px" width="40px" alt="logo"/> <b>{nav_heading.title}</b>

                </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fa fa-navicon "></i>
                </button>
                

                <div className="collapse navbar-collapse" id="navbarsExample04">
                    
                    <ul className="navbar-nav mx-auto mb-md-0" style={{"width":"350px"}}>
                        {nav_titles.map((item) => <NavItems title={item.nav_title} />)}
                    </ul>
                    
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                        <button type="button" className="btn btn-md text-dark bg-light">
                            <b>Login</b>
                        </button>
                        <button type="button" className="btn btn-md text-light" style={{"backgroundColor":"#3BAA66"}}>
                            <b>Register</b>
                        </button>
                    </div>

                </div>
            </div>

        </nav>
        </>
    )

}

export default Header