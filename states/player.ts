import { create } from "zustand";
import { persist } from "zustand/middleware";

interface PlayerState {
  name: string;
  race: string;
  avatar: string;
  maxMana: number;
  currentMana: number;
  maxHealth: number;
  currentHealth: number;
  coins: number;
  skillPoints: number;
  totalSkillPoints: number;
  xp: number;
  level: number;
  stats: {
    strength: number;
    intelligence: number;
    spirit: number;
    constitution: number;
    dexterity: number;
    charisma: number;
    wisdom: number;
    luck: number;
    agility: number;
  };
  skills: object[];
  setName: (name: string) => void;
  setRace: (race: string) => void;
  setAvatar: (avatar: string) => void;
  setMaxMana: (maxMana: number) => void;
  setCurrentMana: (currentMana: number) => void;
  setMaxHealth: (maxHealth: number) => void;
  setCurrentHealth: (currentHealth: number) => void;
  setCoins: (coins: number) => void;
  setSkillPoints: (skillPoints: number) => void;
  setTotalSkillPoints: (totalSkillPoints: number) => void;
  setXp: (xp: number) => void;
  setLevel: (level: number) => void;
  setStat: (stat: string, value: number) => void;
  addSkill: (skill: object) => void;
}

export const usePlayerStore = create<PlayerState>()(
  persist(
    (set) => ({
      name: "",
      race: "",
      avatar: "",
      maxHealth: 0,
      currentHealth: 0,
      maxMana: 0,
      currentMana: 0,
      coins: 0,
      skillPoints: 0,
      totalSkillPoints: 0,
      xp: 0,
      level: 0,
      stats: {
        strength: 0,
        intelligence: 0,
        spirit: 0,
        constitution: 0,
        dexterity: 0,
        charisma: 0,
        wisdom: 0,
        luck: 0,
        agility: 0,
      },
      skills: [],
      setName: (name) => set({ name }),
      setRace: (race) => set({ race }),
      setAvatar: (avatar) => set({ avatar }),
      setMaxHealth: (maxHealth) => set({ maxHealth }),
      setCurrentHealth: (currentHealth) => set({ currentHealth }),
      setMaxMana: (maxMana) => set({ maxMana }),
      setCurrentMana: (currentMana) => set({ currentMana }),
      setCoins: (coins) => set({ coins }),
      setSkillPoints: (skillPoints) => set({ skillPoints }),
      setTotalSkillPoints: (totalSkillPoints) => set({ totalSkillPoints }),
      setXp: (xp) => set({ xp }),
      setLevel: (level) => set({ level }),
      setStat: (stat, value) =>
        set((state) => ({ stats: { ...state.stats, [stat]: value } })),
      addSkill: (skill) =>
        set((state) => ({ skills: [...state.skills, skill] })),
    }),
    {
      name: "player-storage", // name of item in localStorage
    }
  )
);
