"use client";

import { Card } from "@/components/ui/card";
import { MapPin, Phone, Clock } from "lucide-react";

export function RestaurantInfo() {
  return (
    <Card className="p-8 bg-primary text-primary-foreground">
      <h2 className="text-2xl font-semibold mb-6">Restaurant Information</h2>
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <MapPin className="h-6 w-6" />
          <div>
            <h3 className="font-semibold">Location</h3>
            <p>123 Gourmet Street, Culinary District</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <Phone className="h-6 w-6" />
          <div>
            <h3 className="font-semibold">Contact</h3>
            <p>(555) 123-4567</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <Clock className="h-6 w-6" />
          <div>
            <h3 className="font-semibold">Hours</h3>
            <p>Monday - Friday: 11:00 AM - 10:00 PM</p>
            <p>Saturday - Sunday: 10:00 AM - 11:00 PM</p>
          </div>
        </div>
      </div>
    </Card>
  );
}