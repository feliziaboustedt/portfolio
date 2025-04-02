export type Message = {
    intern?: string;
    receiver?: string; 
    message: string;
} & (
    | { intern: string }
    | { receiver: string}
);

export const messages: Message[] = [
    { intern: "Felizia", message: "Hej, jag heter Felizia och söker praktik som Frontend Developer till hösten 2025. Är ni intresserade av att ha en praktikant hos er?"}, 
    { receiver: "unknown", message: "Hej! Vi är alltid intresserade av att höra mer. Berätta om din erfarenhet." },
    { intern: "Felizia", message: "Under min utbildning har jag arbetat med JavaScript/TypeScript, HTML, CSS/SCSS, Node.js, samt genomfört testning. Ramverken vi använt är React, Next, Vue.js, MongoDB och Express. Jag har också jobbat med verktyg som VSC, Figma, Trello, GitHub och GitHub Projects. Jag har erfarenhet av agilt arbete och har också övat på att vara Scrum Master. Jag är intresserad av att skapa användarvänliga och visuellt tilltalande, responsiva hemsidor."},
    { receiver: "unknown", message: "Låter som en bra match! Din erfarenhet verkar stämma bra in med vårt arbete. Under vilka veckor är din LIA-period?"}, 
    { intern: "Felizia", message: "Perioden sträcker sig från v.39-48 och jag är tillgänglig för er under hela min LIA-period."},
    { receiver: "unknown", message: "Perfekt! Vi använder också agila metoder här. Hur känns det med dagliga standups och Scrum?"}, 
    { intern: "Felizia", message: "Jag har erfarenhet av Scrum och gillar att arbeta i team med dagliga standups. Det känns bra!"},
    { receiver: "unknown", message: "Toppen! Har du några frågor till oss?"}, 
    { intern: "Felizia", message: "Finns det några specifika projekt jag kan vara med på, och kommer jag kunna arbeta med tekniker som Next.js eller mongoose?"},
    { receiver: "unknown", message: "Vi har flera projekt som använder både mongoose och Next.js, så det skulle passa bra. Vi ser fram emot att ha dig ombord!"}, 
    { intern: "Felizia", message: "Det låter jättebra! Jag ser verkligen fram emot att lära mig mer tillsammans med er och få ta del av era erfarenheter."},
    { receiver: "unknown", message: "Vi hör snart av oss med mer information. Ha en fortsatt fin dag!"},
    { intern: "Felizia", message: "Tack, jag önskar er detsamma!"}
];
