import { NextResponse } from "next/server";

import { sendSchema } from "@/schema/send.schema";
import { transporter } from "@/config/nodemailer.config";
import { ContactTemplate } from "@/template/contact.templete";

export const POST = async (req: Request) => {
  const { name, email, message } = await req.json();

  const isDataValid = sendSchema.safeParse({ name, email, message });

  if (!isDataValid.success) {
    return NextResponse.json(
      { message: "Invalid data!", success: false },
      { status: 400 }
    );
  }
  const template = ContactTemplate({ name, email, message });
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.TO_MAIL,
      subject: `ShanHub Contact Form - Message from ${name}`,
      html: template,
    });
    return NextResponse.json(
      { message: "Success!", success: true },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Error sending email!", success: false },
      { status: 500 }
    );
  }
};
