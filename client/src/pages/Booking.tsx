import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useLocation } from "wouter";
import { BookingForm } from "@/components/BookingForm";
import { format } from "date-fns";

export default function Booking() {
  const [, setLocation] = useLocation();
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [bookingData, setBookingData] = useState<any>(null);

  const queryParams = new URLSearchParams(window.location.search);
  const initialDestination = queryParams.get("destination") || "";

  const handleFormSubmit = (data: any) => {
    setBookingData(data);
    setIsFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center p-4">
      <motion.div
        className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-md"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {!isFormSubmitted ? (
          <BookingForm onSubmit={handleFormSubmit} initialDestination={initialDestination} />
        ) : (
          <div className="text-gray-900">
            <h2 className="text-3xl font-bold mb-6 text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
              Booking Confirmation
            </h2>
            <div className="space-y-4 mb-8">
              <p className="text-lg">
                Thank you for your booking, <span className="font-semibold">{bookingData.name}</span>!
              </p>
              <p className="leading-relaxed">
                We have received your booking for <span className="font-semibold text-accent-foreground bg-accent/20 px-1 rounded">{bookingData.destination}</span> on{" "}
                <span className="font-semibold">{format(bookingData.date, "MMMM do, yyyy")}</span> for{" "}
                <span className="font-semibold">{bookingData.guests}</span> guest(s).
              </p>
              <p className="text-sm text-gray-600">
                A confirmation email has been sent to <span className="italic">{bookingData.email}</span>.
              </p>
            </div>
            <Button
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
              onClick={() => setLocation("/")}
            >
              Back to Home
            </Button>
          </div>
        )}
      </motion.div>
    </div>
  );
}
