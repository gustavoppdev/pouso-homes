const EVENT = "lead:prefill";

export function prefillLead(value: string, target = "#quote") {
  window.dispatchEvent(new CustomEvent<string>(EVENT, { detail: value }));
  document.querySelector(target)?.scrollIntoView({ block: "start" });
}

export function onLeadPrefill(listener: (value: string) => void) {
  const handler = (event: Event) => listener((event as CustomEvent<string>).detail);
  window.addEventListener(EVENT, handler);
  return () => window.removeEventListener(EVENT, handler);
}
