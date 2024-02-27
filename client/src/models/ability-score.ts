import { Skill } from "./skill";

export interface AbilityScore {
  index: string;
  name: string;
  full_name: string;
  desc: string[];
  skills: Skill[];
  url: string;
}
