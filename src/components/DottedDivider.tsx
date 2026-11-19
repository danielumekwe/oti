const cols = Array.from({ length: 10 }, (_, i) => 5 + i * 15);
const rows = [5, 20, 35, 50];

export default function DottedDivider() {
  return (
    <div className="pointer-events-none absolute inset-x-0 -bottom-[30px] z-[1] flex h-[60px] justify-center opacity-35">
      <svg width="150" height="60" viewBox="0 0 150 60" className="fill-secondary" aria-hidden>
        {rows.map((cy, r) =>
          cols.map((cx) => (
            <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="3" className={r > 1 ? "hidden md:block" : undefined} />
          ))
        )}
      </svg>
    </div>
  );
}
