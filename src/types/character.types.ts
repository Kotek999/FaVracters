import { ImageSourcePropType } from "react-native";
import { rarityLabels } from "@/features/caseOpening/consts";
import { CharacterKey } from "@/data/characters/images";

export const RARITY = {
  COMMON: "common",
  RARE: "rare",
  EPIC: "epic",
  LEGENDARY: "legendary",
} as const;

export type Rarity = (typeof RARITY)[keyof typeof RARITY];
export type RarityLabel = keyof typeof rarityLabels;
export type CharacterId = string;

export const CHARACTER_UNIVERSES = [
  "transformers",
  "the_witcher",
  "marvel",
  "dc",
  "star_wars",
  "game",
] as const;

export type CharacterUniverse = (typeof CHARACTER_UNIVERSES)[number];

export const CHARACTER_RACES = [
  "human",
  "witcher",
  "monster",
  "beast",
  "mutant",
  "elf",
  "dwarf",
  "vampire",
  "demon",
  "undead",
  "hellhound",
  "serpent",
  "specter",
  "machine",
  "alien",
  "creature",
  "god",
  "unknown",
] as const;

export type CharacterRace = (typeof CHARACTER_RACES)[number];

export const CHARACTER_ROLES = [
  "leader",
  "warrior",
  "scout",
  "scientist",
  "assassin",
  "support",
  "tank",
  "mage",
  "spirit",
  "hunter",
  "monarch",
  "brute",
  "poison",
  "predator",
  "guardian",
  "sorceress",
  "healer",
  "hydra",
  "strategist",
  "commander",
  "alchemist",
  "engineer",
  "monster",
  "ancient",
  "unknown",
] as const;

export type CharacterRole = (typeof CHARACTER_ROLES)[number];

export const CHARACTER_FACTIONS = [
  "autobot",
  "decepticon",
  "nilfgaard",
  "northern_kingdoms",
  "wild_hunt",
  "neutral",
  "unknown",
] as const;

export type CharacterFaction = (typeof CHARACTER_FACTIONS)[number];

export interface CharacterStats {
  readonly power: number;
  readonly defense: number;
  readonly intelligence: number;
}

export interface CharacterBase {
  readonly id: CharacterId;
  readonly key: CharacterKey;
  readonly name: string;
  readonly rarity: Rarity;
  readonly role: CharacterRole;
  readonly race: CharacterRace;
  readonly universe: CharacterUniverse;
  readonly faction?: CharacterFaction;
  readonly stars: number;
  readonly lore: string;
  readonly stats: CharacterStats;
}

export interface Character extends CharacterBase {
  readonly image: ImageSourcePropType;
}

export interface CharacterWithRating extends Character {
  readonly rating: number;
}

export type CharactersIndex = Record<string, CharacterWithRating>;

export interface CharacterEngine {
  readonly byId: CharactersIndex;
  readonly all: CharacterWithRating[];
  readonly collections: {
    readonly [key: string]: readonly CharacterWithRating[];
  };
}
