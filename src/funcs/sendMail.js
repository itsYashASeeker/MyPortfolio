// import { render } from "@react-email/render";
// import { nodemailer } from "nodemailer";
// const nodemailer = require("nodemailer");
import axios from "axios";
import { Resend } from "resend";
// import { Email } from './email';

export const sendMail = async (subject, body, senderEmail) => {
  try {
    await axios
      .post("http://localhost:3000/y/u/send", {
        subjectE: subject,
        bodyE: body,
        sendEmail: senderEmail,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
    // const resend = new Resend(import.meta.env.VITE_MAIL_PASS);
    // await resend.emails.send({
    //   from: "yashchauhan.coder@gmail.com",
    //   to: "yashchauhan.coder@gmail.com",
    //   subject: subject,
    //   body: body,
    //   mode: "no-cors",
    // });
  } catch (error) {
    console.log(error);
  }

  //   console.log(subject);
  // const transporter = nodemailer.createTransport({
  //     host: 'smtp.forwardemail.net',
  //     port: 465,
  //     secure: true,
  //     auth: {
  //       user: 'yashchauhan.coder@gmail.com',
  //       pass: import.meta.env.VITE_MAIL_PASS,
  //     },
  //   });

  // //   const emailHtml = render(<Email url="https://example.com" />);

  //   const options = {
  //     from: 'yashchauhan.coder@gmail.com',
  //     to: 'yashchauhan.coder@gmail.com',
  //     subject: subject,
  //     body: body,
  //   };

  //   await transporter.sendMail(options);
};
