import { connectDB } from "@/lib/db";
import Order from "@/models/Order";

export async function POST(req: Request) {
  await connectDB();
  const body = await req.json();
  const order = await Order.create(body);
  return Response.json(order);
}

export async function GET() {
  await connectDB();
  const orders = await Order.find();
  return Response.json(orders);
}