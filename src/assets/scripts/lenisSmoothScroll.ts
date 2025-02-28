import "@/assets/style/lenis.css";

import Lenis from "lenis";

const lenis = new Lenis({ duration: 0.6, lerp: 0.1, smoothWheel: true });

function raf(time: number) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
