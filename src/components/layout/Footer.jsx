import './Footer.css';

const Footer = (props) => {
  return (
<footer>
	<div className="content">
		<div className="top">
			<div className="logo-details">
				<span className="logo_name">Weekend Cakes</span>
			</div>
			<div className="media-icons">
				<a href="https://www.instagram.com/pranshu__bakery/"><i className="fa fa-instagram"></i></a>
				{/* <a href=""><i class="fa fa-linkedin"></i></a>
				<a href=""><i class="fa fa-youtube"></i></a> */}
			</div>
		</div>
		<div className="link-boxes">
			<ul className="box">
				<li className="link_name">Links</li>
				<li><a href="https://custom-cake-shop.netlify.app/">Home</a></li>
				{/* <li><a href="#">About Us</a></li>
				<li><a href="#">Quick Tour</a></li>  */}
			</ul>
			<iframe 
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2804.1468640660046!2d-75.81480298418641!3d45.345847549353486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce00e9f7f7f883%3A0xcdd403006d4d009c!2s90%20Woodridge%20Crescent%2C%20Nepean%2C%20ON%20K2B%207T1!5e0!3m2!1sen!2sca!4v1630814534677!5m2!1sen!2sca" 
				width="300" 
				title="GeoLocation"
				height="150" 
				loading="lazy"
				allowFullScreen=""
			>
			</iframe>
			<ul className="box">
				<li className="link_name">Contact</li>
				<li><a href="tel:343-988-6159">+1 343-988-6159</a></li>
			</ul>
		</div>
	  </div>
	    <div className="bottom-details">
      <div className="bottom_text">
        <span className="copyright_text">Copyright © 2021 
		WeekendCakes.</span>
        <span className="policy_terms">
          Privacy policy 
        </span>
      </div>
    </div>
</footer>
  );
};

export default Footer;