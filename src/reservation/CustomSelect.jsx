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
        <label className="mb-1 block text-sm font-medium text-white/90">
          {label}
        </label>
      )}

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className={`w-full rounded-xl bg-white px-4 py-3 text-left shadow-sm transition flex items-center justify-between gap-3 ${
          error ? "ring-2 ring-[#E8A47A]" : ""
        }`}
      >
        <div className="flex min-w-0 items-center gap-3">
          {icon && <span className="text-[#5F6F67]">{icon}</span>}
          <span
            className={`truncate text-base font-medium ${
              value ? "text-[#495E57]" : "text-[#98A2B3]"
            }`}
          >
            {value || placeholder}
          </span>
        </div>

        {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>

      {open && (
        <div className="absolute z-40 mt-2 max-h-56 w-full overflow-auto rounded-xl border border-[#e4e4e4] bg-white shadow-lg">
          {options.map((option) => (
            <button
              key={String(option)}
              type="button"
              onClick={() => {
                onChange(option);
                setOpen(false);
              }}
              className="block w-full px-4 py-2.5 text-left text-sm text-[#495E57] hover:bg-[#F4CE14]/20"
            >
              {option}
            </button>
          ))}
        </div>
      )}

      {error && (
        <p className="mt-1 flex items-center gap-1 text-xs text-[#E8A47A]">
          <CircleAlert size={14} />
          {error}
        </p>
      )}
    </div>
  );
}