import type { Bilingual } from "./i18n";

export type QuizQuestion = {
  question: Bilingual;
  options: Bilingual[];
  /** Index of the correct option in `options`. */
  answer: number;
  explanation: Bilingual;
};

export type LessonStep = {
  title: Bilingual;
  body: Bilingual;
};

export type Lesson = {
  id: string;
  icon: string;
  minutes: number;
  title: Bilingual;
  summary: Bilingual;
  steps: LessonStep[];
  /** Real-life example, shown in a highlighted box. */
  example: Bilingual;
  quiz: QuizQuestion[];
  /** Optional narration, e.g. "/audio/budgeting-rw.mp3". Add files to public/audio. */
  audio?: Partial<Record<"rw" | "en", string>>;
};

/**
 * DRAFT CONTENT. Kinyarwanda text should be reviewed by a native speaker
 * before public launch. To add a lesson, add an object to this array.
 */
export const lessons: Lesson[] = [
  {
    id: "budgeting",
    icon: "💰",
    minutes: 3,
    title: {
      rw: "Gukora ingengo y'imari",
      en: "Making a budget",
    },
    summary: {
      rw: "Menya aho amafaranga yawe ajya, utegure mbere yo gukoresha.",
      en: "Know where your money goes. Plan before you spend.",
    },
    steps: [
      {
        title: { rw: "Andika amafaranga winjiza", en: "Write what you earn" },
        body: {
          rw: "Andika amafaranga yose winjiza mu kwezi: ay'akazi, ay'ubucuruzi n'andi yose.",
          en: "Write down all the money you earn in a month: from work, business and anything else.",
        },
      },
      {
        title: { rw: "Andika ibyo ukoresha", en: "Write what you spend" },
        body: {
          rw: "Andika ibyo ukoresha buri gihe (ibiryo, ubukode, ingendo) n'ibyo ukoresha rimwe na rimwe.",
          en: "List what you spend regularly (food, rent, transport) and what you spend sometimes.",
        },
      },
      {
        title: { rw: "Gabanya amafaranga: 50/30/20", en: "Split your money: 50/30/20" },
        body: {
          rw: "Urugero rworoshye: 50% ku by'ingenzi, 30% ku byo ukunda, 20% yo kuzigama.",
          en: "A simple guide: 50% for needs, 30% for wants, 20% for savings.",
        },
      },
      {
        title: { rw: "Zigama mbere", en: "Pay yourself first" },
        body: {
          rw: "Amafaranga akimara kuboneka, banza ushyire ku ruhande ayo kuzigama, hanyuma ukoreshe asigaye.",
          en: "As soon as money arrives, set aside your savings first, then spend what is left.",
        },
      },
    ],
    example: {
      rw: "Mama Aline acuruza imboga, yinjiza 100,000 RWF mu kwezi. Ashyira 50,000 ku by'ingenzi (ibiryo, ubukode), 30,000 ku byo akunda, na 20,000 yo kuzigama.",
      en: "Mama Aline sells vegetables and earns 100,000 RWF a month. She puts 50,000 toward needs (food, rent), 30,000 toward wants, and 20,000 into savings.",
    },
    quiz: [
      {
        question: {
          rw: "Intambwe ya mbere yo gukora ingengo y'imari ni iyihe?",
          en: "What is the first step of making a budget?",
        },
        options: [
          { rw: "Gukoresha amafaranga yose", en: "Spend all your money" },
          { rw: "Kwandika amafaranga winjiza", en: "Write down what you earn" },
          { rw: "Kugurisha ibintu byawe", en: "Sell your belongings" },
        ],
        answer: 1,
        explanation: {
          rw: "Ugomba kumenya amafaranga winjiza mbere yo kuyategura.",
          en: "You must know how much comes in before you can plan it.",
        },
      },
      {
        question: {
          rw: "Mu mategeko ya 50/30/20, 20% ajya he?",
          en: "In the 50/30/20 guide, where does the 20% go?",
        },
        options: [
          { rw: "Mu kuzigama", en: "Savings" },
          { rw: "Mu myidagaduro", en: "Entertainment" },
          { rw: "Mu bukode", en: "Rent" },
        ],
        answer: 0,
        explanation: {
          rw: "20% ni ayo kuzigama, kugira ngo wizigamire ejo hazaza.",
          en: "The 20% is for savings, to protect your future.",
        },
      },
      {
        question: {
          rw: "\"Zigama mbere\" bivuze iki?",
          en: "What does \"pay yourself first\" mean?",
        },
        options: [
          { rw: "Gukoresha amafaranga yose ubanza, ukazigama asigaye", en: "Spend first, save whatever is left" },
          { rw: "Gushyira ku ruhande amafaranga yo kuzigama amafaranga akimara kuboneka", en: "Set savings aside as soon as money arrives" },
          { rw: "Kuguriza abandi amafaranga yawe", en: "Lend your money to others" },
        ],
        answer: 1,
        explanation: {
          rw: "Iyo uzigama mbere, ntibigusaba kwibuka kuzigama nyuma.",
          en: "Saving first means you do not depend on leftovers at the end of the month.",
        },
      },
    ],
  },
  {
    id: "saving",
    icon: "🏦",
    minutes: 3,
    title: { rw: "Kuzigama", en: "Saving money" },
    summary: {
      rw: "Zigama buhoro buhoro kugira ngo uzaboneke mu bihe bikomeye.",
      en: "Save little by little so you are ready for hard times.",
    },
    steps: [
      {
        title: { rw: "Tangira gito", en: "Start small" },
        body: {
          rw: "Ntukeneye amafaranga menshi. Kuzigama 500 RWF buri munsi bituma mu kwezi ugira 15,000 RWF.",
          en: "You do not need a lot. Saving 500 RWF a day gives you 15,000 RWF in a month.",
        },
      },
      {
        title: { rw: "Shyiraho intego", en: "Set a goal" },
        body: {
          rw: "Menya icyo uzigamira: amafaranga y'ishuri, ubucuruzi, cyangwa ay'impanuka.",
          en: "Know what you are saving for: school fees, a business, or an emergency.",
        },
      },
      {
        title: { rw: "Zigama ahantu hatandukanye", en: "Keep savings separate" },
        body: {
          rw: "Bika amafaranga yo kuzigama ukwayo, utayavanze n'ayo gukoresha buri munsi. Ikimina, SACCO cyangwa konti ya banki birafasha.",
          en: "Keep savings apart from your daily spending money. An ikimina, a SACCO or a bank account can help.",
        },
      },
      {
        title: { rw: "Komeza buri gihe", en: "Be regular" },
        body: {
          rw: "Kuzigama buri cyumweru bifasha kurusha kuzigama byinshi rimwe gusa.",
          en: "Saving every week works better than saving a lot just once.",
        },
      },
    ],
    example: {
      rw: "Eric atwara moto, azigama 1,000 RWF buri munsi. Mu kwezi aba afite 30,000 RWF, bityo yishyura ikintu gitunguranye atagombye kuguza.",
      en: "Eric rides a motorbike taxi and saves 1,000 RWF a day. After a month he has 30,000 RWF, so he can pay for a surprise cost without borrowing.",
    },
    quiz: [
      {
        question: {
          rw: "Kuzigama 500 RWF buri munsi mu minsi 30 biguha angahe?",
          en: "Saving 500 RWF a day for 30 days gives you how much?",
        },
        options: [
          { rw: "5,000 RWF", en: "5,000 RWF" },
          { rw: "50,000 RWF", en: "50,000 RWF" },
          { rw: "15,000 RWF", en: "15,000 RWF" },
        ],
        answer: 2,
        explanation: {
          rw: "500 × 30 = 15,000 RWF.",
          en: "500 × 30 = 15,000 RWF.",
        },
      },
      {
        question: {
          rw: "Amafaranga yo kuzigama agomba kubikwa he?",
          en: "Where should your savings be kept?",
        },
        options: [
          { rw: "Ahantu hatandukanye n'ayo gukoresha buri munsi", en: "Separate from daily spending money" },
          { rw: "Mu mufuka hamwe n'andi mafaranga", en: "In your pocket with other money" },
          { rw: "Ku nshuti iyo ari yo yose", en: "With any friend" },
        ],
        answer: 0,
        explanation: {
          rw: "Iyo amafaranga yo kuzigama atavanze n'ayo gukoresha, ntibyoroha kuyakoresha ku bw'impanuka.",
          en: "When savings are separate, you are less likely to spend them by accident.",
        },
      },
      {
        question: {
          rw: "Ni iki gifasha kurusha ibindi?",
          en: "Which works best?",
        },
        options: [
          { rw: "Kuzigama gake buri cyumweru", en: "Saving a little every week" },
          { rw: "Kuzigama gusa iyo wumva ufite byinshi", en: "Saving only when you feel rich" },
          { rw: "Kuzigama gusa mu mpera z'umwaka", en: "Saving only at the end of the year" },
        ],
        answer: 0,
        explanation: {
          rw: "Kuzigama buri gihe bihinduka akamenyero.",
          en: "Regular saving becomes a habit.",
        },
      },
    ],
  },
  {
    id: "momo-safety",
    icon: "🔒",
    minutes: 4,
    title: {
      rw: "Kwirinda uburiganya kuri Mobile Money",
      en: "Staying safe from mobile money scams",
    },
    summary: {
      rw: "Menya uburiganya busanzwe, urinde amafaranga yawe.",
      en: "Learn common scams and protect your money.",
    },
    steps: [
      {
        title: { rw: "Ntugire uwo uha PIN yawe", en: "Never share your PIN" },
        body: {
          rw: "Nta mukozi wa sosiyete y'itumanaho cyangwa wa banki ukwiye kukubaza PIN yawe. Uyihe ntawe, ndetse n'inshuti.",
          en: "No worker from your mobile company or bank should ask for your PIN. Share it with nobody, not even friends.",
        },
      },
      {
        title: { rw: "Irinde ubutumwa bw'uburiganya", en: "Beware of scam messages" },
        body: {
          rw: "Ubutumwa buvuga ko 'wegukanye igihembo' cyangwa ko 'konti yawe ifunzwe' akenshi ni uburiganya. Ntukande kuri link kandi ntuhamagare nimero irimo.",
          en: "Messages saying 'you won a prize' or 'your account is blocked' are often scams. Do not click the link or call the number in them.",
        },
      },
      {
        title: { rw: "Ubutumwa bw'amafaranga yoherejwe mu makosa", en: "'Sent by mistake' messages" },
        body: {
          rw: "Umuntu ashobora kukoherereza ubutumwa bw'ibinyoma buvuga ko yakoherereje amafaranga mu makosa, agusaba kuyasubiza. Banza urebe kuri konti yawe nyayo niba amafaranga yinjiye koko.",
          en: "Someone may send a fake message saying they sent you money by mistake and ask you to send it back. First check your real balance to see whether the money truly arrived.",
        },
      },
      {
        title: { rw: "Genzura mbere yo kwemeza", en: "Check before you confirm" },
        body: {
          rw: "Mbere yo kohereza amafaranga, soma izina ry'uwo ugiye koherereza hanyuma ubone kwemeza.",
          en: "Before sending money, read the receiver's name, and only then confirm.",
        },
      },
    ],
    example: {
      rw: "Mama Aline yabonye SMS imubwira ko yohererejwe 20,000 RWF mu makosa, imusaba kuyasubiza. Yarebye kuri konti ye nyayo asanga nta mafaranga yinjiye, nuko ntiyasubiza. Yarokotse uburiganya.",
      en: "Mama Aline got an SMS saying 20,000 RWF was sent to her by mistake and asking her to return it. She checked her real balance, found no money had arrived, and did not reply. She avoided the scam.",
    },
    quiz: [
      {
        question: {
          rw: "Umuntu uvuga ko akora muri sosiyete yawe y'itumanaho aguhamagaye akwaka PIN. Ukora iki?",
          en: "A caller says they work for your mobile company and asks for your PIN. What do you do?",
        },
        options: [
          { rw: "Mpa PIN yanjye", en: "Give the PIN" },
          { rw: "Nange nkamara guhamagara, simuhe PIN", en: "Refuse and hang up" },
          { rw: "Mpa igice cyayo gusa", en: "Give half of it" },
        ],
        answer: 1,
        explanation: {
          rw: "PIN ni iyawe wenyine. Nta wemerewe kuyigusaba.",
          en: "Your PIN is only yours. Nobody is allowed to ask for it.",
        },
      },
      {
        question: {
          rw: "Ubonye SMS ivuga ko woherejwe amafaranga mu makosa. Intambwe ya mbere ni iyihe?",
          en: "You get an SMS saying money was sent to you by mistake. What is the first step?",
        },
        options: [
          { rw: "Kuyasubiza ako kanya", en: "Send the money back immediately" },
          { rw: "Gusubiza SMS ndayiha PIN", en: "Reply with your PIN" },
          { rw: "Kureba kuri konti yanjye nyayo niba yinjiye", en: "Check your real balance" },
        ],
        answer: 2,
        explanation: {
          rw: "SMS irashobora kuba iy'ibinyoma. Konti yawe nyayo ni yo yizewe.",
          en: "The SMS can be fake. Your real account balance is the reliable source.",
        },
      },
      {
        question: {
          rw: "Ni iki ugomba kureba mbere yo kohereza amafaranga?",
          en: "What should you check before sending money?",
        },
        options: [
          { rw: "Izina ry'uwo ugiye koherereza", en: "The receiver's name" },
          { rw: "Iteganyagihe", en: "The weather" },
          { rw: "Nta kintu", en: "Nothing" },
        ],
        answer: 0,
        explanation: {
          rw: "Kureba izina bikurinda kohereza amafaranga ku muntu utari wo.",
          en: "Checking the name stops you from sending money to the wrong person.",
        },
      },
    ],
  },
  {
    id: "loans",
    icon: "🤝",
    minutes: 4,
    title: { rw: "Inguzanyo n'imyenda", en: "Loans and debt" },
    summary: {
      rw: "Menya igihe kuguza bifite akamaro n'ibyo ugomba kubaza.",
      en: "Know when borrowing helps and what to ask first.",
    },
    steps: [
      {
        title: { rw: "Inguzanyo igira inyungu", en: "A loan has a cost" },
        body: {
          rw: "Inguzanyo ni amafaranga uzasubiza yiyongereyeho inyungu. Burya usubiza byinshi kurusha ibyo wafashe.",
          en: "A loan is money you pay back plus interest. You always repay more than you borrowed.",
        },
      },
      {
        title: { rw: "Baza igiteranyo uzishyura", en: "Ask for the total" },
        body: {
          rw: "Mbere yo gusinya, baza: nzasubiza amafaranga angahe yose hamwe, kandi bizarangira ryari?",
          en: "Before signing, ask: how much will I repay in total, and by when?",
        },
      },
      {
        title: { rw: "Guza ku cyongera amafaranga", en: "Borrow to earn" },
        body: {
          rw: "Guza ugamije ikizakwinjiriza (ubucuruzi, igikoresho cy'akazi), aho kuguza ngo ugure ibyo ushaka gusa.",
          en: "Borrow for something that earns money (a business, a work tool), not only for things you want.",
        },
      },
      {
        title: { rw: "Menya ko uzabasha kwishyura", en: "Be sure you can repay" },
        body: {
          rw: "Amafaranga wishyura buri kwezi agomba kuba igice gito cy'ayo winjiza. Niba utabasha kwishyura, vugana n'uwakuguriye hakiri kare.",
          en: "Your monthly repayment should be a small part of your income. If you cannot pay, talk to the lender early.",
        },
      },
    ],
    example: {
      rw: "Jean aguza 100,000 RWF, akazishyura 112,000 RWF mu mezi 6. Inyungu ni 12,000 RWF. Yaguze ibikoresho by'ubucuruzi bimwinjiriza arenze ayo, bityo kuguza byaramufashije.",
      en: "Jean borrows 100,000 RWF and repays 112,000 RWF over 6 months. The interest is 12,000 RWF. He bought business tools that earn him more than that, so borrowing helped him.",
    },
    quiz: [
      {
        question: {
          rw: "Waguze 100,000 RWF ugomba gusubiza 112,000 RWF. Inyungu ni angahe?",
          en: "You borrow 100,000 RWF and must repay 112,000 RWF. How much is the interest?",
        },
        options: [
          { rw: "112,000 RWF", en: "112,000 RWF" },
          { rw: "12,000 RWF", en: "12,000 RWF" },
          { rw: "100,000 RWF", en: "100,000 RWF" },
        ],
        answer: 1,
        explanation: {
          rw: "112,000 − 100,000 = 12,000 RWF.",
          en: "112,000 − 100,000 = 12,000 RWF.",
        },
      },
      {
        question: {
          rw: "Ni iki ugomba kubaza mbere yo gusinya inguzanyo?",
          en: "What should you ask before signing a loan?",
        },
        options: [
          { rw: "Nta kintu", en: "Nothing" },
          { rw: "Ibara ry'urupapuro", en: "The colour of the paper" },
          { rw: "Amafaranga yose nzasubiza n'igihe", en: "The total I must repay and by when" },
        ],
        answer: 2,
        explanation: {
          rw: "Kumenya igiteranyo n'igihe bikurinda kwishora mu myenda utazabasha kwishyura.",
          en: "Knowing the total and the deadline protects you from debt you cannot repay.",
        },
      },
      {
        question: {
          rw: "Ni iyihe mpamvu nziza yo kuguza?",
          en: "Which is the best reason to borrow?",
        },
        options: [
          { rw: "Kugura ibikoresho bizinjiriza amafaranga", en: "To buy tools that earn income" },
          { rw: "Kugura impano yo gushimisha inshuti", en: "To buy a gift to impress friends" },
          { rw: "Kwishyura ibirori", en: "To pay for a party" },
        ],
        answer: 0,
        explanation: {
          rw: "Inguzanyo ikwiye ni iyongera amafaranga winjiza.",
          en: "The best loans increase what you earn.",
        },
      },
    ],
  },
  {
    id: "business-plan",
    icon: "🧮",
    minutes: 4,
    title: { rw: "Gahunda y'ubucuruzi yoroshye", en: "A simple business plan" },
    summary: {
      rw: "Menya ibyo ukoresha, igiciro n'inyungu mbere yo gutangira.",
      en: "Know your costs, price and profit before you start.",
    },
    steps: [
      {
        title: { rw: "Andika ibyo ukoresha byose", en: "List every cost" },
        body: {
          rw: "Andika ibyo ukoresha buri munsi: ibikoresho, ubwikorezi, imisoro n'ibindi.",
          en: "List what you spend each day: materials, transport, fees and more.",
        },
      },
      {
        title: { rw: "Shyiraho igiciro", en: "Set your price" },
        body: {
          rw: "Igiciro kigomba kurenga ikiguzi cy'igicuruzwa kimwe, kugira ngo ubone inyungu.",
          en: "Your price must be higher than the cost of one item, so you make a profit.",
        },
      },
      {
        title: { rw: "Kubara inyungu", en: "Work out your profit" },
        body: {
          rw: "Inyungu = amafaranga winjije − amafaranga wakoresheje.",
          en: "Profit = money earned − money spent.",
        },
      },
      {
        title: { rw: "Tandukanya ay'ubucuruzi n'ay'urugo", en: "Separate business and home money" },
        body: {
          rw: "Bika amafaranga y'ubucuruzi ukwayo, kugira ngo umenye niba ubucuruzi butanga inyungu koko.",
          en: "Keep business money separate from home money so you know if the business truly makes a profit.",
        },
      },
    ],
    example: {
      rw: "Jean acuruza chapati. Buri munsi akoresha 8,000 RWF (ifu, amavuta, amakara). Agurisha chapati 100 ku 150 RWF, yinjiza 15,000 RWF. Inyungu ni 15,000 − 8,000 = 7,000 RWF ku munsi.",
      en: "Jean sells chapati. Each day he spends 8,000 RWF (flour, oil, charcoal). He sells 100 chapati at 150 RWF each and earns 15,000 RWF. Profit is 15,000 − 8,000 = 7,000 RWF a day.",
    },
    quiz: [
      {
        question: {
          rw: "Agurisha 100 ku 150 RWF, akoresha 8,000 RWF. Inyungu ni angahe?",
          en: "He sells 100 at 150 RWF each and spends 8,000 RWF. What is the profit?",
        },
        options: [
          { rw: "15,000 RWF", en: "15,000 RWF" },
          { rw: "8,000 RWF", en: "8,000 RWF" },
          { rw: "7,000 RWF", en: "7,000 RWF" },
        ],
        answer: 2,
        explanation: {
          rw: "100 × 150 = 15,000. Hanyuma 15,000 − 8,000 = 7,000 RWF.",
          en: "100 × 150 = 15,000. Then 15,000 − 8,000 = 7,000 RWF.",
        },
      },
      {
        question: {
          rw: "Igiciro cy'igicuruzwa kigomba kuba gite?",
          en: "How should your price compare with your cost?",
        },
        options: [
          { rw: "Kirenze ikiguzi cy'igicuruzwa kimwe", en: "Higher than the cost of one item" },
          { rw: "Gito kurusha ikiguzi", en: "Lower than the cost" },
          { rw: "Kingana n'ikiguzi neza", en: "Exactly the same as the cost" },
        ],
        answer: 0,
        explanation: {
          rw: "Iyo igiciro kitarenze ikiguzi, nta nyungu ubona.",
          en: "If the price is not higher than the cost, you make no profit.",
        },
      },
      {
        question: {
          rw: "Kuki ugomba gutandukanya amafaranga y'ubucuruzi n'ay'urugo?",
          en: "Why separate business money from home money?",
        },
        options: [
          { rw: "Kugira ngo bigaragare neza", en: "So it looks neat" },
          { rw: "Nta mpamvu", en: "There is no reason" },
          { rw: "Kugira ngo umenye niba ubucuruzi bubona inyungu koko", en: "To know if the business really makes a profit" },
        ],
        answer: 2,
        explanation: {
          rw: "Iyo amafaranga avanze, ntushobora kumenya inyungu nyayo.",
          en: "When money is mixed, you cannot see the real profit.",
        },
      },
    ],
  },
];

export function getLesson(id: string): Lesson | undefined {
  return lessons.find((l) => l.id === id);
}
