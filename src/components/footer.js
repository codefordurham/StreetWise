import React from 'react';
import { FaTwitter, FaGithub, FaMedium } from 'react-icons/fa';
import { StaticQuery, graphql } from 'gatsby';
import './style.scss';

const Footer = () => (
	<StaticQuery
		query={graphql`
			query SocialQuery {
				site {
					siteMetadata {
						twitter
						github
					}
				}
			}
		`}
		render={data => (
			<footer className="footer center has-background-light">
				<div className="content has-text-centered">
					<article className="media center">
						<span className="icon">
							<a href={data.site.siteMetadata.twitter}>
								<FaTwitter size="fa-2x" color="gray" />
							</a>
						</span>
						&nbsp;
						<span className="icon">
							<a href={data.site.siteMetadata.github}>
								<FaGithub size="fa-2x" color="gray" />
							</a>
						</span>
					</article>
					&nbsp;
					<p className="is-size-5">
            Visit code for durham.
					</p>
				</div>
			</footer>
		)}
	/>
);

export default Footer;
