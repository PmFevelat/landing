import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import ContactFormEmail from '@/emails/contact-form';
import React from 'react';

// Création d'une instance Resend avec une clé API
const resendApiKey = process.env.RESEND_API_KEY || '';
const notificationEmail = process.env.NOTIFICATION_EMAIL || 'pierremarie.fevelat@gmail.com';
const resend = new Resend(resendApiKey);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message, type } = body;

    // Création du composant React Email
    const emailComponent = React.createElement(ContactFormEmail, {
      name,
      email,
      message,
      type
    });

    const data = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: [notificationEmail],
      subject: type === 'waitlist' ? 'Nouvelle inscription à la liste d\'attente' : 'Nouveau message de contact',
      react: emailComponent,
      replyTo: email
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
} 