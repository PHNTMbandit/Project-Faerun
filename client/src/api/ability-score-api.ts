import axios from "axios";
import { AbilityScore } from "@/models/ability-score";

export const charisma = await getAbilityScore("cha");
export const constitution = await getAbilityScore("con");
export const dexterity = await getAbilityScore("dex");
export const intelligence = await getAbilityScore("int");
export const strength = await getAbilityScore("str");
export const wisdom = await getAbilityScore("wis");

export const abilityScores = [
  charisma,
  constitution,
  dexterity,
  intelligence,
  strength,
  wisdom,
];

export async function getAbilityScore(index: string): Promise<AbilityScore> {
  try {
    const response = await axios.get<AbilityScore>(
      `https://www.dnd5eapi.co/api/ability-scores/${index}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
