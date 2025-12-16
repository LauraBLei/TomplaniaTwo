export interface Race {
  id: string;
  name: string;
  avatars: string[];
  description: string;
  baseMana: number;
  baseHealth: number;
  statModifiers: Partial<{
    strength: number;
    intelligence: number;
    spirit: number;
    constitution: number;
    dexterity: number;
    charisma: number;
    wisdom: number;
    luck: number;
    agility: number;
  }>;
}

export const RACES: Race[] = [
  {
    id: "human",
    name: "Human",
    avatars: ["/avatars/human1.jpg", "/avatars/human2.jpg"],
    description: "Versatile and adaptable.",
    statModifiers: {
      strength: 1,
      intelligence: 1,
      spirit: 1,
      constitution: 1,
      dexterity: 1,
      charisma: 2,
      wisdom: 1,
      luck: 2,
      agility: 1,
    },
    baseHealth: 100,
    baseMana: 50,
  },
  {
    id: "elf",
    name: "Elf",
    avatars: ["/avatars/elf1.jpg", "/avatars/elf2.jpg"],
    description: "Agile and intelligent.",
    statModifiers: {
      strength: -1,
      intelligence: 3,
      spirit: 2,
      constitution: -1,
      dexterity: 2,
      charisma: 1,
      wisdom: 2,
      luck: 0,
      agility: 3,
    },
    baseHealth: 80,
    baseMana: 70,
  },
  {
    id: "orc",
    name: "Orc",
    avatars: ["/avatars/orc1.jpg", "/avatars/orc2.jpg"],
    description: "Strong and tough.",
    statModifiers: {
      strength: 4,
      intelligence: -2,
      spirit: 1,
      constitution: 3,
      dexterity: -1,
      charisma: -2,
      wisdom: -1,
      luck: 0,
      agility: -1,
    },
    baseHealth: 120,
    baseMana: 30,
  },
];
