export interface IWeaponItem {
  picUrl: string;
  name: string;
  modifier: number;
  damage: string;
  damageType: string;
}

export interface ICombatant {
  picUrl: string;
  name: string;
  race: string;
  background: string;
  level: string;
  class: string;
  subclass: string;
  alignment: string;
  initiative: number;
  armorClass: number;
  proficiencyBonus: number;
  currentHP: number;
  maxHP: number;
  tempHP: number;
  speed: number;
  // conditions?: string[];
  weapons: IWeaponItem[];
  // abilities?: [string];
  // kiPoints: number;
  // sorceryPoints: number;
  // spells: [string];
  // spellSlots?: [string];
  // spellSaveDC: number;
  // spellAttackMod: number;
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
  // items?: [];
  // deathSaves?: [];
}