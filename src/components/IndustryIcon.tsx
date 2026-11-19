import { lineIcons } from "@/lib/fonts";
import type { IndustryIcon as IconName } from "@/lib/site";

const lineGlyphs: Partial<Record<IconName, string>> = {
  people: "",
  speedometer: "",
  "pie-chart": "",
};

// Font Awesome 5 solid glyph outlines (font units, y-up, 576 wide).
const faPaths: Partial<Record<IconName, string>> = {
  plane:
    "M480 256c35.35 0 96-28.65 96-64s-60.65-64-96-64H365.71L260.6-55.94C257.75-60.92 252.45-64 246.71-64h-65.5c-10.63 0-18.3 10.18-15.38 20.4L214.86 128H112l-43.2-57.6C65.78 66.37 61.04 64 56 64H16.01C5.6 64-2.04 73.78.49 83.88L32 192 .49 300.12C-2.04 310.22 5.6 320 16.01 320H56c5.03 0 9.78-2.37 12.8-6.4L112 256h102.86l-49.03 171.61c-2.92 10.22 4.75 20.39 15.38 20.39h65.5c5.13 0 11.35-3.61 13.9-8.06L365.71 256H480z",
  "first-aid":
    "M0 368c0 26.5 21.5 48 48 48h48v-448H48c-26.5 0-48 21.5-48 48v352zM128-32v448h320v-448H128zm64 248v-48c0-4.4 3.6-8 8-8h56v-56c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v56h56c4.4 0 8 3.6 8 8v48c0 4.4-3.6 8-8 8h-56v56c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-56h-56c-4.4 0-8-3.6-8-8zM528 416c26.5 0 48-21.5 48-48v-352c0-26.5-21.5-48-48-48h-48v448h48z",
};

export default function IndustryIcon({ name }: { name: IconName }) {
  const path = faPaths[name];
  return (
    <span className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#00a6a626] text-primary">
      {path ? (
        <svg viewBox="0 0 576 512" className="h-[30px] w-[30px] fill-current" aria-hidden>
          <path transform="matrix(1 0 0 -1 0 448)" d={path} />
        </svg>
      ) : (
        <i className={`${lineIcons.className} not-italic text-[30px] leading-[30px]`} aria-hidden>
          {lineGlyphs[name]}
        </i>
      )}
    </span>
  );
}
