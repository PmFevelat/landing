import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Row,
  Column,
  Heading,
  Text,
  Hr,
  Link,
} from '@react-email/components';
import * as React from 'react';

interface ContactFormEmailProps {
  name: string;
  email: string;
  message: string;
  type: 'contact' | 'waitlist';
}

export const ContactFormEmail: React.FC<ContactFormEmailProps> = ({
  name,
  email,
  message,
  type,
}) => {
  const title = type === 'contact' ? 'Nouveau message de contact' : "Nouvelle inscription à la liste d'attente";

  return (
    <Html>
      <Head>
        <title>{title}</title>
      </Head>
      <Body style={main}>
        <Container style={container}>
          <Heading style={heading}>{title}</Heading>
          <Section style={boxInfos}>
            <Row>
              <Column>
                <Text style={paragraph}>
                  <strong>Nom:</strong> {name}
                </Text>
                <Text style={paragraph}>
                  <strong>Email:</strong>{' '}
                  <Link href={`mailto:${email}`} style={link}>
                    {email}
                  </Link>
                </Text>
                <Hr style={hr} />
                <Text style={paragraph}>
                  <strong>Message:</strong>
                </Text>
                <Text style={{ ...paragraph, whiteSpace: 'pre-wrap' }}>{message}</Text>
              </Column>
            </Row>
          </Section>
          <Text style={footer}>
            Cet email a été envoyé depuis le formulaire de {type === 'contact' ? 'contact' : "liste d'attente"} de votre site web.
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

// Styles
const main = {
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  backgroundColor: '#f9f9f9',
  padding: '20px',
};

const container = {
  maxWidth: '600px',
  margin: '0 auto',
  backgroundColor: '#ffffff',
  borderRadius: '8px',
  overflow: 'hidden',
  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
};

const heading = {
  color: '#333',
  fontSize: '24px',
  fontWeight: '600',
  padding: '24px 24px 0',
  margin: '0 0 16px',
};

const boxInfos = {
  backgroundColor: '#f6f9fc',
  borderRadius: '8px',
  margin: '0 24px 16px',
  padding: '16px',
};

const paragraph = {
  color: '#333',
  fontSize: '16px',
  lineHeight: '1.6',
  margin: '8px 0',
};

const hr = {
  border: 'none',
  borderTop: '1px solid #e6ebf1',
  margin: '16px 0',
};

const link = {
  color: '#3182ce',
  textDecoration: 'none',
};

const footer = {
  color: '#666',
  fontSize: '14px',
  textAlign: 'center' as const,
  padding: '0 24px 24px',
  margin: '16px 0 0',
};

export default ContactFormEmail; 