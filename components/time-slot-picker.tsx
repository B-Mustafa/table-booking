"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

interface TimeSlotPickerProps {
  date: Date;
  selectedTime?: string;
  onTimeSelect: (time: string) => void;
}

export function TimeSlotPicker({
  date,
  selectedTime,
  onTimeSelect,
}: TimeSlotPickerProps) {
  const [availableSlots, setAvailableSlots] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAvailableSlots = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `/api/availability?date=${format(date, "yyyy-MM-dd")}`
        );
        if (response.ok) {
          const data = await response.json();
          setAvailableSlots(data.availableSlots);
        }
      } catch (error) {
        console.error("Error fetching available slots:", error);
        setAvailableSlots([
          "11:00", "11:30", "12:00", "12:30", "13:00", "13:30",
          "14:00", "14:30", "15:00", "15:30", "16:00", "16:30",
          "17:00", "17:30", "18:00", "18:30", "19:00", "19:30",
          "20:00", "20:30", "21:00"
        ]);
      }
      setLoading(false);
    };

    fetchAvailableSlots();
  }, [date]);

  if (loading) {
    return (
      <div className="text-center py-4 text-lg text-muted-foreground">
        Loading available times...
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 gap-3">
      {availableSlots.map((time) => (
        <Button
          key={time}
          variant={selectedTime === time ? "default" : "outline"}
          className={cn(
            "w-full py-6 text-lg",
            selectedTime === time && "bg-primary text-primary-foreground"
          )}
          onClick={() => onTimeSelect(time)}
        >
          {time}
        </Button>
      ))}
    </div>
  );
}