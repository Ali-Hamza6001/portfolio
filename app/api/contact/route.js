import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    // Validate inputs
    if (!name || !email || !message) {
      return Response.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Create transporter
    // For production, use environment variables for email configuration
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || "smtp.gmail.com",
      port: parseInt(process.env.EMAIL_PORT || "587"),
      secure: process.env.EMAIL_SECURE === "true", // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email options
    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background-color: #f9f9f9;
              }
              .header {
                background: linear-gradient(135deg, #00d2ff 0%, #3a7bd5 50%, #9013fe 100%);
                color: white;
                padding: 20px;
                text-align: center;
                border-radius: 8px 8px 0 0;
              }
              .content {
                background: white;
                padding: 30px;
                border-radius: 0 0 8px 8px;
              }
              .field {
                margin-bottom: 20px;
              }
              .field label {
                font-weight: bold;
                color: #555;
                display: block;
                margin-bottom: 5px;
              }
              .field-content {
                padding: 10px;
                background-color: #f5f5f5;
                border-left: 3px solid #00d2ff;
              }
              .message-content {
                white-space: pre-wrap;
                word-wrap: break-word;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>New Contact Form Submission</h1>
              </div>
              <div class="content">
                <div class="field">
                  <label>Name:</label>
                  <div class="field-content">${name}</div>
                </div>
                <div class="field">
                  <label>Email:</label>
                  <div class="field-content">${email}</div>
                </div>
                <div class="field">
                  <label>Message:</label>
                  <div class="field-content message-content">${message}</div>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}

Message:
${message}
      `,
    };

    // If credentials are not set, log the message instead (for development)
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.log("📧 Email Configuration Missing - Message Details:");
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Message:", message);
      
      return Response.json(
        { 
          success: true, 
          message: "Message received (development mode - check console)" 
        },
        { status: 200 }
      );
    }

    // Send email
    await transporter.sendMail(mailOptions);

    return Response.json(
      { success: true, message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return Response.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
