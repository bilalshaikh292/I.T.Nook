import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, 
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASS,
    },
  });
  
  export const mailer =  async (name,email,contact,message) => {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: '"I.T.Nook Computer Solution" <itnook2002@gmail.com>', // sender address
      to: "bilalkhxn292@gmail.com", // list of receivers
      subject: "New Inquiry", // Subject line
      text: `Name: ${name}\nEmail: ${email}\nContact: ${contact}\nMessage: ${message}`, // plain text body
      //html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Contact:</strong> ${contact}</p><p><strong>Message:</strong> ${message}</p>` // html body
    });
  
    console.log("Message sent: %s", info.messageId);
    // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
  }

 