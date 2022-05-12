import React from 'react';

const Footer = () => {
    return (
        <footer className="mt-auto">
        <br/>
        <div className="container justify-content-center">
            <div className="row ">
                <div className="col-sm-12 ">
                    <p id="socialsHeader">My Socials</p>
                </div>
            </div>
        </div>
        <div className="container justify-content-center">
            <div className="row ">
                <div className="col-sm-12 ">
                    <p>
                        <a href="https://github.com/WalkingZ3d?tab=repositories" target="_blank" id="socialButton"><button type="button" className="btn btn-social-icon btn-outline-github"><i className="fa fa-github"></i></button></a>
                        <a href="https://www.linkedin.com/in/daniel-willis-44b4a7189/" target="_blank" id="socialButton"><button type="button" className="btn btn-social-icon btn-outline-linkedin"><i className="fa fa-linkedin"></i></button></a>
                    </p>
                </div>
            </div>
        </div>       
        <p id="nameEnd"> &copy; {new Date().getFullYear()} Copyright: Dan Willis </p>
    </footer>
    )
}

export default Footer;