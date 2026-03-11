export default function SeatingOptionCard({
  title,
  selected,
  onSelect,
  children,
}) {
  return (
    <div
      className={` px-4 py-5 md:px-0 md:py-0`}
    >
      <button
      type="button"
      onClick={onSelect}
      className="flex w-full items-center justify-between"
      aria-label={`Select ${title}`}
    >
      <span className="text-2xl md:text-[2rem] font-semibold text-left">
        {title}
      </span>

      <span
        className={`h-8 w-8 rounded-full border-2 flex items-center justify-center transition shrink-0
          ${selected ? "border-white bg-white/15" : "border-white/70"}
        `}
      >
        {selected && <span className="h-4 w-4 rounded-full bg-white" />}
      </span>
    </button>

      <div className="space-y-6">{children}</div>
    </div>
  );
}