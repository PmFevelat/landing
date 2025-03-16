import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { ContactFormEmail } from '@/emails/contact-form';

// Création d'une instance Resend avec une clé API
const resendApiKey = process.env.RESEND_API_KEY || '';
const notificationEmail = process.env.NOTIFICATION_EMAIL || 'pierremarie.fevelat@gmail.com';
const resend = new Resend(resendApiKey);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message, type } = body;

    const data = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: [notificationEmail],
      subject: type === 'waitlist' ? 'Nouvelle inscription à la liste d\'attente' : 'Nouveau message de contact',
      react: ContactFormEmail({ name, email, message, type }),
      replyTo: email
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
} 