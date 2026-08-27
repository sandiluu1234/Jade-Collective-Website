export type TalentEntry = {
  name: string;
  role: string;
  bio: string;
  photo?: string;
  tone: "olive" | "terracotta" | "sage" | "stone";
  openSlot?: boolean;
};

export const talent: TalentEntry[] = [
  {
    name: "Jax Kubo",
    role: "Creator",
    bio: "Content creator represented by Jade Collective.",
    photo: "/talent/jax-kubo.png",
    tone: "olive",
  },
  {
    name: "Your Next Talent",
    role: "Open Slot",
    bio: "Reserved for your next signed creator, model, or performer.",
    tone: "stone",
    openSlot: true,
  },
  {
    name: "Your Next Talent",
    role: "Open Slot",
    bio: "Reserved for your next signed creator, model, or performer.",
    tone: "sage",
    openSlot: true,
  },
];
