import React from 'react';
import image from '../assets/images/grupo7.png';
function Footer(){
    return (
        <React.Fragment>
			<footer className="sticky-footer bg-white">
				<div className="container my-auto">
					<div className="copyright text-center my-auto">
						<span>Copyright &copy; <img className="w-101" src={image} alt="Digital House"/> </span>
					</div>
				</div>
			</footer>

        </React.Fragment>
    )
}
export default Footer;