export type TalentEntry = {
  name: string;
  role: string;
  bio: string;
  photo?: string;
  tone: "olive" | "terracotta" | "sage" | "stone";
  openSlot?: boolean;
  socials?: {
    tiktok?: string;
    instagram?: string;
    youtube?: string;
  };
};

export const talent: TalentEntry[] = [
  {
    name: "Jax Kubo",
    role: "Creator",
    bio: "Content creator represented by Jade Collective.",
    photo: "/talent/jax-kubo.png",
    tone: "olive",
    socials: {
      tiktok: "https://www.tiktok.com/@jaxkubo",
      instagram: "https://www.instagram.com/itsjaxkubo",
      youtube: "https://www.youtube.com/@jaxkubo",
    },
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
