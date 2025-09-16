// filepath: c:\Users\01700041479\Dogs\src\Components\Footer.jsx
import React from 'react';
import styles from './Footer.module.css';
import Dogs from '../Assets/dogs-footer.svg?react';
const Footer = () => (
  <footer className={styles.footer}>
    <Dogs />
    <p>Dogs. Alguns direitos reservados</p>
  </footer>
);

export default Footer;