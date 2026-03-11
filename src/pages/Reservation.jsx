import { useMemo, useRef, useState, useEffect } from "react";
import Lemon from "../assets/image.webp";
import {
  CalendarDays,
  ChevronDown,
  ChevronUp,
  Clock3,
  PartyPopper,
  Users,
  CircleAlert,
  UserRound,
  Mail,
  Phone,
} from "lucide-react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";

const DINER_OPTIONS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const OCCASION_OPTIONS = [
  "Birthday",
  "Anniversary",
  "Date Night",
  "Business Dinner",
  "Family Gathering",
  "Other",
];
const TIME_OPTIONS = [
  "12:00 pm",
  "1:00 pm",
  "2:00 pm",
  "3:00 pm",
  "4:00 pm",
  "5:00 pm",
  "6:00 pm",
  "7:00 pm",
  "8:00 pm",
  "9:00 pm",
];

function CustomSelect({
  label,
  value,
  placeholder,
  onChange,
  options,
  icon,
  error,
}) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={wrapperRef}>
      {label && (
        <label className="mb-2 block text-base md:text-lg font-medium text-white">
          {label}
        </label>
      )}

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className={`w-full rounded-xl bg-white px-5 py-4 md:py-5 text-left shadow-md transition flex items-center justify-between gap-4
          ${error ? "ring-2 ring-[#E8A47A]" : "ring-0"}
        `}
      >
        <div className="flex items-center gap-4 min-w-0">
          {icon && <span className="text-[#495E57] shrink-0">{icon}</span>}
          <span
            className={`truncate text-lg md:text-[1.1rem] font-semibold ${
              value ? "text-[#495E57]" : "text-[#667085]"
            }`}
          >
            {value || placeholder}
          </span>
        </div>

        <span className="text-[#495E57] shrink-0">
          {open ? <ChevronUp size={26} /> : <ChevronDown size={26} />}
        </span>
      </button>

      {open && (
        <div className="absolute z-40 mt-2 max-h-64 w-full overflow-auto rounded-xl border border-[#d8d8d8] bg-white shadow-xl">
          {options.map((option) => (
            <button
              key={String(option)}
              type="button"
              onClick={() => {
                onChange(option);
                setOpen(false);
              }}
              className="block w-full px-4 py-3 text-left text-[#495E57] hover:bg-[#F4CE14]/20 transition"
            >
              {option}
            </button>
          ))}
        </div>
      )}

      {error && (
        <p className="mt-2 flex items-center gap-2 text-sm text-[#E8A47A]">
          <CircleAlert size={16} />
          {error}
        </p>
      )}
    </div>
  );
}

function DatePickerField({ value, onChange, error }) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={wrapperRef}>
      <label className="mb-2 block text-base md:text-lg font-medium text-white">
        Date
      </label>

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className={`w-full rounded-xl bg-white px-5 py-4 md:py-5 text-left shadow-md transition flex items-center justify-between gap-4
          ${error ? "ring-2 ring-[#E8A47A]" : "ring-0"}
        `}
      >
        <div className="flex items-center gap-4 min-w-0">
          <CalendarDays size={28} className="text-[#495E57] shrink-0" />
          <span
            className={`truncate text-lg md:text-[1.1rem] font-semibold ${
              value ? "text-[#495E57]" : "text-[#667085]"
            }`}
          >
            {value ? format(value, "EEEE, MMMM d") : "Select Date"}
          </span>
        </div>

        <span className="text-[#495E57] shrink-0">
          {open ? <ChevronUp size={26} /> : <ChevronDown size={26} />}
        </span>
      </button>

      {open && (
        <div className="absolute z-50 mt-3 rounded-2xl bg-white p-4 shadow-2xl border border-[#e4e4e4]">
          <div className="reservation-calendar">
            <DayPicker
              mode="single"
              selected={value}
              onSelect={(day) => {
                onChange(day);
                setOpen(false);
              }}
              disabled={{ before: new Date() }}
            />
          </div>
        </div>
      )}

      {error && (
        <p className="mt-2 flex items-center gap-2 text-sm text-[#E8A47A]">
          <CircleAlert size={16} />
          {error}
        </p>
      )}
    </div>
  );
}

