import React from 'react';

import '../../css/footer.css';


const Footer = () => {
    return (
        <div className="footer">
         <div className="footer-grid">
             <div className="footer-grid-item">
                <i className="fa fa-yelp font-icon"></i>
                <i className="fa fa-twitter font-icon"></i>
                <i className="fa fa-facebook font-icon"></i>
                <i className="fa fa-instagram font-icon"></i>
             </div>
             
             <div className="footer-grid-item">
                 <p>
                     North Lamar • Take-out & Delivery <br/>
                    (512) 386-1908 • 6519 North Lamar 78752
                </p>
                <p>
                     South Lamar • Take-out & Delivery <br/>
                     (512) 394-6350 • 3005 South Lamar D-114B 78704
                </p>
                <p>
                    Anderson Mill • Take-out & Delivery <br/>
                    (512) 953-8143 • 10700 Anderson Mill #109 78750
                </p>
                <p>
                    Clone created by Ken Javier <br/>
                    Visit the original website at <br/>
                    https://michiramen.com/<br/>
                    © Michi Ramen
                </p>
             </div>

             <div className="footer-grid-item">
                 <button type="button" className="btn-order-online">ORDER ONLINE</button>
             </div>
         </div>
         </div>
        
    );
}
 
export default Footer;