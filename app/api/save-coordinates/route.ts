import { NextRequest, NextResponse } from "next/server";

export default function POST(req: NextRequest) {
  try {

    return NextResponse.json(
      {
        message: "successfully saved coordinates",
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log("error in save coordiantes route");
    console.log(error);
    return NextResponse.json(
      {
        message: "failed to save coordinates",
        success: false,
      },
      { status: 400 }
    );
  }
}
