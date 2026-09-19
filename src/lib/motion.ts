export const motionTokens = {
  duration: { enter: 0.8, hero: 0.9 },
  ease: { enter: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  distance: { reveal: 20 },
  stagger: { children: 0.07, hero: 0.14 },
  viewport: { margin: "0px 0px -10% 0px" },
  press: { scale: 0.97 },
  parallax: { range: 0.06 },
} as const;
