import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function POST(request) {
    const { title, description } = await request.json();
    console.log("🚀 ~ file: route.js:8 ~ POST ~ title, description:", title, description);
    await connectMongoDB();
    await Topic.create({
        title,
        description
    });

    return NextResponse.json({
        success:true,
        message: "Topic Created"
    }, {status: 201})
};

export async function GET(){
    await connectMongoDB();
    const topics = await Topic.find();

    return NextResponse.json({
        success: true,
        count:topics.length,
        topics,
    },{status: 200})

};
export async function DELETE(req){
    const id = req.nextUrl.searchParams.get("id")
    console.log("🚀 ~ file: route.js:33 ~ DELETE ~ id:", id);
    await connectMongoDB();
    await Topic.findByIdAndDelete(id);

    return NextResponse.json({
        success: true,
        message: "Topic deleted",
    },{status: 200})

};