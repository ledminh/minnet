export interface EyewitnessAccount {
  id: string;
  name: string;
  location: {
    lat: number;
    lng: number;
    description: string;
  };
  testimony: string;
  date: string;
}

export const eyewitnessAccounts: EyewitnessAccount[] = [
  {
    id: "witness-1",
    name: "Anonymous Witness A",
    location: {
      lat: 44.9478,
      lng: -93.2650,
      description: "South Minneapolis, near incident location"
    },
    testimony: "I saw the vehicle moving away from the agent when shots were fired. It appeared the driver was trying to leave the area, not advance toward anyone.",
    date: "2026-01-08"
  },
  {
    id: "witness-2",
    name: "Anonymous Witness B",
    location: {
      lat: 44.9482,
      lng: -93.2645,
      description: "Nearby intersection"
    },
    testimony: "I heard the gunshots and saw the aftermath. The vehicle had moved several feet from where the agents were positioned.",
    date: "2026-01-08"
  },
  {
    id: "witness-3",
    name: "Anonymous Witness C",
    location: {
      lat: 44.9475,
      lng: -93.2655,
      description: "Residential area across the street"
    },
    testimony: "From my window, I could see the ICE vehicles and the incident unfolding. The situation escalated very quickly, and I don't believe the driver posed a threat.",
    date: "2026-01-08"
  },
  {
    id: "witness-4",
    name: "Anonymous Witness D",
    location: {
      lat: 44.9480,
      lng: -93.2648,
      description: "Commercial area nearby"
    },
    testimony: "I was working nearby when I heard the commotion. By the time I looked out, there were multiple law enforcement vehicles at the scene.",
    date: "2026-01-08"
  }
];
