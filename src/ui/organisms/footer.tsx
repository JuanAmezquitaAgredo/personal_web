'use client'
import styled from "styled-components";
import Link from "next/link";
import { Instagram, Linkedin } from "lucide-react";
import Colors from "../colors/colors";

const FooterContainer = styled.footer`
  background-color: ${Colors.tertiary}; /* Tailwind bg-gray-500 */
  color: ${Colors.textWhite};
`;

const FooterContent = styled.div`
  width: 100%; /* Tailwind max-w-7xl */
  margin: 0 auto;
  padding: 3rem 1rem; /* Tailwind px-4 py-12 */
  @media (min-width: 640px) {
    padding: 3rem 1.5rem; /* Tailwind sm:px-6 */
  }
  @media (min-width: 1024px) {
    padding: 3rem 2rem; /* Tailwind lg:px-8 */
  }
`;

const FooterGrid = styled.div`
  width: 100%;
  display: grid;
  place-items: start;   
  grid-template-columns: 1fr;
  gap: 2rem; /* Tailwind gap-8 */
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr); /* Tailwind md:grid-cols-4 */
    place-items: center;
  }
`;

const Section = styled.div``;

const SectionTitle = styled.h2`
  font-size: 1.5rem; /* Tailwind text-2xl */
  font-weight: bold;
  margin-bottom: 1rem; /* Tailwind mb-4 */
`;

const Text = styled.p`
  color: ${Colors.textWhite}; /* Tailwind text-gray-300 */
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  margin-bottom: 0.5rem; /* Tailwind space-y-2 */
`;

const StyledLink = styled(Link)`
  color: ${Colors.textWhite}; /* Tailwind text-gray-300 */
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: ${Colors.textWhite}; /* Tailwind hover:text-white */
  }
`;

const Address = styled.address`
  font-style: normal;
`;

const IconLink = styled.a`
  color: ${Colors.textWhite}; /* Tailwind text-gray-300 */
  transition: color 0.3s;

  &:hover {
    color: ${Colors.textWhite}; /* Tailwind hover:text-white */
  }

  svg {
    height: 2.5rem; /* Tailwind h-10 */
    width: 2.5rem; /* Tailwind w-10 */
  }
`;

const Divider = styled.div`
  margin-top: 2rem; /* Tailwind mt-8 */
  padding-top: 2rem; /* Tailwind pt-8 */
  border-top: 1px solid ${Colors.tertiary}; /* Tailwind border-gray-700 */
  text-align: center;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterGrid>
          <Section>
            <SectionTitle as="h3">Quick Links</SectionTitle>
            <List>
              <ListItem>
                <StyledLink href="/">Home</StyledLink>
              </ListItem>
              <ListItem>
                <StyledLink href="/about">About Us</StyledLink>
              </ListItem>
              <ListItem>
                <StyledLink href="/services">Services</StyledLink>
              </ListItem>
              <ListItem>
                <StyledLink href="/contact">Contact</StyledLink>
              </ListItem>
            </List>
          </Section>
          <Section>
            <SectionTitle as="h3">Contact Us</SectionTitle>
            <Address>
              <Text>Sabaneta-Antioquia-Colombia</Text>
              <Text>Valeria Garces Mejia</Text>
              <Text>Phone: (+57) 3217169444</Text>
              <Text>Email: valegarcesmejia@gmail.com</Text>
            </Address>
          </Section>
          <Section>
            <SectionTitle as="h3">Follow Us</SectionTitle>
            <div style={{ display: "flex", gap: "1rem" }}> 
              <IconLink
                href="https://www.instagram.com/valegarces0516/profilecard/?igsh=aTlrcHJ6amltcGp6"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram />
              </IconLink>
              <IconLink
                href="https://www.linkedin.com/in/juan-sebastian-amezquita-agredo-08738b249/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin />
              </IconLink>
            </div>
          </Section>
        </FooterGrid>
        <Divider>
          <Text>&copy; {new Date().getFullYear()} Valeria Garces Mejia Ingeniera de producción</Text>
        </Divider>
      </FooterContent>
    </FooterContainer>
  );
}
