"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Calendar, Clock, Users, User, Mail, Phone } from "lucide-react";

interface BookingSummaryProps {
  booking: {
    date: string;
    time: string;
    guests: number;
    name: string;
    email: string;
    phone: string;
  };
  onClose: () => void;
}

export function BookingSummary({ booking, onClose }: BookingSummaryProps) {
  return (
    <div className="min-h-screen bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070')] bg-cover bg-center bg-fixed">
      <div className="min-h-screen bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
        <Card className="max-w-2xl w-full p-12 bg-white/95 backdrop-blur-md">
          <div className="flex flex-col items-center text-center">
            <div className="bg-primary/10 p-6 rounded-full mb-6">
              <CheckCircle2 className="h-16 w-16 text-primary" />
            </div>
            <h2 className="text-4xl font-bold mb-4">Booking Confirmed!</h2>
            <p className="text-xl text-muted-foreground mb-12">
              Thank you for choosing La Belle Table. We look forward to serving you.
            </p>

            <div className="w-full space-y-8 mb-12">
              <div className="border-b pb-2">
                <h3 className="text-2xl font-semibold">Reservation Details</h3>
              </div>
              <div className="grid gap-6 text-left">
                <div className="flex items-center gap-4">
                  <Calendar className="h-6 w-6 text-primary" />
                  <div>
                    <div className="text-sm text-muted-foreground">Date</div>
                    <div className="text-lg font-medium">{booking.date}</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Clock className="h-6 w-6 text-primary" />
                  <div>
                    <div className="text-sm text-muted-foreground">Time</div>
                    <div className="text-lg font-medium">{booking.time}</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Users className="h-6 w-6 text-primary" />
                  <div>
                    <div className="text-sm text-muted-foreground">Guests</div>
                    <div className="text-lg font-medium">{booking.guests}</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <User className="h-6 w-6 text-primary" />
                  <div>
                    <div className="text-sm text-muted-foreground">Name</div>
                    <div className="text-lg font-medium">{booking.name}</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="h-6 w-6 text-primary" />
                  <div>
                    <div className="text-sm text-muted-foreground">Email</div>
                    <div className="text-lg font-medium">{booking.email}</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="h-6 w-6 text-primary" />
                  <div>
                    <div className="text-sm text-muted-foreground">Phone</div>
                    <div className="text-lg font-medium">{booking.phone}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4 w-full">
              <Button onClick={onClose} className="w-full text-lg py-6">
                Make Another Booking
              </Button>
              <Button variant="outline" className="w-full text-lg py-6">
                Download Confirmation
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}