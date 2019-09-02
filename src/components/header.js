import React from 'react';
import { FaGithub } from 'react-icons/fa';

import './style.scss';

import gatsbyLogo from '../images/gatsby-icon.png';
import bulmaLogo from '../images/bulma-logo.png';
import Navbar from './navbar';

const Header = ({ siteTitle }) => (
	<section className="hero has-background-light">
		<Navbar />
		<div className="container center">
			<article className="media">
				<div className="media-content">
					<div className="content">
						<h1 className="is-size-1">
							StreetWise
						</h1>
					</div>
				</div>
			</article>
		</div>
	</section>
);

export default Header;
