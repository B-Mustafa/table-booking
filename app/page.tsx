"use client";

import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { BookingForm } from "@/components/booking-form";
import { RestaurantInfo } from "@/components/restaurant-info";
import { BookingSummary } from "@/components/booking-summary";
import { Utensils } from "lucide-react";

export default function Home() {
  const [showSummary, setShowSummary] = useState(false);
  const [bookingData, setBookingData] = useState(null);
  const { toast } = useToast();

  const handleBookingSuccess = (data: any) => {
    setBookingData(data);
    setShowSummary(true);
    toast({
      title: "Booking Confirmed!",
      description: "Your table has been successfully reserved.",
    });
  };

  const handleBookingError = (error: string) => {
    toast({
      title: "Booking Failed",
      description: error,
      variant: "destructive",
    });
  };

  if (showSummary && bookingData) {
    return <BookingSummary booking={bookingData} onClose={() => setShowSummary(false)} />;
  }

  return (
    <div className="min-h-screen bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070')] bg-cover bg-center bg-fixed">
      <div className="min-h-screen bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col items-center mb-12">
            <div className="bg-white/10 p-6 rounded-full mb-6">
              <Utensils className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-center mb-4 text-white">La Belle Table</h1>
            <p className="text-xl text-white/80 text-center max-w-2xl">
              Experience exquisite dining in the heart of the city. Reserve your table for an unforgettable culinary journey.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <BookingForm onSuccess={handleBookingSuccess} onError={handleBookingError} />
            <div className="space-y-6">
              <RestaurantInfo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}