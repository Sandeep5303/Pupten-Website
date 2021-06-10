import Image from 'next/image';
import Link from 'next/link';
import Parallax from 'parallax-js';
import React, { useEffect, useRef } from 'react';
import { TweenMax, Expo } from 'gsap';

import styles from '@styles/Showcase.module.css';

export default function Showcase() {
  const petsRef = useRef(null);
  const petsCircle1Ref = useRef(null);
  const petsCircle2Ref = useRef(null);
  const petsCircle3Ref = useRef(null);
  const petsCircle4Ref = useRef(null);
  const petsCircle5Ref = useRef(null);
  const taglineRef = useRef(null);
  const descRef = useRef(null);
  const btnRef = useRef(null);
  const pawRef = useRef(null);
  useEffect(() => {
    // parallax
    let scene = document.getElementById('scene');
    let parallax = new Parallax(scene);

    //gsap
    TweenMax.from(petsRef.current, 1, {
      delay: 2,
      opacity: 0,
      y: -800,
      ease: Expo.easeInOut,
    });

    TweenMax.from(petsCircle1Ref.current, 2, {
      delay: 2,
      opacity: 0,
      y: -800,
      ease: Expo.easeInOut,
    });

    TweenMax.from(petsCircle2Ref.current, 2, {
      delay: 2.1,
      opacity: 0,
      y: -800,
      ease: Expo.easeInOut,
    });

    TweenMax.from(petsCircle3Ref.current, 2, {
      delay: 2.2,
      opacity: 0,
      y: -800,
      ease: Expo.easeInOut,
    });

    TweenMax.from(petsCircle4Ref.current, 2, {
      delay: 2.3,
      opacity: 0,
      y: -800,
      ease: Expo.easeInOut,
    });

    TweenMax.from(petsCircle5Ref.current, 2, {
      delay: 2.4,
      opacity: 0,
      y: -800,
      ease: Expo.easeInOut,
    });

    TweenMax.from(taglineRef.current, 1, {
      delay: 1,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut,
    });

    TweenMax.from(descRef.current, 1, {
      delay: 1.2,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut,
    });

    TweenMax.from(btnRef.current, 1, {
      delay: 1.2,
      opacity: 0,
      ease: Expo.easeInOut,
    });

    TweenMax.from(pawRef.current, 1, {
      delay: 1.3,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut,
    });
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div ref={taglineRef} className={styles.tagline}>
          Taking care <br></br>
          of your <span>pets</span> as if they <br></br>
          were our own.
        </div>

        <div ref={descRef} className={styles.desc}>
          <p>
            A cloud-based management <br></br>
            platform for Veterinary professionals<br></br>
            to manage their daily tasks efficiently
          </p>
        </div>

        <Link href='/book/patient'>
          <a ref={btnRef} className='btn btn-dark'>
            Book a Vet
          </a>
        </Link>
      </div>

      <div ref={petsRef} className={styles.pets}>
        <Image src='/img/pets.png' height='600px' width='600px'></Image>
      </div>

      <div ref={pawRef} className={styles.paw}>
        {<Image src='/img/paw.png' height='95px' width='100px'></Image>}
      </div>

      <div className={styles.parallax}>
        <ul id='scene'>
          <li ref={petsCircle1Ref} className={styles.layer} data-depth='-.1'>
            <Image
              className={styles.pet_img}
              src='/img/user_pets/pet1.jpg'
              width='80px'
              height='80px'
            ></Image>
          </li>
          <li ref={petsCircle2Ref} className={styles.layer} data-depth='-.3'>
            <Image
              className={styles.pet_img}
              src='/img/user_pets/pet2.jpg'
              width='80px'
              height='80px'
            ></Image>
          </li>
          <li ref={petsCircle3Ref} className={styles.layer} data-depth='-.5'>
            <Image
              className={styles.pet_img}
              src='/img/user_pets/pet3.jpg'
              width='80px'
              height='80px'
            ></Image>
          </li>
          <li ref={petsCircle4Ref} className={styles.layer} data-depth='.3'>
            <Image
              className={styles.pet_img}
              src='/img/user_pets/pet4.jpg'
              width='80px'
              height='80px'
            ></Image>
          </li>
          <li ref={petsCircle5Ref} className={styles.layer} data-depth='.1'>
            <Image
              className={styles.pet_img}
              src='/img/user_pets/pet5.jpg'
              width='80px'
              height='80px'
            ></Image>
          </li>
        </ul>
      </div>
    </div>
  );
}
