import { useEffect, useRef, useState } from "react";
import { ChevronDown, ChevronUp, CircleAlert } from "lucide-react";

export default function CustomSelect({
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
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
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
        className={`w-full rounded-[22px] bg-white px-5 py-5 text-left shadow-[0_8px_18px_rgba(0,0,0,0.10)] transition flex items-center justify-between gap-4 ${
          error ? "ring-2 ring-[#E8A47A]" : ""
        }`}
      >
        <div className="flex min-w-0 items-center gap-4">
          {icon && <span className="shrink-0 text-[#5F6F67]">{icon}</span>}
          <span
            className={`truncate text-xl md:text-[1.75rem] font-medium ${
              value ? "text-[#495E57]" : "text-[#667085]"
            }`}
          >
            {value || placeholder}
          </span>
        </div>

        <span className="shrink-0 text-[#5F6F67]">
          {open ? <ChevronUp size={28} /> : <ChevronDown size={28} />}
        </span>
      </button>

      {open && (
        <div className="absolute z-40 mt-3 max-h-64 w-full overflow-auto rounded-2xl border border-[#d8d8d8] bg-white shadow-xl">
          {options.map((option) => (
            <button
              key={String(option)}
              type="button"
              onClick={() => {
                onChange(option);
                setOpen(false);
              }}
              className="block w-full px-4 py-4 text-left text-[#495E57] hover:bg-[#F4CE14]/20"
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