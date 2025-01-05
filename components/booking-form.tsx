"use client";

import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { CalendarView } from "@/components/calendar-view";
import { createBooking } from "@/lib/api";

const bookingSchema = z.object({
  date: z.date({
    required_error: "Please select a date",
  }),
  time: z.string({
    required_error: "Please select a time",
  }),
  guests: z.string().min(1, "Please select number of guests"),
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
});

interface BookingFormProps {
  onSuccess: (data: any) => void;
  onError: (error: string) => void;
}

export function BookingForm({ onSuccess, onError }: BookingFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof bookingSchema>>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      guests: "2",
    },
  });

  const onSubmit = async (values: z.infer<typeof bookingSchema>) => {
    setIsSubmitting(true);
    try {
      const data = await createBooking(values);
      onSuccess(data);
      toast({
        title: "Success",
        description: "Your booking has been confirmed!",
      });
    } catch (error) {
      onError(error instanceof Error ? error.message : "Something went wrong");
      toast({
        title: "Error",
        description: "Failed to create booking",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDateTimeSelect = (date: Date, time: string) => {
    form.setValue("date", date);
    form.setValue("time", time);
  };

  return (
    <Card className="p-8 bg-white/95 backdrop-blur-md">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <h2 className="text-2xl font-semibold mb-6">Make a Reservation</h2>
          
          <CalendarView onDateTimeSelect={handleDateTimeSelect} />

          <FormField
            control={form.control}
            name="guests"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel className="text-lg">Number of Guests</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="text-lg">
                      <SelectValue placeholder="Select number of guests" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                      <SelectItem key={num} value={num.toString()}>
                        {num} {num === 1 ? "Guest" : "Guests"}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel className="text-lg">Full Name</FormLabel>
                  <FormControl>
                    <Input {...field} className="text-lg" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel className="text-lg">Email</FormLabel>
                  <FormControl>
                    <Input {...field} type="email" className="text-lg" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel className="text-lg">Phone Number</FormLabel>
                  <FormControl>
                    <Input {...field} type="tel" className="text-lg" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button
            type="submit"
            className="w-full text-lg py-6"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Booking..." : "Book Your Table"}
          </Button>
        </form>
      </Form>
    </Card>
  );
}