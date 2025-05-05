// export const runtime = 'nodejs';

// import { NextRequest, NextResponse } from 'next/server';

// // Define the shape of the incoming form data
// type ContactForm = {
//   name: string;
//   email: string;
//   phone: string;
//   description: string;
// };

// export function GET() {
//   return NextResponse.json({ ok: true });
// }

// // POST handler for the /api/contact route
// export async function POST(req: NextRequest) {
//   try {
//     // Parse and validate request body
//     const { name, email, phone, description } =
//       (await req.json()) as ContactForm;
//     if (!name || !email || !phone || !description) {
//       return NextResponse.json(
//         { success: false, error: 'Missing required fields' },
//         { status: 400 },
//       );
//     }

//     // Read SMTP credentials from environment
//     const user = process.env.GMAIL_USER;
//     const pass = process.env.GMAIL_APP_PASS;
//     if (!user || !pass) {
//       throw new Error('Missing GMAIL_USER or GMAIL_APP_PASS in environment');
//     }

//     // Dynamic import for nodemailer to avoid type/lint issues
//     // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
//     const nodemailer = (await import(
//       'nodemailer'
//     )) as typeof import('nodemailer');

//     // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
//     const transporter = nodemailer.createTransport({
//       host: 'smtp.gmail.com',
//       //   host: 'smtp-relay.gmail.com',
//       port: 587,
//       secure: false,
//       auth: { user, pass },
//     });

//     // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
//     await transporter.sendMail({
//       from: `${name} <${email}>`,
//       to: 'finance@lebiga.nl', // Change to your receiving address
//       subject: `New enquiry from ${name}`,
//       text: description,
//     });

//     // Return success response
//     return NextResponse.json({ success: true });
//   } catch (err: unknown) {
//     console.error('Contact form error:', err);
//     const message = err instanceof Error ? err.message : 'Unknown error';
//     return NextResponse.json(
//       { success: false, error: message },
//       { status: 500 },
//     );
//   }
// }

// // src/app/api/contact/route.ts
// import { google } from 'googleapis';
// import nodemailer from 'nodemailer';
// import { NextRequest, NextResponse } from 'next/server';

// // pull in your OAuth2 creds
// const {
//   GMAIL_USER,
//   GOOGLE_CLIENT_ID,
//   GOOGLE_CLIENT_SECRET,
//   GOOGLE_REFRESH_TOKEN,
// } = process.env;

// // sanity‐check env vars at startup
// if (
//   !GMAIL_USER ||
//   !GOOGLE_CLIENT_ID ||
//   !GOOGLE_CLIENT_SECRET ||
//   !GOOGLE_REFRESH_TOKEN
// ) {
//   throw new Error(
//     'Missing one of GMAIL_USER, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET or GOOGLE_REFRESH_TOKEN in env',
//   );
// }

// // set up the OAuth2 client
// const oAuth2Client = new google.auth.OAuth2(
//   GOOGLE_CLIENT_ID,
//   GOOGLE_CLIENT_SECRET,
//   'https://developers.google.com/oauthplayground', // must match your OAuth client settings
// );
// oAuth2Client.setCredentials({ refresh_token: GOOGLE_REFRESH_TOKEN });

// async function createTransporter() {
//   // fetch a fresh access token
//   const accessTokenResponse = await oAuth2Client.getAccessToken();
//   const accessToken = accessTokenResponse.token;
//   if (!accessToken) {
//     throw new Error('Failed to retrieve access token');
//   }

//   // configure Nodemailer to use OAuth2
//   return nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       type: 'OAuth2',
//       user: GMAIL_USER,
//       clientId: GOOGLE_CLIENT_ID,
//       clientSecret: GOOGLE_CLIENT_SECRET,
//       refreshToken: GOOGLE_REFRESH_TOKEN,
//       accessToken,
//     },
//   });
// }

// // define the shape of your JSON body
// type ContactForm = {
//   name: string;
//   email: string;
//   phone: string;
//   description: string;
// };

// // optional GET for smoke‐testing
// export function GET() {
//   return NextResponse.json({ ok: true });
// }

// export async function POST(req: NextRequest) {
//   try {
//     const data = (await req.json()) as ContactForm;
//     const { name, email, phone, description } = data;

//     // basic validation
//     if (!name || !email || !phone || !description) {
//       return NextResponse.json(
//         { success: false, error: 'Missing required fields' },
//         { status: 400 },
//       );
//     }

//     // build and send the message
//     const transporter = await createTransporter();
//     await transporter.sendMail({
//       from: `${name} <${email}>`,
//       to: GMAIL_USER, // or any recipient you prefer
//       subject: `New enquiry from ${name}`,
//       text: `
// Name: ${name}
// Email: ${email}
// Phone: ${phone}

// Message:
// ${description}
//       `.trim(),
//     });

//     return NextResponse.json({ success: true });
//   } catch (err: any) {
//     console.error('Contact form error:', err);
//     const errorMessage = err instanceof Error ? err.message : 'Unknown error';
//     return NextResponse.json(
//       { success: false, error: errorMessage },
//       { status: 500 },
//     );
//   }
// }

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
};

// optional GET for quick smoke-test
export function GET() {
  return NextResponse.json({ ok: true });
}

export async function POST(req: NextRequest) {
  try {
    const data = (await req.json()) as ContactForm;
    const { name, email, phone, description } = data;

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

Message:
${description}
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
