import { CircleAlert } from "lucide-react";
import ReservationSummaryCard from "../reservation/ReservationSummaryCard";

export default function ReservationStepTwo({
  form,
  errors,
  summary,
  updateField,
  onBack,
  onConfirm,
}) {
  return (
    <>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-base md:text-lg font-medium text-white">
            ✱ First Name
          </label>
          <input
            type="text"
            placeholder="First name"
            value={form.firstName}
            onChange={(e) => updateField("firstName", e.target.value)}
            className={`w-full rounded-xl bg-white px-4 py-4 text-lg text-[#495E57] outline-none ${
              errors.firstName ? "ring-2 ring-[#E8A47A]" : ""
            }`}
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
            className={`w-full rounded-xl bg-white px-4 py-4 text-lg text-[#495E57] outline-none ${
              errors.lastName ? "ring-2 ring-[#E8A47A]" : ""
            }`}
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
            className={`w-full rounded-xl bg-white px-4 py-4 text-lg text-[#495E57] outline-none ${
              errors.email ? "ring-2 ring-[#E8A47A]" : ""
            }`}
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
            className={`w-full rounded-xl bg-white px-4 py-4 text-lg text-[#495E57] outline-none ${
              errors.phone ? "ring-2 ring-[#E8A47A]" : ""
            }`}
          />
          {errors.phone && (
            <p className="mt-2 flex items-center gap-2 text-sm text-[#E8A47A]">
              <CircleAlert size={16} />
              {errors.phone}
            </p>
          )}
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 items-start gap-8 md:grid-cols-[1.2fr_1fr]">
        <ReservationSummaryCard
          summary={summary}
          agree={form.agree}
          onAgreeChange={(value) => updateField("agree", value)}
          agreeError={errors.agree}
          onBack={onBack}
          onConfirm={onConfirm}
        />

        <div>
          <label className="mb-2 block text-base md:text-lg font-medium text-white">
            Special Requests
          </label>
          <textarea
            rows="8"
            placeholder="Comment"
            value={form.requests}
            onChange={(e) => updateField("requests", e.target.value)}
            className="w-full resize-none rounded-xl bg-white px-4 py-4 text-lg text-[#495E57] outline-none"
          />
        </div>
      </div>
    </>
  );
}