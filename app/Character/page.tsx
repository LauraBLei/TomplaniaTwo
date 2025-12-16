"use client";

import { RACES } from "@/data/classes";
import { ArrowLeftCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePlayerStore } from "@/states/player";
import { useRouter } from "next/navigation";

const CharacterCreation = () => {
  const [selectedRace, setSelectedRace] = useState<string | null>(null);
  const [selectedAvatar, setSelectedAvatar] = useState<string | null>(null);
  const [characterName, setCharacterName] = useState("");

  const {
    setName,
    setRace,
    setAvatar,
    setStat,
    setMaxHealth,
    setCurrentHealth,
    setMaxMana,
    setCurrentMana,
  } = usePlayerStore();
  const router = useRouter();

  const currentRace = selectedRace
    ? RACES.find((r) => r.id === selectedRace)
    : null;

  const handleStartGame = () => {
    if (selectedRace && selectedAvatar && characterName && currentRace) {
      setName(characterName);
      setRace(selectedRace);
      setAvatar(selectedAvatar);

      // Set health and mana from race
      setMaxHealth(currentRace.baseHealth);
      setCurrentHealth(currentRace.baseHealth);
      setMaxMana(currentRace.baseMana);
      setCurrentMana(currentRace.baseMana);

      // Set all stats from the race's stat modifiers
      Object.entries(currentRace.statModifiers).forEach(([stat, value]) => {
        setStat(stat, value);
      });

      router.push("/intro");
    } else {
      alert("Please select a race, avatar, and enter a name!");
    }
  };

  return (
    <div className="h-full w-full bg-black text-white p-10">
      <Link href="/">
        <ArrowLeftCircle />
      </Link>
      <div className="flex flex-col gap-10">
        <div id="ClassChoices" className="flex gap-10 my-10 flex-1">
          {RACES.map((race) => {
            return (
              <div
                key={race.id}
                onClick={() => setSelectedRace(race.id)}
                className="flex flex-col items-center justify-center cursor-pointer hover:bg-white/20 transition-colors duration-300 p-4"
              >
                <div className="w-50 h-50 overflow-hidden relative">
                  <Image
                    src={race.avatars[0]}
                    alt={race.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="font-bold mt-2">{race.name}</p>
              </div>
            );
          })}
        </div>
        <div className="flex gap-10">
          <div id="avatars" className="flex flex-col gap-5 flex-1">
            <h2 className="text-2xl">Choose your avatar</h2>
            <div className="flex">
              <div className="flex gap-5 flex-1">
                {currentRace ? (
                  currentRace.avatars.map((avatar, index) => (
                    <div
                      key={index}
                      onClick={() => setSelectedAvatar(avatar)}
                      className={`w-40 h-40 overflow-hidden relative cursor-pointer border-4 transition-colors ${
                        selectedAvatar === avatar
                          ? "border-blue-500"
                          : "border-transparent"
                      } hover:border-white`}
                    >
                      <Image
                        src={avatar}
                        alt={`Avatar ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))
                ) : (
                  <p className="text-gray-400">Select a race to see avatars</p>
                )}
              </div>
              {currentRace && (
                <div className="flex-1 flex flex-col gap-2">
                  <h3 className="text-2xl font-bold">{currentRace.name}</h3>
                  <p>Base Health: {currentRace.baseHealth}</p>
                  <p>Base Mana: {currentRace.baseMana}</p>
                  <p className="mt-2 font-semibold">Stat modifiers:</p>
                  <div className="flex gap-3 flex-wrap">
                    {Object.entries(currentRace.statModifiers).map(
                      ([stat, value]) => (
                        <p key={stat} className="capitalize">
                          {stat}: {value}
                        </p>
                      )
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 flex items-center gap-5">
        <label htmlFor="name" className="block mb-2 text-2xl">
          Character Name
        </label>
        <input
          type="text"
          id="name"
          value={characterName}
          onChange={(e) => setCharacterName(e.target.value)}
          className="px-4 py-2 bg-transparent border border-white rounded w-64 text-white focus:outline-none focus:border-blue-500"
          placeholder="Enter name"
        />
      </div>
      <div className="w-full flex justify-center text-4xl">
        <button
          onClick={handleStartGame}
          className="border border-white px-10 py-2 hover:bg-white/20 cursor-pointer"
        >
          Start Game
        </button>
      </div>
    </div>
  );
};

export default CharacterCreation;
