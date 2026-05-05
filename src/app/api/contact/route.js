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
      html: `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width,initial-scale=1.0" /><title>New Message</title></head>
<body style="margin:0;padding:0;background:#0a0a0f;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0f;padding:40px 16px;">
    <tr><td align="center">
      <table width="100%" style="max-width:580px;">

        <!-- Header -->
        <tr><td style="padding-bottom:28px;text-align:center;">
          <p style="margin:0 0 6px;font-size:11px;letter-spacing:0.35em;text-transform:uppercase;color:#6b7280;">Portfolio</p>
          <p style="margin:0;font-size:22px;font-weight:600;color:#f9fafb;">Uzair Bashir</p>
        </td></tr>

        <!-- Card -->
        <tr><td style="background:linear-gradient(135deg,#13131a,#1a1a24);border:1px solid #2a2a3a;border-radius:24px;overflow:hidden;">

          <!-- Accent bar -->
          <tr><td style="height:3px;background:linear-gradient(90deg,#ff7b54,#37c7ff,#ff4d8d);font-size:0;line-height:0;">&nbsp;</td></tr>

          <!-- Body -->
          <tr><td style="padding:36px 36px 28px;">

            <!-- Kicker -->
            <p style="margin:0 0 20px;font-size:11px;letter-spacing:0.35em;text-transform:uppercase;color:#6b7280;">New message received</p>

            <!-- Subject -->
            <h1 style="margin:0 0 28px;font-size:22px;font-weight:600;color:#f9fafb;line-height:1.3;">${subject}</h1>

            <!-- Divider -->
            <div style="height:1px;background:#2a2a3a;margin-bottom:28px;"></div>

            <!-- Fields -->
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding-bottom:16px;">
                  <p style="margin:0 0 4px;font-size:10px;letter-spacing:0.3em;text-transform:uppercase;color:#6b7280;">From</p>
                  <p style="margin:0;font-size:15px;font-weight:600;color:#f9fafb;">${name}</p>
                </td>
              </tr>
              <tr>
                <td style="padding-bottom:16px;">
                  <p style="margin:0 0 4px;font-size:10px;letter-spacing:0.3em;text-transform:uppercase;color:#6b7280;">Email</p>
                  <a href="mailto:${email}" style="margin:0;font-size:15px;color:#37c7ff;text-decoration:none;">${email}</a>
                </td>
              </tr>
              ${phone ? `<tr><td style="padding-bottom:16px;"><p style="margin:0 0 4px;font-size:10px;letter-spacing:0.3em;text-transform:uppercase;color:#6b7280;">Phone</p><p style="margin:0;font-size:15px;color:#f9fafb;">${phone}</p></td></tr>` : ""}
            </table>

            <!-- Divider -->
            <div style="height:1px;background:#2a2a3a;margin:12px 0 24px;"></div>

            <!-- Message -->
            <p style="margin:0 0 10px;font-size:10px;letter-spacing:0.3em;text-transform:uppercase;color:#6b7280;">Message</p>
            <div style="background:#0f0f18;border:1px solid #2a2a3a;border-radius:14px;padding:20px 22px;">
              <p style="margin:0;font-size:15px;line-height:1.8;color:#d1d5db;">${message.replace(/\n/g, "<br />")}</p>
            </div>

            <!-- Reply CTA -->
            <div style="margin-top:28px;text-align:center;">
              <a href="mailto:${email}?subject=Re: ${encodeURIComponent(subject)}" style="display:inline-block;background:linear-gradient(135deg,#ff7b54,#ff4d8d);color:#fff;font-size:12px;font-weight:600;letter-spacing:0.2em;text-transform:uppercase;text-decoration:none;padding:13px 28px;border-radius:100px;">Reply to ${name}</a>
            </div>

          </td></tr>
        </table>

        <!-- Footer -->
        <tr><td style="padding-top:24px;text-align:center;">
          <p style="margin:0;font-size:11px;color:#374151;">Sent from your portfolio contact form &mdash; uzairbashir.netlify.app</p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`,
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
