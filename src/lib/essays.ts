export type Essay = {
  slug: string;
  title: string;
  dek: string;
  readingTime: string;
  date: string;
  paragraphs: string[];
};

export const essays: Essay[] = [
  {
    slug: "the-new-literacy",
    title: "The new literacy is knowing what to ask",
    dek: "For decades, the edge belonged to people who could find the answer. Now it belongs to people who can frame the question.",
    readingTime: "6 min read",
    date: "June 2026",
    paragraphs: [
      "There is a quiet shift happening in offices, studios, and kitchens. People who learn to ask AI good questions are pulling away from people who don't. Not by a little. By a lot.",
      "The skill isn't technical. It's closer to interviewing, or teaching, or editing. You learn to say what you actually want. You learn to give context without rambling. You learn when to push back and when to start over.",
      "If you can write a clear brief for a colleague, you can write a clear brief for a model. The good news: most of us already have the muscle. We just haven't trained it in this new direction yet.",
      "Start small. The next time you reach for AI, write three sentences before you hit send. What you want. Who it's for. What 'good' looks like. Then read what comes back like an editor, not a customer."
    ]
  },
  {
    slug: "a-quieter-inbox-by-thursday",
    title: "A quieter inbox, by Thursday",
    dek: "Most productivity advice asks you to change yourself. This one asks you to change one workflow.",
    readingTime: "5 min read",
    date: "May 2026",
    paragraphs: [
      "You don't need a system. You need one hour back, today. Here is the smallest possible experiment that tends to work.",
      "Pick the kind of email you write most often — status updates, polite declines, scheduling, follow-ups. Draft three real examples in your own voice. Paste them into your AI of choice with one line: 'Here is how I write. Match this.'",
      "From now on, when that kind of email lands, ask for a draft. Edit, send. The first week feels strange. The second week, you stop noticing. By the third week, you have your evenings back."
    ]
  },
  {
    slug: "what-ai-still-cant-do",
    title: "What AI still can't do",
    dek: "An honest list, because optimism without honesty is just sales.",
    readingTime: "7 min read",
    date: "April 2026",
    paragraphs: [
      "AI is genuinely useful. It is also genuinely limited. Pretending otherwise is how people end up disappointed, or worse, wrong in front of their boss.",
      "It can't verify. It will say something with full confidence that is simply not true. The fix isn't to stop using it. The fix is to treat every factual claim like a tip from a stranger on the train: worth checking.",
      "It can't decide. It can lay out options, weigh them, even argue with itself. But the decision — the one that has your name on it — is still yours. That's not a bug. That's the part of your job that matters most."
    ]
  }
];

export function getEssay(slug: string): Essay | undefined {
  return essays.find((e) => e.slug === slug);
}
