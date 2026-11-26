import type { Bilingual } from "@/lib/i18n";

/** Text of the About page. Edit here; both languages live side by side. */
export const GITHUB_URL = "https://github.com/inezajoel/pesasoma";

export const about = {
  whyTitle: { rw: "Impamvu nakoze PesaSoma", en: "Why I built PesaSoma" } satisfies Bilingual,
  why: {
    rw: "Abanyarwanda benshi bakoresha Mobile Money, ikimina n'inguzanyo buri munsi, ariko ntibigeze bigishwa uko amafaranga akora. Ibyo bituma batakaza amafaranga batabizi. Nashatse gukora isomo ry'ubuntu, mu Kinyarwanda, rikora no mu gihe nta interineti ihari.",
    en: "Many Rwandans use Mobile Money, ikimina and loans every day, but nobody ever taught them how money works. That makes people lose money without knowing it. I wanted to build a free course in Kinyarwanda that also works with no internet.",
  } satisfies Bilingual,
  whoTitle: { rw: "Uwayikoze", en: "Who made it" } satisfies Bilingual,
  who: {
    rw: "Nitwa Ineza Semuhungu Joel. Ndi umunyeshuri wiga Software Engineering muri AUCA mu Rwanda. PesaSoma ni porogaramu yanjye ya mbere yuzuye, kandi nzakora izindi zifasha abaturage.",
    en: "I am Ineza Semuhungu Joel, a Software Engineering student at AUCA in Rwanda. PesaSoma is my first complete app, and I will build more that help people in my community.",
  } satisfies Bilingual,
  howTitle: { rw: "Uko yakozwe", en: "How it is built" } satisfies Bilingual,
  how: {
    rw: "Yakozwe hakoreshejwe Next.js, kandi nifashishije ubwenge bw'ubukorano (AI) mu kwandika kode. Nahisemo ingingo z'amasomo, nkora ibizamini, kandi Kinyarwanda cyasuzumwe n'abakizi neza. Kode yose ni iy'ubuntu kuri GitHub.",
    en: "It is built with Next.js, and I used AI tools to help write the code. I chose the lesson topics, tested the app with real people, and the Kinyarwanda was reviewed by fluent speakers. All the code is free on GitHub.",
  } satisfies Bilingual,
  feedback: {
    rw: "Ufite igitekerezo cyangwa wabonye ikosa? Mbwira kuri GitHub.",
    en: "Have an idea or found a mistake? Tell me on GitHub.",
  } satisfies Bilingual,
  github: { rw: "Reba kode kuri GitHub", en: "See the code on GitHub" } satisfies Bilingual,
};
