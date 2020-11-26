import React from "react";

import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinkTitle,
  FooterLinkItems,
  FooterLink,
  FooterLinksWrapper,
  SocialMedia,
  SocialMediaWrap,
  SocialIcons,
  SocialIconLink,
  SocialLogo,
  WebsiteRights
} from "./FooterElements";
import {
  FaYoutube,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaInstagram
} from "react-icons/fa";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle> About us</FooterLinkTitle>

              <FooterLink to='/signin'>How it works</FooterLink>
              <FooterLink to='/signin'>Testimonials</FooterLink>
              <FooterLink to='/signin'>Careers</FooterLink>
              <FooterLink to='/signin'>Investors</FooterLink>
              <FooterLink to='/signin'>Terms of service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Videos</FooterLinkTitle>

              <FooterLink to='/signin'>Submit Videos</FooterLink>
              <FooterLink to='/signin'>Ambassadors</FooterLink>
              <FooterLink to='/signin'>Agency</FooterLink>
              <FooterLink to='/signin'>Influencer</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle> Social Media</FooterLinkTitle>

              <FooterLink to='/signin'>Instagram</FooterLink>
              <FooterLink to='/signin'>Facebook</FooterLink>
              <FooterLink to='/signin'>Youtube</FooterLink>
              <FooterLink to='/signin'>Twitter</FooterLink>
              <FooterLink to='/signin'>Twitch</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle> Contact Us</FooterLinkTitle>

              <FooterLink to='/signin'>Contact</FooterLink>
              <FooterLink to='/signin'>Support</FooterLink>
              <FooterLink to='/signin'>Destinations</FooterLink>
              <FooterLink to='/signin'>Sponsorships</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/'>DATO</SocialLogo>
            <WebsiteRights>
              {" "}
              DATO © {new Date().getFullYear()} All Rights Reserved.{" "}
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href='//.www.facebook.com'
                target='_blank'
                aria-label='Facebook'
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' aria-label='youtube'>
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' aria-label='twitter'>
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' aria-label='instagram'>
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' aria-label='Linkedin'>
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
