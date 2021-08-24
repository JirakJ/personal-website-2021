import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <div id="aligned-div">
        <Link to="/" className="logo">
          <img src={`${PUBLIC_URL}/images/ing-jakub-jirak.png`} alt="" />
        </Link>
        <header>
          <h2>Jakub Jirák</h2>
          <p><a href="mailto:jakub@jakubjirak.com">jakub@jakubjirak.com</a></p>
          <p><a href="tel:+420774946264">Phone: +420 774 946 264</a></p>
        </header>
      </div>
    </section>
    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Jakub Jirák <Link to="/">jakubjirak.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
