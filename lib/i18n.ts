export type Lang = "rw" | "en";

export const LANGS: Lang[] = ["rw", "en"];

export function isLang(value: string): value is Lang {
  return value === "rw" || value === "en";
}

/** Text shown in two languages. Kinyarwanda (rw) is the primary language. */
export type Bilingual = Record<Lang, string>;

export const APP_NAME = "PesaSoma";

export const ui = {
  tagline: {
    rw: "Wige gucunga amafaranga yawe",
    en: "Learn to manage your money",
  },
  lessons: { rw: "Amasomo", en: "Lessons" },
  startLesson: { rw: "Tangira isomo", en: "Start lesson" },
  done: { rw: "Warikoze", en: "Completed" },
  example: { rw: "Urugero", en: "Example" },
  quiz: { rw: "Ikizamini", en: "Quiz" },
  check: { rw: "Reba igisubizo", en: "Check answer" },
  next: { rw: "Ikurikira", en: "Next" },
  finish: { rw: "Soza", en: "Finish" },
  correct: { rw: "Neza cyane!", en: "Correct!" },
  wrong: { rw: "Ntabwo ari byo.", en: "Not quite." },
  score: { rw: "Wabonye", en: "You scored" },
  tryAgain: { rw: "Ongera ugerageze", en: "Try again" },
  back: { rw: "Subira ku masomo", en: "Back to lessons" },
  streak: { rw: "Iminsi ikurikiranye", en: "Day streak" },
  offlineReady: {
    rw: "Amasomo wasomye aboneka nta interineti.",
    en: "Lessons you have opened work without internet.",
  },
  chooseLanguage: { rw: "Hitamo ururimi", en: "Choose your language" },
  minutes: { rw: "iminota", en: "min" },
} satisfies Record<string, Bilingual>;
