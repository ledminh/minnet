export type VerificationStatus = "Verified" | "Partially Verified" | "Not Verified";
export type ConfidenceLevel = "High" | "Medium" | "Low";

export interface FactCheck {
  id: string;
  claim: string;
  verification_status: VerificationStatus;
  confidence_level: ConfidenceLevel;
  sources: string[];
  details?: string;
}

export const factChecks: FactCheck[] = [
  {
    id: "fact-1",
    claim: "Renee Good was shot while in her car.",
    verification_status: "Verified",
    confidence_level: "High",
    sources: ["MPR News", "PBS", "NBC News"],
    details: "Multiple reliable news sources confirmed that Renee Nicole Good was in her vehicle when she was shot during the ICE operation."
  },
  {
    id: "fact-2",
    claim: "The shooting occurred during an ICE operation in Minneapolis on January 7, 2026.",
    verification_status: "Verified",
    confidence_level: "High",
    sources: ["MPR News", "PBS", "NBC News", "Star Tribune"],
    details: "The incident date and location are confirmed by multiple credible news outlets."
  },
  {
    id: "fact-3",
    claim: "Renee Good's vehicle was moving away from the agent when she was shot.",
    verification_status: "Partially Verified",
    confidence_level: "Medium",
    sources: ["Eyewitness accounts", "Local News"],
    details: "Several eyewitnesses claim the vehicle was moving away, but this contradicts the federal account. New video evidence requires further analysis."
  },
  {
    id: "fact-4",
    claim: "Governor Tim Walz disputed the federal account of the incident.",
    verification_status: "Verified",
    confidence_level: "High",
    sources: ["Star Tribune", "MPR News"],
    details: "Governor Walz publicly disputed the federal narrative and demanded accountability."
  },
  {
    id: "fact-5",
    claim: "Video evidence has emerged showing the incident from the ICE agent's perspective.",
    verification_status: "Verified",
    confidence_level: "High",
    sources: ["MPR News", "Star Tribune"],
    details: "New video footage has been reported by multiple news sources, though its full content and implications are still being analyzed."
  },
  {
    id: "fact-6",
    claim: "Renee Good posed no threat at the time of the shooting.",
    verification_status: "Not Verified",
    confidence_level: "Low",
    sources: ["Eyewitness accounts"],
    details: "This claim is based primarily on eyewitness accounts and requires further investigation and evidence to verify definitively."
  },
  {
    id: "fact-7",
    claim: "The incident has sparked public outcry and calls for ICE reform.",
    verification_status: "Verified",
    confidence_level: "High",
    sources: ["CNN", "The Guardian", "MPR News"],
    details: "Multiple news outlets have reported on public demonstrations and calls for reform following the incident."
  },
  {
    id: "fact-8",
    claim: "There are tensions between federal and local authorities regarding the incident.",
    verification_status: "Verified",
    confidence_level: "High",
    sources: ["Star Tribune", "MPR News", "CNN"],
    details: "Local officials, including the governor, have publicly challenged the federal account, indicating clear tensions."
  }
];
