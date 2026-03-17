import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, phone, city, bhk, rooms, selectedPackage, comment } =
      await req.json();

    if (!name || (!email && !phone)) {
      return Response.json(
        { error: "Name and at least one contact method (Email or Phone) are required" },
        { status: 400 }
      );
    }

    // Format rooms data for the email
    const roomsDetails = Object.entries(rooms || {})
      .map(([room, count]) => `${room}: ${count}`)
      .join(", ");

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "ak5884771@gmail.com",
        pass: "fvmf isai vkgs rpwn",
      },
    });

    const emailHtml = `
      <div style="font-family: sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
        <h2 style="color: #ef4444; border-bottom: 2px solid #ef4444; padding-bottom: 10px;">New Interior Quote Request</h2>
        
        <div style="margin-bottom: 20px;">
          <h3 style="margin-bottom: 5px;">Client Information</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email || "N/A"}</p>
          <p><strong>Phone:</strong> +91 ${phone || "N/A"}</p>
          <p><strong>City:</strong> ${city || "N/A"}</p>
        </div>

        <div style="background-color: #f9f9f9; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
          <h3 style="margin-top: 0; margin-bottom: 10px;">Calculation Details</h3>
          <p><strong>Configuration:</strong> ${bhk || "N/A"}</p>
          <p><strong>Package selected:</strong> ${selectedPackage || "N/A"}</p>
          <p><strong>Rooms breakdown:</strong> ${roomsDetails || "N/A"}</p>
        </div>

        ${
          comment
            ? `
        <div style="margin-bottom: 20px;">
          <h3 style="margin-bottom: 5px;">Additional Comments</h3>
          <p>${comment}</p>
        </div>`
            : ""
        }

        <hr style="border: 0; border-top: 1px solid #eee;" />
        <p style="font-size: 12px; color: #999; text-align: center;">
          This request was sent from the Shyam Interiors Interior Cost Calculator.
        </p>
      </div>
    `;

    await transporter.sendMail({
      from: `"Shyam Interiors" <ak5884771@gmail.com>`,
      to: "choursiyauday@gmail.com",
      subject: `New Interior Project Inquiry - ${name}`,
      html: emailHtml,
    });

    return Response.json(
      {
        message: "Quote request submitted successfully",
        data: { name, email, phone },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("API Error:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
