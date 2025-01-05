import { NextResponse } from "next/server";

// In-memory storage for demo purposes
// In a real app, this would be a database
let bookings: any[] = [];

export async function POST(request: Request) {
  try {
    const booking = await request.json();
    const newBooking = {
      ...booking,
      id: Math.random().toString(36).substr(2, 9),
      createdAt: new Date().toISOString()
    };
    
    bookings.push(newBooking);
    
    return NextResponse.json({
      success: true,
      booking: newBooking
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create booking" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    return NextResponse.json({
      bookings: bookings
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch bookings" },
      { status: 500 }
    );
  }
}