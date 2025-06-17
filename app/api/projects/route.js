// app/api/projects/route.js
import dbConnect from "@/app/lib/mongoose";
import Project from "@/app/models/project";
import { authOptions } from "@/app/lib/authOptions";
import { getServerSession } from "next-auth";

export const POST = async (request) => {
  const { userId, projectName, package: packageData } = await request.json();

  try {
    await dbConnect();

    const newProject = new Project({
      userId,
      projectName,
      package: packageData,
      createdAt: new Date(),
    });

    await newProject.save();

    return new Response(JSON.stringify(newProject), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error creating project:", error);
    return new Response(JSON.stringify({ error: "Failed to create project" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.id) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    await dbConnect();
    
    const projects = await Project.find({ userId: session.user.id })
      .sort({ createdAt: -1 })
      .lean();
    
    return new Response(JSON.stringify(projects), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error("Failed to fetch projects:", error);
    return new Response(JSON.stringify({ error: "Server error" }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}