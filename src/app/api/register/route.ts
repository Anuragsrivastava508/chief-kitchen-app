import { connectDB } from "@/lib/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  await connectDB();

  const body = await req.json();

  const { name, email, password } = body;

  const userExist = await User.findOne({ email });

  if (userExist) {
    return Response.json({ error: "User already exists" }, { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashedPassword
  });

  return Response.json({
    message: "User registered successfully",
    user
  });
}