export function validateStay(checkIn: string, checkOut: string) {
  if (!checkIn || !checkOut) return "Please select both arrival and departure dates.";
  if (checkOut <= checkIn) return "Departure must be after arrival.";
  return null;
}
