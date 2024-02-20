import mailer from "@sendgrid/mail";

export const POST = async (request: Request) => {
  const { email, message } = await request.json();

  mailer.setApiKey(process.env.SENDGRID_API_KEY!);

  const text = `${email} just sent you a message!\n\n"${message}"`;

  const msg = {
    to: "info@brock.software",
    from: "bryant@brock.software",
    subject: "New Message!",
    text,
    html: `<p>${text.replace(/\n/g, "<br>")}</p>`,
  };

  try {
    mailer.send(msg);

    return new Response("OK", { status: 200 });
  } catch (e: any) {
    return new Response(e.message, { status: 500 });
  }
};
