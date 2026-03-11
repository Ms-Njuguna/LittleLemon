export default function SeatingOptionCard({
  title,
  selected,
  onSelect,
  children,
}) {
  return (
    <div
      className={`rounded-[28px] border px-4 py-5 md:px-0 md:py-0 ${
        selected
          ? "border-white/35 bg-white/3"
          : "border-white/10 bg-transparent"
      }`}
    >
      <button
        type="button"
        onClick={onSelect}
        className="mb-5 flex w-full items-center justify-between text-left"
      >
        <span className="text-[2rem] md:text-[2.2rem] font-semibold text-white leading-none">
          {title}
        </span>

        <span
          className={`flex h-12 w-12 items-center justify-center rounded-full border-[3px] transition ${
            selected ? "border-white" : "border-white/70"
          }`}
          aria-hidden="true"
        >
          {selected && <span className="h-6 w-6 rounded-full bg-white" />}
        </span>
      </button>

      <div className="space-y-6">{children}</div>
    </div>
  );
}