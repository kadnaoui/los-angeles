import React, { useState, useEffect } from 'react';
import HeroPage from './components/HeroPage/HeroPage';
import Navbar from './components/Navbar/Navbar';
import Page from './components/Page/Page';
import Slider from './components/Slider/Slider';

import './App.css';

const App = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 810);

  useEffect(() => {
    const updateScrollPosition = () => setScrollPosition(window.scrollY);
    const handleResize = () => setIsMobile(window.innerWidth < 768);

    window.addEventListener('scroll', updateScrollPosition);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', updateScrollPosition);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="App">
      <Navbar
        MenuItems={[
          { href: '#section2', text: 'History' },
          { href: '#section3', text: 'Teams' }
        ]}
        images={[{ imgPath: "/images/lam-logo.png", imgAlt: "example" }]}
        isMobile={isMobile}
        isScrolled={scrollPosition > 10}
        style={{ backgroundColor: 'unset', color: '#fff', position: 'absolute' }}
      />
      <HeroPage scrollPosition={scrollPosition} />
      <Navbar
        MenuItems={[
          { href: '#section2', text: 'History' },
          { href: '#section3', text: 'Teams' }
        ]}
        images={[{ imgPath: "/images/lam-logo.png", imgAlt: "example" }, { imgPath: "/images/lam-logo-text.png", imgAlt: "example" }]}
        isMobile={isMobile}
        style={{ backgroundColor: '#fff', color: '#333' }}
      />
      <section id="section2" className="section2">
        <img className="background" src="/images/lam-middle-image.png" alt="Background" />
        <div className='description'>
          <img src="/images/lam-big-01-title.png" alt="title" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus id interdum velit laoreet. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Felis imperdiet proin fermentum leo vel orci porta non. Diam in arcu cursus euismod quis viverra. Dignissim convallis aenean et tortor.
          </p>
        </div>
        <Slider
          isMobile={isMobile}
          slidesImgs={[
            { imgPath: "/images/lam-first-carousel-image.png", imgAlt: "example" },
            { imgPath: "/images/lam-second-carousel-image.png", imgAlt: "example" },
            { imgPath: "/images/lam-first-carousel-image.png", imgAlt: "example" },
            { imgPath: "/images/lam-second-carousel-image.png", imgAlt: "example" }
          ]} />
      </section>
      <section id="section3" className="section3">
        <div className='description'>
          <img src="/images/lam-big-02-title.png" alt="title" />
          <p>
            Congue nisi vitae suscipit tellus mauris a diam maecenas sed. Proin sed libero enim sed faucibus. Adipiscing commodo elit at imperdiet dui accumsan.
          </p>
        </div>
        <div className="section-content">
          <Page isMobile={isMobile} />
        </div>
      </section>
      <footer>
        <a href='#section1'>
          <img src="/images/lam-footer-logo.png" alt="footer logo" />
        </a>
        <p>COPYRIGHT 2024. ALL RIGHTS RESERVED.</p>
      </footer>
    </div>
  );
}

export default App;
