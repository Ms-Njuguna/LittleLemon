import { useState } from "react";

export default function InputField({ label, icon, type = "text", value, onChange }) {
  const [focused, setFocused] = useState(false);
  const isActive = focused || value;

  return (
    <div className="relative">
      <div
        className={`relative flex items-center gap-3 rounded-xl bg-white px-4 pt-5 pb-2 shadow-sm transition-all duration-200
        ${focused ? "ring-2 ring-[#F4CE14] shadow-md" : ""}
        hover:shadow-md`}
      >
        {icon}

        <div className="relative w-full">
          {/* Floating label */}
          <span
            className={`absolute left-0 transition-all duration-200 pointer-events-none
              ${
                isActive
                  ? "text-xs -top-3 text-[#667085]"
                  : "text-base top-1/2 -translate-y-1/2 text-[#98A2B3]"
              }
            `}
          >
            {label}
          </span>

          <input
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            className="w-full bg-transparent text-base font-medium text-[#495E57] outline-none"
          />
        </div>
      </div>
    </div>
  );
}