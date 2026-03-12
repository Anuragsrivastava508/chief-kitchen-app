import { connectDB } from "@/lib/db";
import Reservation from "@/models/Reservation";

export async function POST(req: Request) {
  await connectDB();
  const body = await req.json();
  const reservation = await Reservation.create(body);
  return Response.json(reservation);
}