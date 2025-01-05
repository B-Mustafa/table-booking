// API utility functions for bookings
export async function createBooking(bookingData: any) {
  const response = await fetch('/api/bookings', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(bookingData),
  });
  
  if (!response.ok) {
    throw new Error('Failed to create booking');
  }
  
  return response.json();
}

export async function getBookings() {
  const response = await fetch('/api/bookings');
  
  if (!response.ok) {
    throw new Error('Failed to fetch bookings');
  }
  
  return response.json();
}

export async function deleteBooking(id: string) {
  const response = await fetch(`/api/bookings/${id}`, {
    method: 'DELETE',
  });
  
  if (!response.ok) {
    throw new Error('Failed to delete booking');
  }
  
  return response.json();
}