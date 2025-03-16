import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { ContactFormEmail } from '@/emails/contact-form';
import { render } from '@react-email/render';

// Création d'une instance Resend avec une clé API
const resendApiKey = process.env.RESEND_API_KEY || '';
const resend = new Resend(resendApiKey);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message, type } = body;

    // Rendu de l'email et attente de la résolution de la promesse
    const emailHtml = await render(ContactFormEmail({ name, email, message, type }));

    const data = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: ['pierremarie.fevelat@gmail.com'],
      subject: type === 'waitlist' ? 'Nouvelle inscription à la liste d\'attente' : 'Nouveau message de contact',
      html: emailHtml,
      replyTo: email
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
} 