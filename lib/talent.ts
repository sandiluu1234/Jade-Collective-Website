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
    bio: "Content creator represented by Jade Collective. Photo and full bio coming soon.",
    // Real photo pending upload — drop the file in /public/talent/ and set
    // `photo: "/talent/jax-kubo.jpg"` to replace the placeholder block below.
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
