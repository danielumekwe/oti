import { Montserrat, Roboto } from "next/font/google";
import localFont from "next/font/local";

export const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });
export const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });
export const lineIcons = localFont({ src: "../fonts/Icons-Line.woff2", display: "block" });
