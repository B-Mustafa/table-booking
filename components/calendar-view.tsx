"use client";

import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import { format } from "date-fns";
import { TimeSlotPicker } from "./time-slot-picker";

interface CalendarViewProps {
  onDateTimeSelect: (date: Date, time: string) => void;
}

export function CalendarView({ onDateTimeSelect }: CalendarViewProps) {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>();

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    if (selectedDate) {
      onDateTimeSelect(selectedDate, time);
    }
  };

  return (
    <Card className="p-6 bg-white/95 backdrop-blur-md">
      <div className="space-y-6">
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={setSelectedDate}
          className="rounded-md border"
          disabled={(date) => date < new Date()}
        />
        
        {selectedDate && (
          <TimeSlotPicker
            date={selectedDate}
            selectedTime={selectedTime}
            onTimeSelect={handleTimeSelect}
          />
        )}
      </div>
    </Card>
  );
}