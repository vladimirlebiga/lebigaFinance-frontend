// src/app/api/contact/route.ts
import { google } from 'googleapis';
import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';

// pull in your OAuth2 creds from .env.local
const {
  GMAIL_USER,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  GOOGLE_REFRESH_TOKEN,
} = process.env;

// sanity‐check on startup
if (
  !GMAIL_USER ||
  !GOOGLE_CLIENT_ID ||
  !GOOGLE_CLIENT_SECRET ||
  !GOOGLE_REFRESH_TOKEN
) {
  throw new Error(
    '🚨 Missing one of GMAIL_USER, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET or GOOGLE_REFRESH_TOKEN in env',
  );
}

// set up the OAuth2 client
const oAuth2Client = new google.auth.OAuth2(
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  'https://developers.google.com/oauthplayground', // must match what you whitelisted
);
oAuth2Client.setCredentials({ refresh_token: GOOGLE_REFRESH_TOKEN });

async function createTransporter() {
  // mint a fresh access token
  const { token: accessToken } = await oAuth2Client.getAccessToken();
  if (!accessToken) throw new Error('Failed to obtain access token');

  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: GMAIL_USER,
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      refreshToken: GOOGLE_REFRESH_TOKEN,
      accessToken,
    },
  });
}

// define the shape of your incoming JSON
type ContactForm = {
  name: string;
  email: string;
  phone: string;
  description: string;
  companyRegistration: boolean;
  taxReturns: boolean;
  accountingBookkeeping: boolean;
  financialPlanning: boolean;
  loansBusiness: boolean;
  legalContract: boolean;
  other: boolean;
};

// optional GET for quick smoke-test
export function GET() {
  return NextResponse.json({ ok: true });
}

export async function POST(req: NextRequest) {
  try {
    const data = (await req.json()) as ContactForm;
    const {
      name,
      email,
      phone,
      description,
      companyRegistration,
      taxReturns,
      accountingBookkeeping,
      financialPlanning,
      loansBusiness,
      legalContract,
      other,
    } = data;

    // simple validation
    if (!name || !email || !phone || !description) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 },
      );
    }

    const transporter = await createTransporter();
    await transporter.sendMail({
      from: `${name} <${email}>`,
      to: GMAIL_USER, // or wherever you want these to go
      subject: `New enquiry from ${name}`,
      text: `
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Company Registration: ${companyRegistration ? 'Yes' : 'No'}
      Tax Returns: ${taxReturns ? 'Yes' : 'No'}
      Accounting Bookkeeping: ${accountingBookkeeping ? 'Yes' : 'No'}
      Financial Planning: ${financialPlanning ? 'Yes' : 'No'}
      Loans Business: ${loansBusiness ? 'Yes' : 'No'}
      Legal Contract: ${legalContract ? 'Yes' : 'No'}
      Other: ${other ? 'Yes' : 'No'}
      Message: ${description}
      `.trim(),
    });

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error('Contact form error:', err);
    return NextResponse.json(
      {
        success: false,
        error: err instanceof Error ? err.message : 'Unknown error',
      },
      { status: 500 },
    );
  }
}
