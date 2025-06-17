// app/api/auth/user/route.js
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/authOptions";
import dbConnect from "@/app/lib/mongoose";
import User from "@/app/models/User";

export async function GET() {
  const session = await getServerSession(authOptions);
  
  if (!session) {
    return new Response(JSON.stringify({ user: null }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  await dbConnect();
  const user = await User.findById(session.user.id).select('-password');
  
  return new Response(JSON.stringify({ user }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}