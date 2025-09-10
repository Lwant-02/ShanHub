interface ContactTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const ContactTemplate = ({
  name,
  email,
  message,
}: ContactTemplateProps) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Form Submission - ShanHub</title>
      <style>
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f8fafc;
        }
        .container {
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          overflow: hidden;
        }
        .header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 30px;
          text-align: center;
        }
        .header h1 {
          margin: 0;
          font-size: 28px;
          font-weight: 700;
        }
        .header p {
          margin: 8px 0 0 0;
          opacity: 0.9;
          font-size: 16px;
        }
        .content {
          padding: 30px;
        }
        .field {
          margin-bottom: 24px;
          padding: 16px;
          background: #f8fafc;
          border-radius: 8px;
          border-left: 4px solid #667eea;
        }
        .field-label {
          font-weight: 600;
          color: #4a5568;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 8px;
        }
        .field-value {
          color: #2d3748;
          font-size: 16px;
          word-wrap: break-word;
        }
        .message-field {
          background: #f7fafc;
          border-left-color: #48bb78;
        }
        .message-field .field-value {
          white-space: pre-wrap;
          line-height: 1.7;
        }
        .footer {
          background: #f7fafc;
          padding: 20px 30px;
          text-align: center;
          border-top: 1px solid #e2e8f0;
        }
        .footer p {
          margin: 0;
          color: #718096;
          font-size: 14px;
        }
        .timestamp {
          color: #a0aec0;
          font-size: 12px;
          margin-top: 8px;
        }
        .highlight {
          color: #667eea;
          font-weight: 500;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>📧 New Contact Form Submission</h1>
          <p>Someone reached out through ShanHub contact form</p>
        </div>
        
        <div class="content">
          <div class="field">
            <div class="field-label">👤 Name</div>
            <div class="field-value"><span class="highlight">${name}</span></div>
          </div>
          
          <div class="field">
            <div class="field-label">📧 Email Address</div>
            <div class="field-value">
              <a href="mailto:${email}" style="color: #667eea; text-decoration: none;">
                ${email}
              </a>
            </div>
          </div>
          
          <div class="field message-field">
            <div class="field-label">💬 Message</div>
            <div class="field-value">${message}</div>
          </div>
        </div>
        
        <div class="footer">
          <p>This message was sent from the ShanHub contact form</p>
          <div class="timestamp">
            Received on ${new Date().toLocaleString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              timeZoneName: "short",
            })}
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
};
