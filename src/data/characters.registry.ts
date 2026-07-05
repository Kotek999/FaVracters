import { optimusPrime } from "./characters/transformers/optimusPrime";
import { bumblebee } from "./characters/transformers/bumblebee";
import { ironhide } from "./characters/transformers/ironhide";
import { ratchet } from "./characters/transformers/ratchet";
import { jazz } from "./characters/transformers/jazz";
import { arcee } from "./characters/transformers/arcee";
import { mirage } from "./characters/transformers/mirage";
import { wheeljack } from "./characters/transformers/wheeljack";
import { grimlock } from "./characters/transformers/grimlock";
import { hotrod } from "./characters/transformers/hotrod";
import { megatron } from "./characters/transformers/megatron";
import { starscream } from "./characters/transformers/starscream";
import { shockwave } from "./characters/transformers/shockwave";
import { soundwave } from "./characters/transformers/soundwave";
import { blackout } from "./characters/transformers/blackout";
import { barricade } from "./characters/transformers/barricade";
import { bonecrusher } from "./characters/transformers/bonecrusher";
import { brawl } from "./characters/transformers/brawl";
import { lockdown } from "./characters/transformers/lockdown";
import { fallen } from "./characters/transformers/fallen";
import { CharacterBase } from "@/features/caseOpening/types";

export const charactersRegistry = {
  optimusPrime,
  bumblebee,
  ironhide,
  ratchet,
  jazz,
  arcee,
  mirage,
  wheeljack,
  grimlock,
  hotrod,
  megatron,
  starscream,
  shockwave,
  soundwave,
  blackout,
  barricade,
  bonecrusher,
  brawl,
  lockdown,
  fallen,
} satisfies Record<string, CharacterBase>;
