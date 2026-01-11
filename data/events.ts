export interface EventSource {
  name: string;
  link: string;
}

export interface Event {
  date: string;
  description: string;
  details?: string;
  sources: EventSource[];
}

export const events: Event[] = [
  {
    date: "2026-01-07",
    description: "Renee Good shot during ICE operation",
    details: "Renee Nicole Good, 37, was shot and killed during an ICE operation in Minneapolis. Initial reports confirmed her death while in her vehicle.",
    sources: [
      {
        name: "MPR News",
        link: "https://www.mprnews.org/story/2026/01/07/shooting-south-minneapolis-ice-agents-federal-operation"
      },
      {
        name: "PBS",
        link: "https://www.pbs.org/newshour/politics/ice-shooting-minneapolis"
      },
      {
        name: "NBC News",
        link: "https://www.nbcnews.com/news/us-news/ice-shooting-minneapolis"
      }
    ]
  },
  {
    date: "2026-01-08",
    description: "Eyewitness accounts surface contradicting federal narrative",
    details: "Multiple eyewitness accounts emerged claiming Good's vehicle was moving away from the agent when she was shot. Local officials expressed concerns about the incident.",
    sources: [
      {
        name: "MPR News",
        link: "https://www.mprnews.org/story/2026/01/08/eyewitness-accounts-ice-shooting"
      },
      {
        name: "Local News",
        link: "https://www.localnews.com/minneapolis-ice-incident"
      }
    ]
  },
  {
    date: "2026-01-09",
    description: "Governor Walz disputes federal account",
    details: "Governor Tim Walz and other officials publicly disputed the federal account, demanding accountability. New video footage emerged showing the incident from the ICE agent's perspective.",
    sources: [
      {
        name: "Star Tribune",
        link: "https://www.startribune.com/walz-disputes-ice-account"
      },
      {
        name: "MPR News",
        link: "https://www.mprnews.org/story/2026/01/09/walz-demands-accountability"
      }
    ]
  },
  {
    date: "2026-01-10",
    description: "Media reports on growing community tensions",
    details: "Various media outlets reported on the implications of the shooting, highlighting growing tensions in the community and calls for reform in ICE operations.",
    sources: [
      {
        name: "CNN",
        link: "https://www.cnn.com/ice-shooting-tensions"
      },
      {
        name: "The Guardian",
        link: "https://www.theguardian.com/minneapolis-ice-incident"
      }
    ]
  }
];
