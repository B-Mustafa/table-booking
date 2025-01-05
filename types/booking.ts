export interface Booking {
  id: string;
  date: string;
  time: string;
  guests: number;
  name: string;
  email: string;
  phone: string;
  createdAt?: string;
}

export interface BookingFormData {
  date: Date;
  time: string;
  guests: string;
  name: string;
  email: string;
  phone: string;
}