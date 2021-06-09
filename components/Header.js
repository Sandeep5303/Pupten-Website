import Link from 'next/link';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import { TweenMax, Expo, Power3 } from 'gsap';

import styles from '@styles/Header.module.css';

export default function Header() {
  const logoRef = useRef(null);
  const menuRef = useRef(null);
  const profileRef = useRef(null);
  const profileTextRef = useRef(null);
  useEffect(() => {
    TweenMax.from(logoRef.current, 1, {
      opacity: 0,
      x: -20,
      ease: Expo.easeInOut,
    });

    TweenMax.staggerFrom(
      menuRef.current,
      1,
      {
        opacity: 0,
        x: -20,
        ease: Power3.easeInOut,
      },
      0.08
    );

    TweenMax.from(profileRef.current, 1, {
      delay: 0.5,
      opacity: 0,
      x: -20,
      ease: Expo.easeInOut,
    });

    TweenMax.from(profileTextRef.current, 1, {
      delay: 0.6,
      opacity: 0,
      x: -20,
      ease: Expo.easeInOut,
    });
  }, []);
  return (
    <header className={styles.header}>
      <div ref={logoRef} className={styles.logo}>
        <Link href='/'>
          <a>Pupten.</a>
        </Link>
      </div>

      <div ref={menuRef} className={styles.menu_links}>
        <ul>
          <li>
            <Link href='/'>
              <a>home.</a>
            </Link>
          </li>
          <li>
            <Link href='/about'>
              <a>about.</a>
            </Link>
          </li>
          <li>
            <Link href='/pricing'>
              <a>pricing.</a>
            </Link>
          </li>
          <li>
            <Link href='/blog'>
              <a>blog.</a>
            </Link>
          </li>
        </ul>
      </div>
      {/* Add log in and sign up btn later */}
      <div ref={profileRef} className={styles.user}>
        <Image
          className={styles.profile_img}
          src='/img/profile/profile.jpeg'
          height='50px'
          width='50px'
        ></Image>

        <Link href='/profile'>
          <a ref={profileTextRef} className={styles.profile_text}>
            Profile
          </a>
        </Link>
      </div>
    </header>
  );
}
