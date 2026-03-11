import {
  CalendarDays,
  Clock3,
  PartyPopper,
  Users,
  CircleAlert,
} from "lucide-react";

export default function ReservationSummaryCard({
  summary,
  agree,
  onAgreeChange,
  agreeError,
  onBack,
  onConfirm,
}) {
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 gap-5 text-white sm:grid-cols-2">
        <div className="flex items-center gap-3 text-xl">
          <CalendarDays className="text-white" />
          <span>{summary.date}</span>
        </div>

        <div className="flex items-center gap-3 text-xl">
          <Users className="text-white" />
          <span>{summary.diners}</span>
        </div>

        <div className="flex items-center gap-3 text-xl">
          <Clock3 className="text-white" />
          <span>{summary.time}</span>
        </div>

        <div className="flex items-center gap-3 text-xl">
          <PartyPopper className="text-white" />
          <span>{summary.occasion}</span>
        </div>
      </div>

      <p className="text-2xl font-semibold text-white">{summary.seating}</p>

      <label className="flex cursor-pointer items-center gap-3">
        <input
          type="checkbox"
          checked={agree}
          onChange={(e) => onAgreeChange(e.target.checked)}
          className="h-5 w-5 accent-[#F4CE14]"
        />
        <span className="text-white/90">
          You agree to our friendly{" "}
          <a href="#" className="underline">
            privacy policy
          </a>
        </span>
      </label>

      {agreeError && (
        <p className="flex items-center gap-2 text-sm text-[#E8A47A]">
          <CircleAlert size={16} />
          {agreeError}
        </p>
      )}

      <div className="flex flex-wrap gap-4 pt-2">
        <button
          type="button"
          onClick={onBack}
          className="rounded-2xl border border-white/40 px-6 py-3 text-lg font-semibold text-white transition hover:bg-white/10"
        >
          Back
        </button>

        <button
          type="button"
          onClick={onConfirm}
          className="rounded-2xl bg-[#F4CE14] px-8 py-3 text-lg font-bold text-black shadow-lg transition hover:scale-[1.02]"
        >
          Confirm Reservation
        </button>
      </div>
    </div>
  );
}