'use client'

import { useState } from 'react'
import styled from 'styled-components'
import emailjs from 'emailjs-com'
import Colors from '@/ui/colors/colors';
import Image from 'next/image';

// Estilos con styled-components
const Container = styled.div`
  min-height: 100vh;
  padding: 3rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1000px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (min-width: 1024px) {
    text-align: left;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
`;

const Subtitle = styled.p`
  margin-top: 1rem;
  font-size: 1.125rem;
  color: ${Colors.textBlack};
`;

const FormContainer = styled.div`
  background-color: ${Colors.primary};
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const FormTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: ${Colors.textBlack};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Label = styled.label`
  font-size: 0.875rem;
  color: ${Colors.textBlack};
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border-radius: 0.5rem;
  background-color: ${Colors.tertiary};
  color: white;
  resize: none;
  &:focus {
    outline: none;
    border-color: ${Colors.primary};
    box-shadow: 0 0 0 2px rgba(248, 214, 151, 0.5);
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border-radius: 0.5rem;
  background-color: ${Colors.tertiary};
  color: white;
  resize: none;
  &:focus {
    outline: none;
    border-color: ${Colors.primary};
    box-shadow: 0 0 0 2px rgba(248, 214, 151, 0.5);
  }
`;

const Button = styled.button`
  width: 100%;
  background-color: ${Colors.tertiary};
  color: white;
  padding: 0.75rem;
  border-radius: 9999px;
  font-weight: 600;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #9a9a9a;
    transition: background-color 0.3s ease;
  }
`;

const Message = styled.p`
  margin-top: 1rem;
  font-size: 1rem;
  font-weight: 500;
`;

const SuccessMessage = styled(Message)`
  color: #10b981;
`;

const ErrorMessage = styled(Message)`
  color: #ef4444;
`;

const ImageComponent = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: end;

    @media (max-width: 768px) {
        width: 100%; 
        height: auto;
        padding: 20px;
    }
`;

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(false)
    setSuccess(false)

    const templateParams = { name, email, message }

    try {
      await emailjs.send(
        'service_6ducez8',
        'template_rnxj60m',
        templateParams,
        'CZhDtodWEdXPFWQca'
      )
      setSuccess(true)
    } catch (error) {
      console.error('Error enviando el mensaje:', error)
      setError(true)
    } finally {
      setLoading(false)
      setName('')
      setEmail('')
      setMessage('')
    }
  }

  return (
    <Container>
      <Wrapper>
        <TextContainer>
          <ImageComponent>
            <Image src={'/images/ProfileImage.png'} alt="profile" width={300} height={400} />
          </ImageComponent>
          <Title>Contact me</Title>
          <Subtitle>Hello! I'm here for you. If you'd like to reach out, feel free to send me an email, and I'll get back to you as soon as possible.</Subtitle>
        </TextContainer>
        <FormContainer>
          <FormTitle>Send me a message</FormTitle>
          <Form onSubmit={handleSubmit}>
            <div>
              <Label htmlFor="name">Name</Label>
              <Input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" rows={4} value={message} onChange={(e) => setMessage(e.target.value)} required />
            </div>
            <Button type="submit" disabled={loading}>{loading ? 'Sending...' : 'Send Message'}</Button>
          </Form>
          {success && <SuccessMessage>Message sent successfully!</SuccessMessage>}
          {error && <ErrorMessage>Failed to send message. Please try again.</ErrorMessage>}
        </FormContainer>
      </Wrapper>
    </Container>
  )
}