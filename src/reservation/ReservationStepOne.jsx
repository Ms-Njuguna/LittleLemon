import {
  CalendarDays,
  Clock3,
  PartyPopper,
  Users,
} from "lucide-react";
import DatePickerField from "../reservation/DatePickerField";
import CustomSelect from "../reservation/CustomSelect";
import SeatingOptionCard from "../reservation/SeatingOptionCard";
import ReservationGallery from "../reservation/ReservationGallery";
import {
  DINER_OPTIONS,
  OCCASION_OPTIONS,
  TIME_OPTIONS,
} from "../services/reservationData";

export default function ReservationStepOne({
  form,
  errors,
  updateField,
  onContinue,
}) {
  return (
    <>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
        <SeatingOptionCard
          title="Indoor seating"
          selected={form.seating === "Indoor seating"}
          onSelect={() => updateField("seating", "Indoor seating")}
        >
          <DatePickerField
            value={form.date}
            onChange={(day) => updateField("date", day)}
            error={errors.date}
          />

          <CustomSelect
            label="Occasion"
            value={form.occasion}
            placeholder="Occasion"
            onChange={(value) => updateField("occasion", value)}
            options={OCCASION_OPTIONS}
            icon={<PartyPopper size={32} />}
            error={errors.occasion}
          />
        </SeatingOptionCard>

        <SeatingOptionCard
          title="Outdoor seating"
          selected={form.seating === "Outdoor seating"}
          onSelect={() => updateField("seating", "Outdoor seating")}
        >
          <CustomSelect
            label="Number of Diners"
            value={
              form.diners
                ? `${form.diners} Diner${form.diners > 1 ? "s" : ""}`
                : ""
            }
            placeholder="No. of Diners"
            onChange={(value) => updateField("diners", value)}
            options={DINER_OPTIONS}
            icon={<Users size={32} />}
            error={errors.diners}
          />

          <CustomSelect
            label="Time"
            value={form.time}
            placeholder="Select time"
            onChange={(value) => updateField("time", value)}
            options={TIME_OPTIONS}
            icon={<Clock3 size={32} />}
            error={errors.time}
          />
        </SeatingOptionCard>
      </div>

      <ReservationGallery />

      <div className="mt-10 flex justify-center">
        <button
          type="button"
          onClick={onContinue}
          className="rounded-2xl bg-[#F4CE14] px-8 py-4 text-xl font-bold text-black shadow-lg transition hover:scale-[1.02]"
        >
          Reserve a Table
        </button>
      </div>
    </>
  );
}