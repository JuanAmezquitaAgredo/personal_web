import styled from 'styled-components';
import Link from 'next/link';
import Colors from '../colors/colors';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const list = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Contact', path: '/contact' },
  { name: 'Portfolio', path: '/portfolio' },
];

interface ButtonProps {
  $active: boolean;
}

const Button = styled.button<ButtonProps>`
  background-color: ${(props) => (props.$active ? 'white' : 'rgba(255, 255, 255, 0.6)')};
  color: ${Colors.textBlack};
  font-size: 17px;
  font-weight: ${(props) => (props.$active ? 'bold' : 'normal')};
  border: none;
  padding: 10px 15px;
  margin: 10px 0;
  border-radius: 50px;
  cursor: pointer;
  width: 100%;
  text-align: left;
  
  &:hover {
    font-size: large;
    transition: font-size 0.3s ease;
  }
`;

const ButtonContainer = styled.div`
  width: 40vw; 
  display: flex;
  justify-content: space-around;

  @media (max-width: 1000px) {
    display: none;
  }
`;

const MobileMenu = styled.div<{ open: boolean }>`
  position: fixed;
  top: 0;
  right: ${(props) => (props.open ? '0' : '-100%')};
  width: 200px;
  height: 100vh;
  background-color: ${Colors.primary};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  transition: right 0.3s ease-in-out;
  box-shadow: ${(props) => (props.open ? '-5px 0 15px rgba(0,0,0,0.3)' : 'none')};
`;

const Hamburger = styled.div`
  padding: 2%;
  display: none;
  flex-direction: column;
  cursor: pointer;

  @media (max-width: 1000px) {
    display: flex;
  }

  div {
    width: 30px;
    height: 4px;
    background-color: ${Colors.textBlack};
    margin: 5px;
    transition: all 0.3s ease;
  }
`;

export default function ButtonsNavigation() {
  const path = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if ((event.target as HTMLElement).closest('#mobile-menu') === null && (event.target as HTMLElement).closest('#hamburger') === null) {
        closeMenu();
      }
    };

    if (menuOpen) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    return () => document.removeEventListener('click', handleClickOutside);
  }, [menuOpen]);

  return (
    <>
      <ButtonContainer>
        {list.map((button, index) => (
          <Link key={index} href={button.path} passHref>
            <Button $active={path === button.path}>{button.name}</Button>
          </Link>
        ))}
      </ButtonContainer>

      <Hamburger id="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </Hamburger>

      <MobileMenu id="mobile-menu" open={menuOpen}>
        {list.map((button, index) => (
          <Link key={index} href={button.path} passHref>
            <Button $active={path === button.path} onClick={closeMenu}>{button.name}</Button>
          </Link>
        ))}
      </MobileMenu>
    </>
  );
}
