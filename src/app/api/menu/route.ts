import { connectDB } from "@/lib/db";
import Menu from "@/models/Menu";

export async function GET() {
  await connectDB();
  const menu = await Menu.find();
  return Response.json(menu);
}

export async function POST(req: Request) {
  await connectDB();
  const body = await req.json();
  const item = await Menu.create(body);
  return Response.json(item);
}