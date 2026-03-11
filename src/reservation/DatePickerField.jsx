import { useEffect, useRef, useState } from "react";
import { CalendarDays, ChevronDown, ChevronUp, CircleAlert } from "lucide-react";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import "react-day-picker/dist/style.css";

export default function DatePickerField({ value, onChange, error }) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <style>{`
        .reservation-calendar .rdp {
          --rdp-cell-size: 44px;
          --rdp-accent-color: #495E57;
          --rdp-background-color: #495E57;
          margin: 0;
        }

        .reservation-calendar .rdp-caption_label {
          font-size: 1.25rem;
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

      <div className="relative" ref={wrapperRef}>
        <label className="mb-2 block text-base md:text-lg font-medium text-white">
          Date
        </label>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className={`w-full rounded-[22px] bg-white px-5 py-5 text-left shadow-[0_8px_18px_rgba(0,0,0,0.10)] transition flex items-center justify-between gap-4 ${
            error ? "ring-2 ring-[#E8A47A]" : ""
          }`}
        >
          <div className="flex min-w-0 items-center gap-4">
            <CalendarDays size={32} className="shrink-0 text-[#5F6F67]" />
            <span
              className={`truncate text-xl md:text-[1.75rem] font-medium ${
                value ? "text-[#495E57]" : "text-[#667085]"
              }`}
            >
              {value ? format(value, "EEEE, MMMM d") : "Select Date"}
            </span>
          </div>

          <span className="shrink-0 text-[#5F6F67]">
            {open ? <ChevronUp size={28} /> : <ChevronDown size={28} />}
          </span>
        </button>

        {open && (
          <div className="absolute z-50 mt-3 rounded-2xl border border-[#e4e4e4] bg-white p-4 shadow-2xl">
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
    </>
  );
}