import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { ContactFormEmail } from '@/emails/contact-form';

// @ts-ignore
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message, type } = body;

    const emailHtml = ContactFormEmail({ name, email, message, type });

    // @ts-ignore
    const data = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: process.env.NOTIFICATION_EMAIL as string,
      subject: type === 'contact' ? 'Nouveau message de contact' : 'Nouvelle inscription à la liste d\'attente',
      html: emailHtml,
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Error sending email' }, { status: 500 });
  }
} 