import { motion } from "framer-motion";
import { ChevronDown, MapPin, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { DatePicker } from "@/components/DatePicker";
import { useNavigate } from "react-router-dom";
import { BookingForm } from "@/components/BookingForm";

export const Booking = () => {
  const navigate = useNavigate();
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [bookingData, setBookingData] = useState<any>(null);

    const handleFormSubmit = (data: any) => {
        setBookingData(data);
        setIsFormSubmitted(true);
    };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <motion.div
        className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md" 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        >
        {!isFormSubmitted ? (
            <BookingForm onSubmit={handleFormSubmit} />
        ) : (
            <div>
                <h2 className="text-2xl font-bold mb-4">Booking Confirmation</h2>   
                <p className="mb-2">Thank you for your booking, {bookingData.name}!</p>
                <p className="mb-2">We have received your booking for {bookingData.destination} on {bookingData.date} for {bookingData.guests} guest(s).</p>
                <p className="mb-4">A confirmation email has been sent to {bookingData.email}.</p>
                <Button variant="primary" onClick={() => navigate("/")}>
                    Back to Home
                </Button>
            </div>
        )}
      </motion.div>
    </div>
  );
}
