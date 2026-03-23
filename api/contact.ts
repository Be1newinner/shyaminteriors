import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { email, name, comment } = await req.json();
    if (!email || !name || !comment) {
      return Response.json(
        { error: "All fields are required" },
        { status: 400 },
      );
    }


    // nodemailer module implementation
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Shyam Interiors" ${process.env.SMTP_USER}`,
      to: process.env.SMTP_USER,
      subject: "Shyam Interiors Quote Request",
      html: `
        <div>
          <h1>Hello</h1>
          <p>Name: ${name}</p>
          <p>Email: ${email}</p>
          <p>Comment: ${comment}</p>
        </div>
      `,
    });

    return Response.json(
      {
        message: "Contact form submitted successfully",
        data: {
          email,
          name,
          comment,
        },
      },
      { status: 200 },
    );
  } catch (error) {
    console.log(error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
