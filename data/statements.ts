export interface OfficialStatement {
  id: string;
  source: string;
  title: string;
  summary: string;
  date: string;
  link: string;
}

export const officialStatements: OfficialStatement[] = [
  {
    id: "statement-1",
    source: "Governor Tim Walz",
    title: "Governor Disputes Federal Account and Demands Accountability",
    summary: "Governor Tim Walz publicly disputed the federal narrative of the shooting incident, calling for transparency and accountability in the investigation. He emphasized the need for a thorough independent investigation.",
    date: "2026-01-09",
    link: "https://www.mprnews.org/story/2026/01/09/walz-demands-accountability"
  },
  {
    id: "statement-2",
    source: "ICE Official Statement",
    title: "ICE Provides Initial Account of the Incident",
    summary: "Federal immigration officials provided an initial account of the incident, stating that the agent acted in accordance with protocols during the operation.",
    date: "2026-01-07",
    link: "https://www.ice.gov/official-statement"
  },
  {
    id: "statement-3",
    source: "Minneapolis Mayor",
    title: "Mayor Calls for Independent Investigation",
    summary: "The Mayor of Minneapolis called for an independent investigation into the shooting, expressing concern about the use of lethal force and its impact on the community.",
    date: "2026-01-08",
    link: "https://www.minneapolis.gov/mayor-statement"
  },
  {
    id: "statement-4",
    source: "Local Law Enforcement",
    title: "Local Police Express Concerns Over Federal Operations",
    summary: "Local law enforcement officials expressed concerns about federal immigration operations conducted in their jurisdiction without proper coordination.",
    date: "2026-01-09",
    link: "https://www.localnews.com/police-statement"
  }
];
