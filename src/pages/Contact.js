import React from 'react'
import '../styles/Contact.css'
import {  NavLink } from 'react-router-dom'
import { Form } from 'react-bootstrap'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import PublicIcon from '@mui/icons-material/Public';
const Contact = () => {
  return (
    <div id='contact' className='contact-container  d-lg-flex d-md-flex d-sm-block justify-content-between p-5'>
        <h4 className='mx-auto my-4'>Logo</h4>
        <div className='contact-list d-flex justify-content-space-between mx-auto my-4'>
            <ul>
                <li><NavLink to="/" className="contact-list-item">Home</NavLink></li>
                <li><NavLink to="/discovery" className="contact-list-item">Discovery</NavLink></li>
                <li><NavLink to="/photos" className="contact-list-item">Photos</NavLink></li>
                <li><NavLink to="/contact" className="contact-list-item">Contact</NavLink></li>
            </ul>
            <ul>
                <li><NavLink to="/" className="contact-list-item">About</NavLink></li>
                <li><NavLink to="/discovery" className="contact-list-item">Help</NavLink></li>
                <li><NavLink to="/photos" className="contact-list-item">Terms</NavLink></li>
                <li><NavLink to="/contact" className="contact-list-item">Guidlines</NavLink></li>
            </ul>
            <ul>
                <li><NavLink to="/" className="contact-list-item">Testimonials</NavLink></li>
                <li><NavLink to="/discovery" className="contact-list-item">Advertise</NavLink></li>
                <li><NavLink to="/photos" className="contact-list-item">Integrations</NavLink></li>
                <li><NavLink to="/contact" className="contact-list-item">Careers</NavLink></li>
            </ul>
        </div>
        <div className='mx-auto my-4'>
        <Form className="d-flex mb-4">
            <Form.Control
              type="search"
              placeholder="Email"
              className="me-2 contact-search"
              aria-label="Search"
            />
                <PlayArrowIcon className='contact-search-icon'/>
          </Form>
          <span className='contact-span'>Stay in touch with us for the freshes products!</span>
        </div>
        <div className='d-flex justify-content-between mx-auto my-4'>
            <InstagramIcon className='me-2'/>
            <TwitterIcon  className='me-2'/>
            <FacebookIcon  className='me-2'/>
            <PublicIcon  className='me-2'/>
        </div>

    </div>
  )
}

export default Contact
