import nodemailer from "nodemailer";

function getTransportOptions() {
  const smtpService = process.env.SMTP_SERVICE || "gmail";
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = Number(process.env.SMTP_PORT || 587);
  const smtpUser = process.env.SMTP_USER || "iamuzibaba@gmail.com";
  const smtpPass = process.env.SMTP_PASS;

  if (!smtpUser || !smtpPass) {
    return null;
  }

  if (smtpService) {
    return {
      service: smtpService,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    };
  }

  if (!smtpHost) {
    return null;
  }

  return {
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  };
}

export async function POST(request) {
  try {
    const { name, email, phone, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return Response.json(
        { error: "Please fill in all required contact fields." },
        { status: 400 }
      );
    }

    const transportOptions = getTransportOptions();

    if (!transportOptions) {
      return Response.json(
        {
          error:
            "Add SMTP_PASS in .env with your Gmail app password to enable the contact form.",
        },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport(transportOptions);
    const recipient = process.env.MAIL_TO || "iamuzibaba@gmail.com";
    const smtpUser = process.env.SMTP_USER || "iamuzibaba@gmail.com";

    await transporter.sendMail({
      from: smtpUser,
      to: recipient,
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "Not provided"}\nSubject: ${subject}\n\n${message}`,
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111827;">
          <h2>New portfolio message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br />")}</p>
        </div>
      `,
    });

    return Response.json({ ok: true });
  } catch (error) {
    return Response.json(
      {
        error:
          error instanceof Error ? error.message : "Failed to send the message.",
      },
      { status: 500 }
    );
  }
}
