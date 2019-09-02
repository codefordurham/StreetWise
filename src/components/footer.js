import React from "react";
import { FaTwitter, FaGithub, FaMedium } from "react-icons/fa";
import { StaticQuery, graphql } from "gatsby";
import "./style.scss";

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
        <div className="content">
          <article className="media">
            <div className="media-left">
              <p className="is-size-5">Made by code for durham</p>
            </div>
            <div className="media-right footer-icons">
              <span className="icon is-small footer-icons__icon">
                <a href={data.site.siteMetadata.twitter}>
                  <FaTwitter size="" color="gray" />
                </a>
              </span>
              <span className="icon is-small footer-icons__icon">
                <a href={data.site.siteMetadata.github}>
                  <FaGithub size="" color="gray" />
                </a>
              </span>
            </div>
          </article>
        </div>
      </footer>
    )}
  />
);

export default Footer;
