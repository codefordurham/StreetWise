import React from 'react';
import { FaGithub } from 'react-icons/fa';

import './style.scss';

import gatsbyLogo from '../images/gatsby-icon.png';
import bulmaLogo from '../images/bulma-logo.png';
import Navbar from './navbar';

const Header = ({ siteTitle }) => (
	<section className="hero gradientBg">
		<Navbar />
		<div className="hero-body">
			<div className="container center">
				<article className="media">
					<div className="media-content">
						<div className="content">
							<h1 className="is-size-1 has-text-white">
								StreetWise
							</h1>
							<p className="subtitle has-text-white is-size-3">
							</p>
						</div>
					</div>
				</article>
			</div>
		</div>
	</section>
);

export default Header;
