import styled from 'styled-components';
import Link from 'next/link';
import Colors from "../colors/colors";
import { usePathname } from 'next/navigation';

const list = [
  { name: 'Home', path: '/' },
  { name: 'AboutUs', path: '/about' },
  { name: 'Contact', path: '/contact' },
  { name: 'Portfolio', path: '/portfolio' },
];

interface ButtonProps {
  $active: boolean;
}

const Button = styled.button<ButtonProps>`
  background-color: ${(props) => (props.$active ? 'white' : 'rgba(255, 255, 255, 0.6)')};
  color: ${(props) => (props.$active ? Colors.textBlack : Colors.textBlack)};
  font-size: 17px;
  font-weight: ${(props) => (props.$active ? 'bold' : 'normal')};
  border: none;
  padding: 10px 15px;
  margin: 0 15px;
  border-radius: 50px;
  cursor: pointer;

  &:hover {
    font-size: large;
    transition: font-size 0.3s ease;
  }
`;

const ButtonContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: end;
  align-items: center;
  flex-wrap: wrap;
`;

export default function ButtonsNavigation() {
  const path = usePathname();

  return (
    <ButtonContainer>
      {list.map((button, index) => (
        <Link key={index} href={button.path}>
          <Button $active={path === button.path}>{button.name}</Button>
        </Link>
      ))}
    </ButtonContainer>
  );
}
