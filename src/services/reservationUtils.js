import { format } from "date-fns";

export function formatReservationDate(date) {
  return date ? format(date, "EEEE, MMMM d") : "Select Date";
}

export function getReservationSummary(form) {
  return {
    date: form.date ? format(form.date, "MMMM d") : "Select Date",
    time: form.time || "Select time",
    diners: form.diners ? `${form.diners} Diners` : "No. of Diners",
    occasion: form.occasion || "Occasion",
    seating: form.seating,
  };
}

export function validateStepOne(form) {
  const errors = {};

  if (!form.date) errors.date = "Date required";
  if (!form.occasion) errors.occasion = "Occasion required";
  if (!form.diners) errors.diners = "Number of diners required";
  if (!form.time) errors.time = "Time required";

  return errors;
}

export function validateStepTwo(form) {
  const errors = {};

  if (!form.firstName.trim()) errors.firstName = "First name required";
  if (!form.lastName.trim()) errors.lastName = "Last name required";
  if (!form.email.trim()) errors.email = "Email required";
  if (!form.phone.trim()) errors.phone = "Phone number required";

  if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) {
    errors.email = "Enter a valid email";
  }

  if (!form.agree) errors.agree = "You must agree to continue";

  return errors;
}