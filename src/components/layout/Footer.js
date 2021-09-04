import './Footer.css';

const Footer = (props) => {
  return (
<footer>
	<div class="content">
		<div class="top">
			<div class="logo-details">
				<span class="logo_name">Weekend Cakes</span>
			</div>
			<div class="media-icons">
				{/* <a href=""><i class="fa fa-facebook"></i></a>
				<a href=""><i class="fa fa-twitter"></i></a> */}
				{/* <a href=""><i class="fa fa-instagram"></i></a> */}
				{/* <a href=""><i class="fa fa-linkedin"></i></a>
				<a href=""><i class="fa fa-youtube"></i></a> */}
			</div>
		</div>
		<div class="link-boxes">
			<ul class="box">
				<li class="link_name">Links</li>
				{/* <li><a href="#">Home</a></li>
				<li><a href="#">About Us</a></li>
				<li><a href="#">Quick Tour</a></li> */}
			</ul>
			<ul class="box">
				<li class="link_name">Contact</li>
				<li><a href="tel:343-988-6159">+1 343-988-6159</a></li>
			</ul>
		</div>
	  </div>
	    <div class="bottom-details">
      <div class="bottom_text">
        <span class="copyright_text">Copyright © 2021 
		WeekendCakes.</span>
        <span class="policy_terms">
          Privacy policy 
        </span>
      </div>
    </div>
</footer>
  );
};

export default Footer;