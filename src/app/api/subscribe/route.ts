import mailer from "@sendgrid/mail";

export const POST = async (request: Request) => {
  const { email } = await request.json();

  mailer.setApiKey(process.env.SENDGRID_API_KEY!);

  const text = `${email} just subscribed!`;

  const msg = {
    to: "info@brock.software",
    from: "bryant@brock.software",
    subject: "New subscriber!",
    text,
    html: `<p>${text}</p>`,
  };

  try {
    mailer.send(msg);

    return new Response("OK", { status: 200 });
  } catch (e: any) {
    return new Response(e.message, { status: 500 });
  }
};
