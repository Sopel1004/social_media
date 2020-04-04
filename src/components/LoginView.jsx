import React, { useState, useEffect, useRef } from 'react';
import LoginPage from '../styles/LoginPage';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import { CSSTransition } from 'react-transition-group';
import gsap from 'gsap';
import { ReactComponent as Ilustration } from '../images/undraw_mobile_feed.svg';
import IlustrationBox from '../styles/LoginPage/image';

const LoginView = () => {
  const [loginFormIsActive, setLoginFormIsActive] = useState(true);
  const [registerFormIsActive, setRegisterFormIsActive] = useState(false);
  let ilustration = useRef(null);

  const changeForms = () => {
    setLoginFormIsActive(!loginFormIsActive);
    setRegisterFormIsActive(!registerFormIsActive);
  };

  useEffect(() => {
    const [elements] = ilustration.current.children;

    const image = elements.getElementById('image');
    const feeds = elements.getElementById('feeds');
    const hand = elements.getElementById('hand');

    gsap.set(feeds, { autoAlpha: 0 });
    gsap.set(image, { transformOrigin: '50% 50%' });
    gsap.set(hand, { transformOrigin: '0% 0%' });

    const tl = gsap.timeline();

    tl.from(image, {
      autoAlpha: 0,
      scale: 0.5,
      duration: 2,
    })
      .fromTo(
        feeds,
        {
          y: '+=30',
        },
        { y: 0, autoAlpha: 1, duration: 1 }
      )
      .to(hand, 1, { rotate: -20, delay: 0.5 })
      .to(
        feeds,
        1,
        {
          y: '-=50',
          duration: 0.5,
          autoAlpha: 0,
        },
        '-=0.8'
      )
      .fromTo(
        feeds,
        {
          y: '+=10',
        },
        { y: 0, autoAlpha: 1, duration: 2 }
      );
  }, [ilustration]);

  const onEnter = (node) => {
    gsap.from(node, {
      opacity: 0,
      x: 50,
      duration: 1,
      delay: 0.5,
    });
  };

  const onExit = (node) => {
    gsap.to(node, {
      opacity: 0,
      x: 50,
      duration: 0.5,
    });
  };
  return (
    <LoginPage>
      <LoginPage.WelcomeText>Welcome</LoginPage.WelcomeText>
      <IlustrationBox ref={ilustration}>
        <Ilustration />
      </IlustrationBox>

      <CSSTransition
        in={loginFormIsActive}
        timeout={500}
        unmountOnExit
        onEnter={onEnter}
        onExit={onExit}
      >
        <LoginForm closeLoginForm={changeForms} />
      </CSSTransition>
      <CSSTransition
        in={registerFormIsActive}
        timeout={500}
        unmountOnExit
        onEnter={onEnter}
        onExit={onExit}
      >
        <RegisterForm closeRegisterForm={changeForms} />
      </CSSTransition>
    </LoginPage>
  );
};

export default LoginView;
