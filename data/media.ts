export interface MediaArticle {
  id: string;
  source: string;
  title: string;
  summary: string;
  perspective: string;
  date: string;
  link: string;
  category: "Local" | "National" | "International";
}

export const mediaArticles: MediaArticle[] = [
  {
    id: "media-1",
    source: "MPR News",
    title: "Shooting in South Minneapolis During ICE Operation",
    summary: "Minnesota Public Radio provides comprehensive coverage of the incident, including eyewitness accounts and official statements.",
    perspective: "Balanced reporting with focus on local impact and community response",
    date: "2026-01-07",
    link: "https://www.mprnews.org/story/2026/01/07/shooting-south-minneapolis-ice-agents-federal-operation",
    category: "Local"
  },
  {
    id: "media-2",
    source: "PBS NewsHour",
    title: "ICE Shooting in Minneapolis Raises Questions About Use of Force",
    summary: "National coverage examining the incident in the context of federal immigration enforcement policies.",
    perspective: "National perspective on immigration enforcement and use of lethal force",
    date: "2026-01-08",
    link: "https://www.pbs.org/newshour/politics/ice-shooting-minneapolis",
    category: "National"
  },
  {
    id: "media-3",
    source: "NBC News",
    title: "Fatal ICE Shooting Sparks Controversy in Minneapolis",
    summary: "National news coverage highlighting the controversy and conflicting accounts of the incident.",
    perspective: "Focus on controversy and conflicting narratives",
    date: "2026-01-07",
    link: "https://www.nbcnews.com/news/us-news/ice-shooting-minneapolis",
    category: "National"
  },
  {
    id: "media-4",
    source: "Star Tribune",
    title: "Governor Walz Challenges Federal Account of ICE Shooting",
    summary: "Local coverage of Governor Walz's public statements and demands for accountability.",
    perspective: "Local government response and calls for transparency",
    date: "2026-01-09",
    link: "https://www.startribune.com/walz-disputes-ice-account",
    category: "Local"
  },
  {
    id: "media-5",
    source: "CNN",
    title: "Minneapolis ICE Shooting Highlights Tensions Over Immigration Enforcement",
    summary: "Analysis of the broader implications for immigration policy and federal-local relations.",
    perspective: "National policy implications and political tensions",
    date: "2026-01-10",
    link: "https://www.cnn.com/ice-shooting-tensions",
    category: "National"
  },
  {
    id: "media-6",
    source: "The Guardian",
    title: "US Immigration Enforcement Under Scrutiny After Fatal Minneapolis Shooting",
    summary: "International coverage examining US immigration policies and enforcement practices.",
    perspective: "International perspective on US immigration enforcement",
    date: "2026-01-10",
    link: "https://www.theguardian.com/minneapolis-ice-incident",
    category: "International"
  }
];