export default function Reservation() {
  const [step, setStep] = useState(1);
  const [confirmed, setConfirmed] = useState(false);

  const [form, setForm] = useState({
    seating: "Outdoor seating",
    date: null,
    diners: "",
    occasion: "",
    time: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    requests: "",
    agree: false,
  });

  const [errors, setErrors] = useState({});

  const reservationSummary = useMemo(() => {
    return {
      date: form.date ? format(form.date, "MMMM d") : "Select Date",
      time: form.time || "Select time",
      diners: form.diners ? `${form.diners} Diners` : "No. of Diners",
      occasion: form.occasion || "Occasion",
      seating: form.seating,
    };
  }, [form]);

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

  function validateStepOne() {
    const nextErrors = {};

    if (!form.date) nextErrors.date = "Date required";
    if (!form.diners) nextErrors.diners = "Number of diners required";
    if (!form.occasion) nextErrors.occasion = "Occasion required";
    if (!form.time) nextErrors.time = "Time required";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function validateStepTwo() {
    const nextErrors = {};

    if (!form.firstName.trim()) nextErrors.firstName = "First name required";
    if (!form.lastName.trim()) nextErrors.lastName = "Last name required";
    if (!form.email.trim()) nextErrors.email = "Email required";
    if (!form.phone.trim()) nextErrors.phone = "Phone number required";

    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) {
      nextErrors.email = "Enter a valid email";
    }

    if (!form.agree) nextErrors.agree = "You must agree to continue";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function handleReserveTable() {
    if (!validateStepOne()) return;
    setStep(2);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleConfirmReservation() {
    if (!validateStepTwo()) return;
    setConfirmed(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function resetReservation() {
    setStep(1);
    setConfirmed(false);
    setErrors({});
    setForm({
      seating: "Outdoor seating",
      date: null,
      diners: "",
      occasion: "",
      time: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      requests: "",
      agree: false,
    });
  }

  return (
    <>
      <style>{`
        .reservation-calendar .rdp {
          --rdp-cell-size: 46px;
          --rdp-accent-color: #495E57;
          --rdp-background-color: #495E57;
          margin: 0;
        }

        .reservation-calendar .rdp-months {
          display: flex;
        }

        .reservation-calendar .rdp-month {
          background: white;
        }

        .reservation-calendar .rdp-caption_label {
          font-size: 1.5rem;
          font-weight: 700;
          color: #495E57;
        }

        .reservation-calendar .rdp-day {
          font-weight: 600;
          color: #495E57;
          border-radius: 10px;
        }

        .reservation-calendar .rdp-day_selected {
          background-color: #495E57 !important;
          color: white !important;
        }

        .reservation-calendar .rdp-button:hover:not([disabled]):not(.rdp-day_selected) {
          background: rgba(73, 94, 87, 0.12);
        }

        .reservation-calendar .rdp-chevron {
          fill: #495E57;
        }
      `}</style>

      <section className="relative bg-[#495E57] text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            src={Lemon}
            alt=""
            aria-hidden="true"
            className="
              absolute
              -right-2 top-2
              md:right-72 md:top-1/2 md:-translate-y-1/2
              w-55 md:w-105
              -rotate-6
              opacity-[0.09]
              pointer-events-none select-none
            "
          />

          <img
            src={Lemon}
            alt=""
            aria-hidden="true"
            className="
              absolute
              -right-10 top-[65%]
              md:right-2 md:top-29
              w-35 md:w-55
              rotate-12
              opacity-[0.08]
              pointer-events-none select-none
            "
          />

          <img
            src={Lemon}
            alt=""
            aria-hidden="true"
            className="
              absolute
              -left-8 top-36
              md:-left-10 md:-bottom-15 md:top-auto
              w-40 md:w-65
              rotate-22
              opacity-[0.06]
              pointer-events-none select-none
            "
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 py-12 md:py-16">
          <h1 className="text-[#F4CE14] text-4xl md:text-6xl font-bold font-serif mb-10">
            Reservations
          </h1>

          {!confirmed && step === 1 && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl md:text-[2rem] font-semibold">
                      Indoor seating
                    </span>
                    <button
                      type="button"
                      onClick={() => updateField("seating", "Indoor seating")}
                      className={`h-7 w-7 rounded-full border-2 flex items-center justify-center transition
                        ${
                          form.seating === "Indoor seating"
                            ? "border-white bg-white/15"
                            : "border-white/70"
                        }
                      `}
                      aria-label="Select indoor seating"
                    >
                      {form.seating === "Indoor seating" && (
                        <span className="h-3.5 w-3.5 rounded-full bg-white" />
                      )}
                    </button>
                  </div>

                  <DatePickerField
                    value={form.date}
                    onChange={(day) => updateField("date", day)}
                    error={errors.date}
                  />

                  <div className="mt-6">
                    <CustomSelect
                      label="Occasion"
                      value={form.occasion}
                      placeholder="Occasion"
                      onChange={(value) => updateField("occasion", value)}
                      options={OCCASION_OPTIONS}
                      icon={<PartyPopper size={28} />}
                      error={errors.occasion}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl md:text-[2rem] font-semibold">
                      Outdoor seating
                    </span>
                    <button
                      type="button"
                      onClick={() => updateField("seating", "Outdoor seating")}
                      className={`h-7 w-7 rounded-full border-2 flex items-center justify-center transition
                        ${
                          form.seating === "Outdoor seating"
                            ? "border-white bg-white/15"
                            : "border-white/70"
                        }
                      `}
                      aria-label="Select outdoor seating"
                    >
                      {form.seating === "Outdoor seating" && (
                        <span className="h-3.5 w-3.5 rounded-full bg-white" />
                      )}
                    </button>
                  </div>

                  <CustomSelect
                    label="Number of Diners"
                    value={form.diners ? `${form.diners} Diner${form.diners > 1 ? "s" : ""}` : ""}
                    placeholder="No. of Diners"
                    onChange={(value) => updateField("diners", value)}
                    options={DINER_OPTIONS}
                    icon={<Users size={28} />}
                    error={errors.diners}
                  />

                  <div className="mt-6">
                    <CustomSelect
                      label="Time"
                      value={form.time}
                      placeholder="Select time"
                      onChange={(value) => updateField("time", value)}
                      options={TIME_OPTIONS}
                      icon={<Clock3 size={28} />}
                      error={errors.time}
                    />
                  </div>
                </div>
              </div>

              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop"
                  alt="Restaurant interior"
                  className="h-52 w-full rounded-2xl object-cover shadow-lg"
                />
                <img
                  src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1200&auto=format&fit=crop"
                  alt="Chef plating food"
                  className="h-52 w-full rounded-2xl object-cover shadow-lg"
                />
                <img
                  src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop"
                  alt="Food served"
                  className="h-52 w-full rounded-2xl object-cover shadow-lg"
                />
              </div>

              <div className="mt-10 flex justify-center">
                <button
                  type="button"
                  onClick={handleReserveTable}
                  className="rounded-2xl bg-[#F4CE14] px-8 py-4 text-xl font-bold text-black shadow-lg transition hover:scale-[1.02]"
                >
                  Reserve a Table
                </button>
              </div>
            </>
          )}

          {!confirmed && step === 2 && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="mb-2 block text-base md:text-lg font-medium text-white">
                    ✱ First Name
                  </label>
                  <input
                    type="text"
                    placeholder="First name"
                    value={form.firstName}
                    onChange={(e) => updateField("firstName", e.target.value)}
                    className={`w-full rounded-xl bg-white px-4 py-4 text-lg text-[#495E57] outline-none
                      ${errors.firstName ? "ring-2 ring-[#E8A47A]" : ""}
                    `}
                  />
                  {errors.firstName && (
                    <p className="mt-2 flex items-center gap-2 text-sm text-[#E8A47A]">
                      <CircleAlert size={16} />
                      {errors.firstName}
                    </p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block text-base md:text-lg font-medium text-white">
                    ✱ Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Last name"
                    value={form.lastName}
                    onChange={(e) => updateField("lastName", e.target.value)}
                    className={`w-full rounded-xl bg-white px-4 py-4 text-lg text-[#495E57] outline-none
                      ${errors.lastName ? "ring-2 ring-[#E8A47A]" : ""}
                    `}
                  />
                  {errors.lastName && (
                    <p className="mt-2 flex items-center gap-2 text-sm text-[#E8A47A]">
                      <CircleAlert size={16} />
                      {errors.lastName}
                    </p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block text-base md:text-lg font-medium text-white">
                    ✱ Email
                  </label>
                  <input
                    type="email"
                    placeholder="you@company.com"
                    value={form.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    className={`w-full rounded-xl bg-white px-4 py-4 text-lg text-[#495E57] outline-none
                      ${errors.email ? "ring-2 ring-[#E8A47A]" : ""}
                    `}
                  />
                  {errors.email && (
                    <p className="mt-2 flex items-center gap-2 text-sm text-[#E8A47A]">
                      <CircleAlert size={16} />
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block text-base md:text-lg font-medium text-white">
                    ✱ Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="0712345678"
                    value={form.phone}
                    onChange={(e) => updateField("phone", e.target.value)}
                    className={`w-full rounded-xl bg-white px-4 py-4 text-lg text-[#495E57] outline-none
                      ${errors.phone ? "ring-2 ring-[#E8A47A]" : ""}
                    `}
                  />
                  {errors.phone && (
                    <p className="mt-2 flex items-center gap-2 text-sm text-[#E8A47A]">
                      <CircleAlert size={16} />
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-8 items-start">
                <div className="space-y-5">
                  <div className="grid grid-cols-2 gap-5 text-white">
                    <div className="flex items-center gap-3 text-xl">
                      <CalendarDays className="text-white" />
                      <span>{reservationSummary.date}</span>
                    </div>

                    <div className="flex items-center gap-3 text-xl">
                      <Users className="text-white" />
                      <span>{reservationSummary.diners}</span>
                    </div>

                    <div className="flex items-center gap-3 text-xl">
                      <Clock3 className="text-white" />
                      <span>{reservationSummary.time}</span>
                    </div>

                    <div className="flex items-center gap-3 text-xl">
                      <PartyPopper className="text-white" />
                      <span>{reservationSummary.occasion}</span>
                    </div>
                  </div>

                  <p className="text-2xl font-semibold">{reservationSummary.seating}</p>

                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={form.agree}
                      onChange={(e) => updateField("agree", e.target.checked)}
                      className="h-5 w-5 accent-[#F4CE14]"
                    />
                    <span className="text-white/90">
                      You agree to our friendly{" "}
                      <a href="#" className="underline">
                        privacy policy
                      </a>
                    </span>
                  </label>

                  {errors.agree && (
                    <p className="flex items-center gap-2 text-sm text-[#E8A47A]">
                      <CircleAlert size={16} />
                      {errors.agree}
                    </p>
                  )}

                  <div className="flex flex-wrap gap-4 pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="rounded-2xl border border-white/40 px-6 py-3 text-lg font-semibold text-white hover:bg-white/10 transition"
                    >
                      Back
                    </button>

                    <button
                      type="button"
                      onClick={handleConfirmReservation}
                      className="rounded-2xl bg-[#F4CE14] px-8 py-3 text-lg font-bold text-black shadow-lg transition hover:scale-[1.02]"
                    >
                      Confirm Reservation
                    </button>
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-base md:text-lg font-medium text-white">
                    Special Requests
                  </label>
                  <textarea
                    rows="8"
                    placeholder="Comment"
                    value={form.requests}
                    onChange={(e) => updateField("requests", e.target.value)}
                    className="w-full rounded-xl bg-white px-4 py-4 text-lg text-[#495E57] outline-none resize-none"
                  />
                </div>
              </div>
            </>
          )}

          {confirmed && (
            <div className="py-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <div className="rounded-3xl bg-white/95 p-8 text-[#495E57] shadow-2xl">
                  <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                    Your reservation has been confirmed. Check your email.
                  </h2>

                  <div className="mt-8 space-y-4 text-lg">
                    <div className="flex items-center gap-3">
                      <UserRound size={20} />
                      <span>
                        {form.firstName} {form.lastName}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <Mail size={20} />
                      <span>{form.email}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <Phone size={20} />
                      <span>{form.phone}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <CalendarDays size={20} />
                      <span>{format(form.date, "EEEE, MMMM d")}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <Clock3 size={20} />
                      <span>{form.time}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <Users size={20} />
                      <span>{form.diners} Diners</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <PartyPopper size={20} />
                      <span>{form.occasion}</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={resetReservation}
                    className="mt-8 rounded-2xl bg-[#F4CE14] px-7 py-3 text-lg font-bold text-black"
                  >
                    Make Another Reservation
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <img
                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop"
                    alt="Restaurant interior"
                    className="h-56 w-full rounded-2xl object-cover shadow-lg"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1525755662778-989d0524087e?q=80&w=1200&auto=format&fit=crop"
                    alt="Food presentation"
                    className="h-56 w-full rounded-2xl object-cover shadow-lg"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?q=80&w=1200&auto=format&fit=crop"
                    alt="Pasta dish"
                    className="h-56 w-full rounded-2xl object-cover shadow-lg"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}