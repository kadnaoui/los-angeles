import React from "react";

import styles from './HeroPage.module.css';

const HeroPage = (props) => {
 const { scrollPosition = 0 }=props;

  return (
    <section id="section1" className={styles.HeroPage} >
      <img className={styles.background} style={{transform:` translateY(${scrollPosition/8}px)`}} src="/images/lam-hero-image.png" alt="Background"/>
      <img className={styles.foreground} src="/images/lam-hero-image-mask.png" alt="Foreground"/>
    </section>
  );
}

export default HeroPage;