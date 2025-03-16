import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { ContactFormEmail } from '@/emails/contact-form';
import { render } from '@react-email/render';

// @ts-expect-error - Resend types are not available
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message, type } = body;

    // @ts-expect-error - Email component types are not properly recognized
    const emailHtml = render(ContactFormEmail({ name, email, message }));

    const data = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: ['pierremarie.fevelat@gmail.com'],
      subject: type === 'waitlist' ? 'Nouvelle inscription à la liste d\'attente' : 'Nouveau message de contact',
      html: emailHtml,
      reply_to: email
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
} 