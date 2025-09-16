import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

interface Params {
  params: Promise<{ appId: string }>;
}

export const GET = async (req: Request, { params }: Params) => {
  const { appId } = await params;
  if (!appId) {
    return NextResponse.json(
      { message: "App ID is required", success: false },
      { status: 400 }
    );
  }
  try {
    const reviews = await prisma.review.findMany({
      where: { appId },
      include: { user: true },
    });
    if (!reviews.length) {
      return NextResponse.json(
        { message: "No reviews found", success: false },
        { status: 404 }
      );
    }
    return NextResponse.json({ reviews, success: true }, { status: 200 });
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return NextResponse.json(
      { message: "Error fetching reviews", success: false },
      { status: 500 }
    );
  }
};

export const POST = async (req: Request, { params }: Params) => {
  const { appId } = await params;
  const { rating, review, userId } = await req.json();
  if (!appId || !rating || !review || !userId) {
    return NextResponse.json(
      { message: "Missing required fields", success: false },
      { status: 400 }
    );
  }
  return new Response("Hello, Next.js!", { status: 200 });
};
