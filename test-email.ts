const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const res = await fetch("https://api.resend.com/emails", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${RESEND_API_KEY}`,
  },
  body: JSON.stringify({
    from: "Nerd <noreply@nerdapp.ai>",
    to: "fledwings9@gmail.com",
    subject: `Nuevo mensaje de contacto: Test`,
    html: "<h1>Test</h1>",
  }),
});

console.log(await res.json());
