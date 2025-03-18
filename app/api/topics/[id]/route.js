import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  const { id } = params;
  console.log("🚀 ~ file: route.js:33 ~ DELETE ~ id:", id);
  const {newTitle: title, newDescription: description} = await req.json();
  await connectMongoDB();
  const topic = await Topic.findByIdAndUpdate(id,{ title, description});

  return NextResponse.json(
    {
      success: true,
      message: "Topic Updated",
      topic
    },
    { status: 200 }
  );
}

export async function GET(req, { params }) {
  const { id } = params;
  await connectMongoDB();
  const topic = await Topic.findById(id);
  if(!topic){
    return NextResponse.json(
        {
          success: false,
          message: "Topic not Found"
        },
        { status: 404 }
      );
  }

  return NextResponse.json(
    {
      success: true,
      topic
    },
    { status: 200 }
  );
}
