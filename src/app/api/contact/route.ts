export const runtime = 'nodejs';

import { NextRequest, NextResponse } from 'next/server';

// Define the shape of the incoming form data
type ContactForm = {
  name: string;
  email: string;
  phone: string;
  description: string;
};

// POST handler for the /api/contact route
export async function POST(req: NextRequest) {
  try {
    // Parse and validate request body
    const { name, email, phone, description } =
      (await req.json()) as ContactForm;
    if (!name || !email || !phone || !description) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 },
      );
    }

    // Read SMTP credentials from environment
    const user = process.env.GMAIL_USER;
    const pass = process.env.GMAIL_APP_PASS;
    if (!user || !pass) {
      throw new Error('Missing GMAIL_USER or GMAIL_APP_PASS in environment');
    }

    // Dynamic import for nodemailer to avoid type/lint issues
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const nodemailer = (await import(
      'nodemailer'
    )) as typeof import('nodemailer');

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    const transporter = nodemailer.createTransport({
      host: 'smtp-relay.gmail.com',
      port: 587,
      secure: false,
      auth: { user, pass },
    });

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: 'finance@lebiga.nl', // Change to your receiving address
      subject: `New enquiry from ${name}`,
      text: description,
    });

    // Return success response
    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    console.error('Contact form error:', err);
    const message = err instanceof Error ? err.message : 'Unknown error';
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 },
    );
  }
}
