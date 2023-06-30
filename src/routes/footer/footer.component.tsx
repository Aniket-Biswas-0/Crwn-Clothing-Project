import React, { Fragment, useState, ChangeEvent } from 'react';
import { Link, Outlet } from 'react-router-dom';

import { FooterContainer, SiteNavigation, FollowUs, Newsletter, ContactUs } from './footer.styles';
import FormInput from '../../components/form-input/form-input.component'

import Button from '../../components/button/button.component';

const defaultFormFields = {
    email: '',
  };

const Footer: React.FC = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email } = formFields;

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value });
      };

      const redirectToWebsite = () => {
        window.location.href = 'https://crown-customizer.netlify.app/';
      };

  return (
    <Fragment>
        <Outlet />
        <FooterContainer>
            <SiteNavigation>
                <h4>Site Navigation</h4>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/shop">Shop</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/faq">FAQ</Link></li>
                    <li><Link to="/privacy">Privacy Policy</Link></li>
                </ul>
            </SiteNavigation>
            <FollowUs>
                <h4>Follow Us</h4>
                <ul>
                    <li><a href="https://www.facebook.com/example">Facebook</a></li>
                    <li><a href="https://www.instagram.com/example">Instagram</a></li>
                    <li><a href="https://twitter.com/example">Twitter</a></li>
                </ul>
            </FollowUs>
            <Newsletter>
                <label>Make a customized Shirt</label>
                <div>
                    <Button onClick={redirectToWebsite}>Customize Shirt</Button>
                </div>
            </Newsletter>
            <ContactUs>
                <h4>Contact Us</h4>
                <p>ABC Complex, 123 Street, Kolkata, India</p>
                <p>Email: info@example.com</p>
                <p>Phone: +91 1234567890</p>
            </ContactUs>
        </FooterContainer>
    </Fragment>
  );
};

export default Footer;
