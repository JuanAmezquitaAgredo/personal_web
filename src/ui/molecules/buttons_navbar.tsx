import styled from 'styled-components';
import Link from 'next/link';
import Colors from "../colors/colors";

const list = [
  { name: 'Home', path: '/' },
  { name: 'AboutUs', path: '/about' },
  { name: 'Contact', path: '/contact' },
  { name: 'Portfolio', path: '/portfolio' },
];

const Button = styled.button`
  background-color: transparent;
  color: ${Colors.textBlack};
  border: none;
  padding: 10px 20px;
  margin: 0 10px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    font-size: large;
    transition: font-size 0.5s ease;
  }
`;

const ButtonContainer = styled.div`
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export default function ButtonsNavigation() {
  return (
    <ButtonContainer>
      {list.map((button, index) => (
        <Link key={index} href={button.path} passHref>
          <Button>{button.name}</Button>
        </Link>
      ))}
    </ButtonContainer>
  );
}
