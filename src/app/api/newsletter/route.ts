export async function POST(req: Request) {
  const body = await req.json();
  console.log("Newsletter email:", body.email);

  return Response.json({ message: "Subscribed successfully" });
}
