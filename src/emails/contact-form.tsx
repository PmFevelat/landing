import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Heading,
  Hr,
  Preview,
} from '@react-email/components';
import * as React from 'react';

interface ContactFormEmailProps {
  name: string;
  email: string;
  message: string;
  type: 'contact' | 'waitlist';
}

export const ContactFormEmail = ({
  name,
  email,
  message,
  type,
}: ContactFormEmailProps) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>${type === 'contact' ? 'Nouveau message de contact' : "Nouvelle inscription à la liste d'attente"}</title>
      </head>
      <body style="
        background-color: #ffffff;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        padding: 20px;
      ">
        <div style="
          max-width: 580px;
          margin: 0 auto;
          padding: 20px;
        ">
          <h1 style="
            color: #333;
            font-size: 24px;
            font-weight: 600;
            line-height: 1.4;
            margin: 16px 0;
          ">
            ${type === 'contact' ? 'Nouveau message de contact' : "Nouvelle inscription à la liste d'attente"}
          </h1>
          
          <div style="
            padding: 24px;
            background-color: #f6f9fc;
            border-radius: 12px;
          ">
            <p style="
              color: #333;
              font-size: 16px;
              line-height: 1.6;
              margin: 12px 0;
            ">
              <strong>Nom:</strong> ${name}
            </p>
            <p style="
              color: #333;
              font-size: 16px;
              line-height: 1.6;
              margin: 12px 0;
            ">
              <strong>Email:</strong> ${email}
            </p>
            <hr style="
              border-color: #e6ebf1;
              margin: 20px 0;
            "/>
            <p style="
              color: #333;
              font-size: 16px;
              line-height: 1.6;
              margin: 12px 0;
            ">
              <strong>Message:</strong>
            </p>
            <p style="
              color: #333;
              font-size: 16px;
              line-height: 1.6;
              margin: 12px 0;
            ">
              ${message}
            </p>
          </div>
        </div>
      </body>
    </html>
  `;
};

export default ContactFormEmail; 