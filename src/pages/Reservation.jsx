import { useMemo, useState } from "react";
import toast from "react-hot-toast";
import ReservationHero from "../reservation/ReservationHero";
import ReservationStepOne from "../reservation/ReservationStepOne";
import ReservationStepTwo from "../reservation/ReservationStepTwo";
import {
  INITIAL_RESERVATION_FORM,
} from "../services/reservationData";
import {
  getReservationSummary,
  validateStepOne,
  validateStepTwo,
} from "../services/reservationUtils";

export default function Reservation() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState(INITIAL_RESERVATION_FORM);
  const [errors, setErrors] = useState({});

  const summary = useMemo(() => getReservationSummary(form), [form]);

  function updateField(name, value) {
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  }

  function handleContinue() {
    const nextErrors = validateStepOne(form);

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      toast.error("Please complete the reservation details first.");
      return;
    }

    setErrors({});
    setStep(2);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleConfirmReservation() {
    const nextErrors = validateStepTwo(form);

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      toast.error("Please complete your contact information.");
      return;
    }

    setErrors({});
    toast.success("Reservation confirmed! Check your email.");
    console.log("Reservation payload:", form);

    window.scrollTo({ top: 0, behavior: "smooth" });

    setForm(INITIAL_RESERVATION_FORM);
    setStep(1);
  }

  return (
    <ReservationHero>
      {step === 1 ? (
        <ReservationStepOne
          form={form}
          errors={errors}
          updateField={updateField}
          onContinue={handleContinue}
        />
      ) : (
        <ReservationStepTwo
          form={form}
          errors={errors}
          summary={summary}
          updateField={updateField}
          onBack={() => setStep(1)}
          onConfirm={handleConfirmReservation}
        />
      )}
    </ReservationHero>
  );
}