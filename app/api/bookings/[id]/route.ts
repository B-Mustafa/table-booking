import { NextResponse } from "next/server";

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    
    // In a real app, this would delete from a database
    // For demo, we'll just return success
    
    return NextResponse.json({
      success: true,
      message: `Booking ${id} deleted successfully`
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete booking" },
      { status: 500 }
    );
  }
}