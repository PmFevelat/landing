type ContactFormEmailProps = {
  name: string;
  email: string;
  message: string;
  type: 'contact' | 'waitlist';
};

export const ContactFormEmail = ({
  name,
  email,
  message,
  type,
}: ContactFormEmailProps): string => {
  const title = type === 'contact' ? 'Nouveau message de contact' : "Nouvelle inscription à la liste d'attente";
  
  // Échapper le HTML dans le message pour éviter les problèmes de formatage
  const escapedMessage = message.replace(/</g, '&lt;').replace(/>/g, '&gt;');
  
  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <title>${title}</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; padding: 20px; background-color: #f9f9f9; margin: 0;">
  <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
    <tr>
      <td style="padding: 24px 24px 0;">
        <h1 style="color: #333; font-size: 24px; font-weight: 600; margin: 0 0 16px;">${title}</h1>
      </td>
    </tr>
    <tr>
      <td style="padding: 0 24px;">
        <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background-color: #f6f9fc; border-radius: 8px; margin: 16px 0; padding: 16px;">
          <tr>
            <td>
              <p style="color: #333; font-size: 16px; line-height: 1.6; margin: 8px 0;"><strong>Nom:</strong> ${name}</p>
              <p style="color: #333; font-size: 16px; line-height: 1.6; margin: 8px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #3182ce; text-decoration: none;">${email}</a></p>
              <hr style="border: none; border-top: 1px solid #e6ebf1; margin: 16px 0;" />
              <p style="color: #333; font-size: 16px; line-height: 1.6; margin: 8px 0;"><strong>Message:</strong></p>
              <p style="color: #333; font-size: 16px; line-height: 1.6; margin: 8px 0; white-space: pre-wrap;">${escapedMessage}</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td style="padding: 0 24px 24px; color: #666; font-size: 14px; text-align: center;">
        <p style="margin: 16px 0 0;">Cet email a été envoyé depuis le formulaire de ${type === 'contact' ? 'contact' : 'liste d\'attente'} de votre site web.</p>
      </td>
    </tr>
  </table>
</body>
</html>`;
};

export default ContactFormEmail; 