import React, { useState } from 'react';
import { Star, Plus, X, Search, Filter, Sword, Shield, Zap, Heart }
    from 'lucide-react';

// COMPLETE RUSH ROYALE CARD DATABASE - ALL 72 CARDS WITH FULL LEVEL PROGRESSION
const rushRoyaleCards = [
    // ===== LEGENDARY CARDS (18 TOTAL) =====
    {
        id: 1,
        name: "Harlequin",
        rarity: "Legendary",
        class: "Special",
        faction: "Dark Domain",
        image: "https://via.placeholder.com/150x150/FFD700/000000?text=Harlequin",
        base_stats: { damage: 42, attack_speed: 1.0, range: "First",
            target: "First", morale: 3 },
        levels: [
            { level: 1, damage: 42, morale: 3 }, { level: 2, damage: 47,
                morale: 3.1 },
            { level: 3, damage: 52, morale: 3.2 }, { level: 4, damage: 58,
                morale: 3.3 },
            { level: 5, damage: 64, morale: 3.4 }, { level: 6, damage: 71,
                morale: 3.5 },
            { level: 7, damage: 79, morale: 3.6 }, { level: 8, damage: 88,
                morale: 3.7 },
            { level: 9, damage: 98, morale: 3.8 }
        ],
        talents: [{ name: "Copy Unit", description: "When merged, creates a copy of any unit with the same merge rank." }],
            description: "When merged, creates a copy of any unit with the same merge rank."
        },
    {
        id: 2,
        name: "Dryad",
        rarity: "Legendary",
        class: "Support",
        faction: "Forest Alliance",
        image: "https://via.placeholder.com/150x150/FFD700/000000?text=Dryad",
        base_stats: { damage: 28, attack_speed: 1.0, range: "First",
            target: "First", morale: 3 },
        levels: [
            { level: 1, damage: 28, morale: 3 }, { level: 2, damage: 31,
                morale: 3.1 },
            { level: 3, damage: 34, morale: 3.2 }, { level: 4, damage: 38,
                morale: 3.3 },
            { level: 5, damage: 42, morale: 3.4 }, { level: 6, damage: 47,
                morale: 3.5 },
            { level: 7, damage: 52, morale: 3.6 }, { level: 8, damage: 58,
                morale: 3.7 },
            { level: 9, damage: 65, morale: 3.8 }
        ],
        talents: [{ name: "Merge Boost", description: "Increases the merging rank of the unit it merges with." }],
            description: "Increases the merging rank of the unit it merges with."
        },
    {
        id: 3,
        name: "Blade Dancer",
        rarity: "Legendary",
        class: "Damage",
        faction: "Forest Alliance",
        image: "https://via.placeholder.com/150x150/FFD700/000000?text=Blade+Dancer",
        base_stats: { damage: 215, attack_speed: 1.0, range: "First",
            target: "First", morale: 1.7 },
        levels: [
            { level: 1, damage: 215, morale: 1.7 }, { level: 2, damage: 240,
                morale: 1.75 },
            { level: 3, damage: 268, morale: 1.8 }, { level: 4, damage: 299,
                morale: 1.85 },
            { level: 5, damage: 333, morale: 1.9 }, { level: 6, damage: 372,
                morale: 1.95 },
            { level: 7, damage: 415, morale: 2.0 }, { level: 8, damage: 463,
                morale: 2.05 },
            { level: 9, damage: 517, morale: 2.1 }
        ],
        talents: [{ name: "Enhanced Mode", description: "Without nearby Dancers, gains attack speed bonus." }],
            description: "Without any Dancers nearby, enters enhanced mode."
        },
    {
        id: 4,
        name: "Inquisitor",
        rarity: "Legendary",
        class: "Damage",
        faction: "Kingdom of Light",
        image: "https://via.placeholder.com/150x150/FFD700/000000?text=Inquisitor",
        base_stats: { damage: 145, attack_speed: 1.0, range: "First",
            target: "First", morale: 2.8 },
        levels: [
            { level: 1, damage: 145, morale: 2.8 }, { level: 2, damage: 162,
                morale: 2.85 },
            { level: 3, damage: 181, morale: 2.9 }, { level: 4, damage: 202,
                morale: 2.95 },
            { level: 5, damage: 225, morale: 3.0 }, { level: 6, damage: 251,
                morale: 3.05 },
            { level: 7, damage: 280, morale: 3.1 }, { level: 8, damage: 312,
                morale: 3.15 },
            { level: 9, damage: 348, morale: 3.2 }
        ],
        talents: [{ name: "Damage Scaling", description: "Each hit on same target increases damage." }],
            description: "Each hit on the same target increases its damage."
        },
    {
        id: 5,
        name: "Boreas",
        rarity: "Legendary",
        class: "Damage",
        faction: "Forest Alliance",
        image: "https://via.placeholder.com/150x150/FFD700/000000?text=Boreas",
        base_stats: { damage: 120, attack_speed: 1.0, range: "First",
            target: "First" },
        levels: [
            { level: 1, damage: 120 }, { level: 2, damage: 134 }, { level:
                    3, damage: 149 },
            { level: 4, damage: 166 }, { level: 5, damage: 185 }, { level:
                    6, damage: 207 },
            { level: 7, damage: 231, }, { level: 8, damage: 258 }, { level:
                    9, damage: 288 }
        ],
        talents: [{ name: "Phase Change", description: "Periodically changes firing phase." }],
            description: "Periodically changes firing phase for different attack patterns."
        },
    {
        id: 6,
        name: "Summoner",
        rarity: "Legendary",
        class: "Support",
        faction: "Forest Alliance",
        image: "https://via.placeholder.com/150x150/FFD700/000000?text=Summoner",
        base_stats: { damage: 70, attack_speed: 1.0, range: "First",
            target: "First" },
        levels: [
            { level: 1, damage: 70 }, { level: 2, damage: 78 }, { level: 3,
                damage: 87 },
            { level: 4, damage: 97 }, { level: 5, damage: 108 }, { level: 6,
                damage: 121 },
            { level: 7, damage: 135 }, { level: 8, damage: 151 }, { level:
                    9, damage: 168 }
        ],
        talents: [{ name: "Summon Unit", description: "When merged, summons random unit to free tile." }],
            description: "When merged, summons a random unit to a free tile."
        },
    {
        id: 7,
        name: "Shaman",
        rarity: "Legendary",
        class: "Special",
        faction: "Dark Domain",
        image: "https://via.placeholder.com/150x150/FFD700/000000?text=Shaman",
        base_stats: { damage: 90, attack_speed: 1.0, range: "First",
            target: "First" },
        levels: [
            { level: 1, damage: 90 }, { level: 2, damage: 100 }, { level: 3,
                damage: 112 },
            { level: 4, damage: 125 }, { level: 5, damage: 139 }, { level:
                    6, damage: 155 },
            { level: 7, damage: 173 }, { level: 8, damage: 193 }, { level:
                    9, damage: 215 }
        ],
        talents: [{ name: "Rank Control", description: "Reduces enemy unit rank in PvP." }],
            description: "When merged, stuns unit and applies rank reduction effect."
        },
    {
        id: 8,
        name: "Meteor",
        rarity: "Legendary",
        class: "Damage",
        faction: "Magic Council",
        image: "https://via.placeholder.com/150x150/FFD700/000000?text=Meteor",
        base_stats: { damage: 200, attack_speed: 1.0, range: "AoE",
            target: "First" },
        levels: [
            { level: 1, damage: 200 }, { level: 2, damage: 223 }, { level:
                    3, damage: 249 },
            { level: 4, damage: 278 }, { level: 5, damage: 310 }, { level:
                    6, damage: 346 },
            { level: 7, damage: 386 }, { level: 8, damage: 431 }, { level:
                    9, damage: 481 }
        ],
        talents: [{ name: "Meteorite Drop", description: "When merged, drops meteorite on enemies." }],
            description: "When merged, drops a meteorite down on enemies."
        },
    {
        id: 9,
        name: "Frost",
        rarity: "Legendary",
        class: "Debuff",
        faction: "Dark Domain",
        image: "https://via.placeholder.com/150x150/FFD700/000000?text=Frost",
        base_stats: { damage: 55, attack_speed: 1.0, range: "AoE", target:
                "First" },
        levels: [
            { level: 1, damage: 55 }, { level: 2, damage: 61 }, { level: 3,
                damage: 68 },
            { level: 4, damage: 76 }, { level: 5, damage: 85 }, { level: 6,
                damage: 95 },
            { level: 7, damage: 106 }, { level: 8, damage: 118 }, { level:
                    9, damage: 132 }
        ],
        talents: [{ name: "Blizzard", description: "Throws blizzard that slows all opponents." }],
            description: "Throws a blizzard at opponents every several seconds."
        },
    {
        id: 10,
        name: "Knight Statue",
        rarity: "Legendary",
        class: "Support",
        faction: "Kingdom of Light",
        image: "https://via.placeholder.com/150x150/FFD700/000000?text=Knight+Statue",
        base_stats: { damage: 0, attack_speed: 0, range: "Support",
            target: "None" },
        levels: [
            { level: 1, damage: 0 }, { level: 2, damage: 0 }, { level: 3, damage: 0 },
            { level: 4, damage: 0 }, { level: 5, damage: 0 }, { level: 6, damage: 0 },
            { level: 7, damage: 0 }, { level: 8, damage: 0 }, { level: 9, damage: 0 }
        ],
        talents: [{ name: "Attack Speed Boost", description: "Increases attack speed of neighboring units." }],
            description: "Increases the attack speed of neighboring units."
        },
    {
        id: 11,
        name: "Hex",
        rarity: "Legendary",
        class: "Support",
        faction: "Dark Domain",
        image: "https://via.placeholder.com/150x150/FFD700/000000?text=Hex",
        base_stats: { damage: 0, attack_speed: 0, range: "Support",
            target: "None" },
        levels: [
            { level: 1, damage: 0 }, { level: 2, damage: 0 }, { level: 3, damage: 0 },
            { level: 4, damage: 0 }, { level: 5, damage: 0 }, { level: 6, damage: 0 },
            { level: 7, damage: 0 }, { level: 8, damage: 0 }, { level: 9, damage: 0 }
        ],
        talents: [{ name: "Instant Kill Chance", description: "Gives instant kill chance to 4 neighboring units." }],
            description: "Gives an instant kill chance to 4 neighboring units."
        },
    {
        id: 12,
        name: "Trapper",
        rarity: "Legendary",
        class: "Debuff",
        faction: "Forest Alliance",
        image: "https://via.placeholder.com/150x150/FFD700/000000?text=Trapper",
        base_stats: { damage: 60, attack_speed: 1.0, range: "First",
            target: "First" },
        levels: [
            { level: 1, damage: 60 }, { level: 2, damage: 67 }, { level: 3,
                damage: 75 },
            { level: 4, damage: 83 }, { level: 5, damage: 93 }, { level: 6,
                damage: 104 },
            { level: 7, damage: 116 }, { level: 8, damage: 129 }, { level:
                    9, damage: 144 }
        ],
        talents: [{ name: "Net Trap", description: "Periodically throws nets that slow monsters." }],
            description: "Periodically throws monster-slowing nets onto battlefield."
        },
    {
        id: 13,
        name: "Corsair",
        rarity: "Legendary",
        class: "Damage",
        faction: "Technogenic Society",
        image: "https://via.placeholder.com/150x150/FFD700/000000?text=Corsair",
        base_stats: { damage: 85, attack_speed: 1.0, range: "None",
            target: "None" },
        levels: [
            { level: 1, damage: 85 }, { level: 2, damage: 95 }, { level: 3,
                damage: 106 },
            { level: 4, damage: 118 }, { level: 5, damage: 132 }, { level:
                    6, damage: 147 },
            { level: 7, damage: 164 }, { level: 8, damage: 183 }, { level:
                    9, damage: 204 }
        ],
        talents: [{ name: "Explosive Traps", description: "Leaves explosive traps on battlefield." }],
            description: "The Corsair leaves explosive traps on the battlefield."
        },
    {
        id: 14,
        name: "Demon Hunter",
        rarity: "Legendary",
        class: "Damage",
        faction: "Magic Council",
        image: "https://via.placeholder.com/150x150/FFD700/000000?text=Demon+Hunter",
        base_stats: { damage: 100, attack_speed: 1.0, range: "First",
            target: "First" },
        levels: [
            { level: 1, damage: 100 }, { level: 2, damage: 112 }, { level:
                    3, damage: 125 },
            { level: 4, damage: 139 }, { level: 5, damage: 155 }, { level:
                    6, damage: 173 },
            { level: 7, damage: 193 }, { level: 8, damage: 215 }, { level:
                    9, damage: 240 }
        ],
        talents: [{ name: "Multi-Target", description: "Attacks multiple first targets equal to merge rank." }],
            description: "Attacks a number of first targets equal to her merge rank."
        },
    {
        id: 15,
        name: "Demonologist",
        rarity: "Legendary",
        class: "Special",
        faction: "Dark Domain",
        image: "https://via.placeholder.com/150x150/FFD700/000000?text=Demonologist",
        base_stats: { damage: 70, attack_speed: 1.0, range: "First",
            target: "First" },
        levels: [
            { level: 1, damage: 70 }, { level: 2, damage: 78 }, { level: 3,
                damage: 87 },
            { level: 4, damage: 97 }, { level: 5, damage: 108 }, { level: 6,
                damage: 121 },
            { level: 7, damage: 135 }, { level: 8, damage: 151 }, { level:
                    9, damage: 168 }
        ],
        talents: [{ name: "Summon Monster", description: "When merged, summons monster to opponent's side." }],
            description: "When merged summons a monster to the opponent's side."
        },
    {
        id: 16,
        name: "Cultist",
        rarity: "Legendary",
        class: "Damage",
        faction: "Dark Domain",
        image: "https://via.placeholder.com/150x150/FFD700/000000?text=Cultist",
        base_stats: { damage: 80, attack_speed: 1.0, range: "First",
            target: "First" },
        levels: [
            { level: 1, damage: 80 }, { level: 2, damage: 89 }, { level: 3,
                damage: 99 },
            { level: 4, damage: 111 }, { level: 5, damage: 124 }, { level:
                    6, damage: 138 },
            { level: 7, damage: 154 }, { level: 8, damage: 172 }, { level:
                    9, damage: 192 }
        ],
        talents: [{ name: "Cultist Synergy", description: "With 1-3 nearby, attacks additional targets." }],
            description: "With 1-3 cultists nearby, begins attacking additional targets."
        },
    {
        id: 17,
        name: "Stasis",
        rarity: "Legendary",
        class: "Debuff",
        faction: "Magic Council",
        image: "https://via.placeholder.com/150x150/FFD700/000000?text=Stasis",
        base_stats: { damage: 45, attack_speed: 1.0, range: "First",
            target: "First" },
        levels: [
            { level: 1, damage: 45 }, { level: 2, damage: 50 }, { level: 3,
                damage: 56 },
            { level: 4, damage: 62 }, { level: 5, damage: 69 }, { level: 6,
                damage: 77 },
            { level: 7, damage: 86 }, { level: 8, damage: 96 }, { level: 9,
                damage: 107 }
        ],
        talents: [{ name: "Time Control", description: "Creates spheres that stop enemies in place." }],
            description: "Creates time control spheres that stop enemies in place."
        },
    {
        id: 18,
        name: "Clock of Power",
        rarity: "Legendary",
        class: "Support",
        faction: "Kingdom of Light",
        image: "https://via.placeholder.com/150x150/FFD700/000000?text=Clock+of+Power",
        base_stats: { damage: 0, attack_speed: 0, range: "Support",
            target: "None" },
        levels: [
            { level: 1, damage: 0 }, { level: 2, damage: 0 }, { level: 3, damage: 0 },
            { level: 4, damage: 0 }, { level: 5, damage: 0 }, { level: 6, damage: 0 },
            { level: 7, damage: 0 }, { level: 8, damage: 0 }, { level: 9, damage: 0 }
        ],
        talents: [{ name: "Speed Control", description: "Lowers enemy or increases ally attack speed." }],
            description: "Lowers (PvP) or increases (PvE) attack speed of other player's units."
        },

    // ===== EPIC CARDS (18 TOTAL) =====
    {
        id: 19,
        name: "Vampire",
        rarity: "Epic",
        class: "Support",
        faction: "Dark Domain",
        image: "https://via.placeholder.com/150x150/A855F7/FFFFFF?text=Vampire",
        base_stats: { damage: 52, activation_interval: "7.5s", range:
                "First", target: "First" },
        levels: [
            { level: 1, damage: 52 }, { level: 2, damage: 59 }, { level: 3,
                damage: 67 },
            { level: 4, damage: 76 }, { level: 5, damage: 86 }, { level: 6,
                damage: 98 },
            { level: 7, damage: 111 }, { level: 8, damage: 126 }, { level:
                    9, damage: 143 },
            { level: 10, damage: 162 }, { level: 11, damage: 184 }
        ],
        talents: [{ name: "Mana Bite", description: "Bites target, making it periodically give mana." }],
            description: "Bites the target, making it periodically give mana."
        },
    {
        id: 20,
        name: "Engineer",
        rarity: "Epic",
        class: "Damage",
        faction: "Technogenic Society",
        image: "https://via.placeholder.com/150x150/A855F7/FFFFFF?text=Engineer",
        base_stats: { damage: 350, attack_speed: 0.9, range: "First",
            target: "First" },
        levels: [
            { level: 1, damage: 350 }, { level: 2, damage: 397 }, { level:
                    3, damage: 450 },
            { level: 4, damage: 510 }, { level: 5, damage: 578 }, { level:
                    6, damage: 655 },
            { level: 7, damage: 743 }, { level: 8, damage: 842 }, { level:
                    9, damage: 954 },
            { level: 10, damage: 1081 }, { level: 11, damage: 1225 }
        ],
        talents: [{ name: "Engineer Synergy", description: "Connects with other Engineers for damage boost." }],
            description: "Connects with other Engineers for increased damage."
        },
    {
        id: 21,
        name: "Plague Doctor",
        rarity: "Epic",
        class: "Damage",
        faction: "Magic Council",
        image: "https://via.placeholder.com/150x150/A855F7/FFFFFF?text=Plague+Doctor",
        base_stats: { damage: 95, attack_speed: 1.1, range: "First",
            target: "First" },
        levels: [
            { level: 1, damage: 95 }, { level: 2, damage: 108 }, { level: 3,
                damage: 122 },
            { level: 4, damage: 138 }, { level: 5, damage: 157 }, { level:
                    6, damage: 178 },
            { level: 7, damage: 202 }, { level: 8, damage: 229 }, { level:
                    9, damage: 259 },
            { level: 10, damage: 294 }, { level: 11, damage: 333 }
        ],
        talents: [{ name: "Disease", description: "Causes damage to enemies with plague effects." }],
            description: "Good in PvP but not Co-Op. Causes damage to enemies."
        },
    {
        id: 22,
        name: "Thunderer",
        rarity: "Epic",
        class: "Damage",
        faction: "Magic Council",
        image: "https://via.placeholder.com/150x150/A855F7/FFFFFF?text=Thunderer",
        base_stats: { damage: 180, attack_speed: 1.0, range: "First",
            target: "First" },
        levels: [
            { level: 1, damage: 180 }, { level: 2, damage: 204 }, { level:
                    3, damage: 231 },
            { level: 4, damage: 262 }, { level: 5, damage: 297 }, { level:
                    6, damage: 337 },
            { level: 7, damage: 382 }, { level: 8, damage: 433 }, { level:
                    9, damage: 491 },
            { level: 10, damage: 557 }, { level: 11, damage: 631 }
        ],
        talents: [{ name: "Chain Lightning", description: "Lightning attacks can chain to nearby enemies." }],
            description: "Powerful lightning attacks with chain damage potential."
        },
    {
        id: 23,
        name: "Executioner",
        rarity: "Epic",
        class: "Damage",
        faction: "Kingdom of Light",
        image: "https://via.placeholder.com/150x150/A855F7/FFFFFF?text=Executioner",
        base_stats: { damage: 200, attack_speed: 0.8, range: "First",
            target: "First" },
        levels: [
            { level: 1, damage: 200 }, { level: 2, damage: 227 }, { level:
                    3, damage: 257 },
            { level: 4, damage: 292 }, { level: 5, damage: 331 }, { level:
                    6, damage: 375 },
            { level: 7, damage: 425 }, { level: 8, damage: 482 }, { level:
                    9, damage: 547 },
            { level: 10, damage: 620 }, { level: 11, damage: 703 }
        ],
        talents: [{ name: "Execute", description: "Has chance to instantly kill low-health enemies." }],
            description: "Powerful attacker with execution potential."
        },
    {
        id: 24,
        name: "Mime",
        rarity: "Epic",
        class: "Special",
        faction: "Magic Council",
        image: "https://via.placeholder.com/150x150/A855F7/FFFFFF?text=Mime",
        base_stats: { damage: 60, attack_speed: 1.0, range: "First",
            target: "First" },
        levels: [
            { level: 1, damage: 60 }, { level: 2, damage: 68 }, { level: 3,
                damage: 77 },
            { level: 4, damage: 87 }, { level: 5, damage: 99 }, { level: 6,
                damage: 112 },
            { level: 7, damage: 127 }, { level: 8, damage: 144 }, { level:
                    9, damage: 163 },
            { level: 10, damage: 185 }, { level: 11, damage: 209 }
        ],
        talents: [{ name: "Versatile Merge", description: "Can merge with any other unit of same rank." }],
            description: "Can merge with any other unit of the same rank."
        },
    {
        id: 25,
        name: "Reaper",
        rarity: "Epic",
        class: "Damage",
        faction: "Dark Domain",
        image: "https://via.placeholder.com/150x150/A855F7/FFFFFF?text=Reaper",
        base_stats: { damage: 80, attack_speed: 1.0, range: "Random",
            target: "Random" },
        levels: [
            { level: 1, damage: 80 }, { level: 2, damage: 91 }, { level: 3,
                damage: 103 },
            { level: 4, damage: 117 }, { level: 5, damage: 132 }, { level:
                    6, damage: 150 },
            { level: 7, damage: 170 }, { level: 8, damage: 193 }, { level:
                    9, damage: 219 },
            { level: 10, damage: 248 }, { level: 11, damage: 281 }
        ],
        talents: [{ name: "Instant Kill", description: "Attacks have chance to instantly kill target." }],
            description: "Attacks have a chance to instantly killing the target."
        },
    {
        id: 26,
        name: "Gargoyle",
        rarity: "Epic",
        class: "Damage",
        faction: "Dark Domain",
        image: "https://via.placeholder.com/150x150/A855F7/FFFFFF?text=Gargoyle",
        base_stats: { damage: 90, attack_speed: 1.0, range: "First",
            target: "First" },
        levels: [
            { level: 1, damage: 90 }, { level: 2, damage: 102 }, { level: 3,
                damage: 116 },
            { level: 4, damage: 131 }, { level: 5, damage: 149 }, { level:
                    6, damage: 169 },
            { level: 7, damage: 191 }, { level: 8, damage: 217 }, { level:
                    9, damage: 246 },
            { level: 10, damage: 279 }, { level: 11, damage: 316 }
        ],
        talents: [{ name: "Even/Odd Mechanics", description: "Performance varies based on merge rank." }],
            description: "Even and odd merge ranks affect its performance differently."
        },
    {
        id: 27,
        name: "Crystalmancer",
        rarity: "Epic",
        class: "Damage",
        faction: "Magic Council",
        image: "https://via.placeholder.com/150x150/A855F7/FFFFFF?text=Crystalmancer",
        base_stats: { damage: 120, attack_speed: 1.0, range: "First",
            target: "First" },
        levels: [
            { level: 1, damage: 120 }, { level: 2, damage: 136 }, { level:
                    3, damage: 154 },
            { level: 4, damage: 175 }, { level: 5, damage: 198 }, { level:
                    6, damage: 224 },
            { level: 7, damage: 254 }, { level: 8, damage: 288 }, { level:
                    9, damage: 326 },
            { level: 10, damage: 370 }, { level: 11, damage: 419 }
        ],
        talents: [{ name: "Crystal Power", description: "Damage increases with consecutive hits." }],
            description: "Damage increases with consecutive hits on same target."
        },
    {
                id: 28,
                name: "Wind Archer",
                rarity: "Epic",
                class: "Damage",
                faction: "Forest Alliance",
                image: "https://via.placeholder.com/150x150/A855F7/FFFFFF?text=Wind+Archer",
                base_stats: { damage: 75, attack_speed: 1.4, range: "Long",
                    target: "First" },
                levels: [
                    { level: 1, damage: 75 }, { level: 2, damage: 85 }, { level: 3,
                        damage: 96 },
                    { level: 4, damage: 109 }, { level: 5, damage: 123 }, { level:
                            6, damage: 140 },
                    { level: 7, damage: 158 }, { level: 8, damage: 179 }, { level:
                            9, damage: 203 },
                    { level: 10, damage: 230 }, { level: 11, damage: 261 }
                ],
                talents: [{ name: "Wind Shot", description: "Fast ranged attacks with wind effects." }],
                    description: "Fast ranged attacker with reliable performance."
                },
    {
                        id: 29,
                        name: "Portal Keeper",
                        rarity: "Epic",
                        class: "Support",
                        faction: "Magic Council",
                        image: "https://via.placeholder.com/150x150/A855F7/FFFFFF?text=Portal+Keeper",
                        base_stats: { damage: 0, attack_speed: 0, range: "Support",
                            target: "None" },
                        levels: [
                            { level: 1, damage: 0 }, { level: 2, damage: 0 }, { level: 3, damage: 0 },
                            { level: 4, damage: 0 }, { level: 5, damage: 0 }, { level: 6, damage: 0 },
                            { level: 7, damage: 0 }, { level: 8, damage: 0 }, { level: 9, damage: 0 },
                            { level: 10, damage: 0 }, { level: 11, damage: 0 }
                        ],
                        talents: [{ name: "Portal Management", description: "Controls portal spawn timing and effects." }],
                            description: "Controls the battlefield portal mechanics."
                        },
    {
        id: 30,
        name: "Necromancer",
        rarity: "Epic",
        class: "Special",
        faction: "Dark Domain",
        image: "https://via.placeholder.com/150x150/A855F7/FFFFFF?text=Necromancer",
        base_stats: { damage: 85, attack_speed: 1.0, range: "First",
            target: "First" },
        levels: [
            { level: 1, damage: 85 }, { level: 2, damage: 96 }, { level: 3,
                damage: 109 },
            { level: 4, damage: 123 }, { level: 5, damage: 140 }, { level:
                    6, damage: 158 },
            { level: 7, damage: 179 }, { level: 8, damage: 203 }, { level:
                    9, damage: 230 },
            { level: 10, damage: 260 }, { level: 11, damage: 295 }
        ],
        talents: [{ name: "Raise Dead", description: "Summons skeleton warriors from defeated enemies." }],
            description: "Raises skeleton warriors from fallen enemies."
        },
    {
        id: 31,
        name: "Chemist",
        rarity: "Epic",
        class: "Debuff",
        faction: "Technogenic Society",
        image: "https://via.placeholder.com/150x150/A855F7/FFFFFF?text=Chemist",
        base_stats: { damage: 110, attack_speed: 1.2, range: "First",
            target: "First" },
        levels: [
            { level: 1, damage: 110 }, { level: 2, damage: 125 }, { level:
                    3, damage: 141 },
            { level: 4, damage: 160 }, { level: 5, damage: 181 }, { level:
                    6, damage: 205 },
            { level: 7, damage: 232 }, { level: 8, damage: 263 }, { level:
                    9, damage: 298 },
            { level: 10, damage: 338 }, { level: 11, damage: 383 }
        ],
        talents: [{ name: "Acid Flask", description: "Throws flask causing damage over time." }],
            description: "Throws a flask of acid causing damage over time."
        },
    {
        id: 32,
        name: "Druid",
        rarity: "Epic",
        class: "Support",
        faction: "Forest Alliance",
        image: "https://via.placeholder.com/150x150/A855F7/FFFFFF?text=Druid",
        base_stats: { damage: 65, attack_speed: 1.0, range: "First",
            target: "First" },
        levels: [
            { level: 1, damage: 65 }, { level: 2, damage: 74 }, { level: 3, damage: 84 },
            { level: 4, damage: 95 }, { level: 5, damage: 108 }, { level: 6, damage: 122 },
            { level: 7, damage: 138 }, { level: 8, damage: 157 }, { level: 9, damage: 178 },
            { level: 10, damage: 202 }, { level: 11, damage: 229 }
        ],
        talents: [{ name: "Nature's Blessing", description: "Enhances nearby Forest Alliance units." }],
            description: "Provides natural enhancement to forest creatures."
        },
    {
        id: 33,
        name: "Crusader",
        rarity: "Epic",
        class: "Damage",
        faction: "Kingdom of Light",
        image: "https://via.placeholder.com/150x150/A855F7/FFFFFF?text=Crusader",
        base_stats: { damage: 165, attack_speed: 0.9, range: "First",
            target: "First" },
        levels: [
            { level: 1, damage: 165 }, { level: 2, damage: 187 }, { level:
                    3, damage: 212 },
            { level: 4, damage: 240 }, { level: 5, damage: 272 }, { level:
                    6, damage: 308 },
            { level: 7, damage: 349 }, { level: 8, damage: 396 }, { level:
                    9, damage: 449 },
            { level: 10, damage: 509 }, { level: 11, damage: 577 }
        ],
        talents: [{ name: "Holy Strike", description: "Deals extra damage against Dark Domain units." }],
            description: "Holy warrior with bonus damage against dark enemies."
        },
    {
                                                                                        id: 34,
                                                                                        name: "Robotics",
                                                                                        rarity: "Epic",
                                                                                        class: "Support",
                                                                                        faction: "Technogenic Society",
                                                                                        image: "https://via.placeholder.com/150x150/A855F7/FFFFFF?text=Robotics",
                                                                                        base_stats: { damage: 0, attack_speed: 0, range: "Support",
                                                                                            target: "None" },
                                                                                        levels: [
                                                                                            { level: 1, damage: 0 }, { level: 2, damage: 0 }, { level: 3, damage: 0 },
                                                                                            { level: 4, damage: 0 }, { level: 5, damage: 0 }, { level: 6, damage: 0 },
                                                                                            { level: 7, damage: 0 }, { level: 8, damage: 0 }, { level: 9, damage: 0 },
                                                                                            { level: 10, damage: 0 }, { level: 11, damage: 0 }
                                                                                        ],
                                                                                        talents: [{ name: "Tech Enhancement", description: "Boosts all Technogenic Society units." }],
                                                                                            description: "Provides technological enhancements to mechanical units."
                                                                                        },
    {
        id: 35,
        name: "Pyromancer",
        rarity: "Epic",
        class: "Damage",
        faction: "Magic Council",
        image: "https://via.placeholder.com/150x150/A855F7/FFFFFF?text=Pyromancer",
        base_stats: { damage: 140, attack_speed: 1.1, range: "AoE",
            target: "First" },
        levels: [
            { level: 1, damage: 140 }, { level: 2, damage: 159 }, { level:
                    3, damage: 180 },
            { level: 4, damage: 204 }, { level: 5, damage: 231 }, { level:
                    6, damage: 262 },
            { level: 7, damage: 297 }, { level: 8, damage: 337 }, { level:
                    9, damage: 382 },
            { level: 10, damage: 433 }, { level: 11, damage: 491 }
        ],
        talents: [{ name: "Flame Burst", description: "Periodic area of effect fire damage." }],
            description: "Master of fire magic with devastating area attacks."
        },
    {
                id: 36,
                name: "Sentinel",
                rarity: "Epic",
                class: "Debuff",
                faction: "Kingdom of Light",
                image: "https://via.placeholder.com/150x150/A855F7/FFFFFF?text=Sentinel",
                base_stats: { damage: 95, attack_speed: 1.0, range: "First",
                    target: "First" },
                levels: [
                    { level: 1, damage: 95 }, { level: 2, damage: 108 }, { level: 3,
                        damage: 122 },
                    { level: 4, damage: 138 }, { level: 5, damage: 157 }, { level:
                            6, damage: 178 },
                    { level: 7, damage: 202 }, { level: 8, damage: 229 }, { level:
                            9, damage: 259 },
                    { level: 10, damage: 294 }, { level: 11, damage: 333 }
                ],
                talents: [{ name: "Guardian Shield", description: "Creates protective barriers for allies." }],
                    description: "Protects allies with divine shields and barriers."
                },

    // ===== RARE CARDS (18 TOTAL) =====
    {
        id: 37,
        name: "Grindstone",
        rarity: "Rare",
        class: "Support",
        faction: "Technogenic Society",
        image: "https://via.placeholder.com/150x150/3B82F6/FFFFFF?text=Grindstone",
        base_stats: { damage: 0, attack_speed: 0, range: "Support",
            target: "None" },
        levels: [
            { level: 1, damage: 0 }, { level: 2, damage: 0 }, { level: 3, damage: 0 },
            { level: 4, damage: 0 }, { level: 5, damage: 0 }, { level: 6, damage: 0 },
            { level: 7, damage: 0 }, { level: 8, damage: 0 }, { level: 9, damage: 0 },
            { level: 10, damage: 0 }, { level: 11, damage: 0 }, { level: 12,
                damage: 0 },
            { level: 13, damage: 0 }
        ],
        talents: [{ name: "Damage Boost", description: "Increases damage of neighboring units." }],
            description: "Increases the damage of neighboring units."
        },
    {
        id: 38,
        name: "Zealot",
        rarity: "Rare",
        class: "Damage",
        faction: "Kingdom of Light",
        image: "https://via.placeholder.com/150x150/3B82F6/FFFFFF?text=Zealot",
        base_stats: { damage: 100, attack_speed: 1.0, range: "First",
            target: "First" },
        levels: [
            { level: 1, damage: 100 }, { level: 2, damage: 113 }, { level:
                    3, damage: 128 },
            { level: 4, damage: 145 }, { level: 5, damage: 164 }, { level:
                    6, damage: 186 },
            { level: 7, damage: 210 }, { level: 8, damage: 238 }, { level:
                    9, damage: 270 },
            { level: 10, damage: 306 }, { level: 11, damage: 347 }, { level:
                    12, damage: 393 },
            { level: 13, damage: 445 }
        ],
        talents: [{ name: "Zealous Strike", description: "Increased damage against certain enemy types." }],
            description: "Deals increased damage with zealous fervor."
        },
    {
        id: 39,
        name: "Priestess",
        rarity: "Rare",
        class: "Support",
        faction: "Kingdom of Light",
        image: "https://via.placeholder.com/150x150/3B82F6/FFFFFF?text=Priestess",
        base_stats: { damage: 40, attack_speed: 1.0, range: "Support",
            target: "None" },
        levels: [
            { level: 1, damage: 40 }, { level: 2, damage: 45 }, { level: 3,
                damage: 51 },
            { level: 4, damage: 58 }, { level: 5, damage: 66 }, { level: 6,
                damage: 75 },
            { level: 7, damage: 85 }, { level: 8, damage: 96 }, { level: 9,
                damage: 109 },
            { level: 10, damage: 124 }, { level: 11, damage: 140 }, { level:
                    12, damage: 159 },
            { level: 13, damage: 180 }
        ],
        talents: [{ name: "Mana Generation", description: "Generates additional mana over time." }],
            description: "Generates mana to fuel your other units."
        },
    {
        id: 40,
        name: "Banner",
        rarity: "Rare",
        class: "Support",
        faction: "Kingdom of Light",
        image: "https://via.placeholder.com/150x150/3B82F6/FFFFFF?text=Banner",
        base_stats: { damage: 0, attack_speed: 0, range: "Support",
            target: "None" },
        levels: [
            { level: 1, damage: 0 }, { level: 2, damage: 0 }, { level: 3, damage: 0 },
            { level: 4, damage: 0 }, { level: 5, damage: 0 }, { level: 6, damage: 0 },
            { level: 7, damage: 0 }, { level: 8, damage: 0 }, { level: 9, damage: 0 },
            { level: 10, damage: 0 }, { level: 11, damage: 0 }, { level: 12,
                damage: 0 },
            { level: 13, damage: 0 }
        ],
        talents: [{ name: "Attack Speed Boost", description: "Increases attack speed of nearby units." }],
            description: "Increases the attack speed of nearby units."
        },
    {
        id: 41,
        name: "Alchemist",
        rarity: "Rare",
        class: "Support",
        faction: "Magic Council",
        image: "https://via.placeholder.com/150x150/3B82F6/FFFFFF?text=Alchemist",
        base_stats: { damage: 50, attack_speed: 1.0, range: "First",
            target: "First" },
        levels: [
            { level: 1, damage: 50 }, { level: 2, damage: 57 }, { level: 3,
                damage: 65 },
            { level: 4, damage: 73 }, { level: 5, damage: 83 }, { level: 6,
                damage: 94 },
            { level: 7, damage: 107 }, { level: 8, damage: 121 }, { level:
                    9, damage: 137 },
            { level: 10, damage: 155 }, { level: 11, damage: 176 }, { level:
                    12, damage: 200 },
            { level: 13, damage: 226 }
        ],
        talents: [{ name: "Mana Boost", description: "Provides mana generation bonuses." }],
            description: "Provides mana generation and alchemical support."
        },
    {
        id: 42,
        name: "Magic Cauldron",
        rarity: "Rare",
        class: "Support",
        faction: "Magic Council",
        image: "https://via.placeholder.com/150x150/3B82F6/FFFFFF?text=Magic+Cauldron",
        base_stats: { damage: 0, attack_speed: 0, range: "Support",
            target: "None" },
        levels: [
            { level: 1, damage: 0 }, { level: 2, damage: 0 }, { level: 3, damage: 0 },
            { level: 4, damage: 0 }, { level: 5, damage: 0 }, { level: 6, damage: 0 },
            { level: 7, damage: 0 }, { level: 8, damage: 0 }, { level: 9, damage: 0 },
            { level: 10, damage: 0 }, { level: 11, damage: 0 }, { level: 12,
                damage: 0 },
            { level: 13, damage: 0 }
        ],
        talents: [{ name: "Magical Enhancement", description: "Enhances nearby magical units." }],
            description: "Enhances the power of nearby magical units."
        },
    {
        id: 43,
        name: "Sharpshooter",
        rarity: "Rare",
        class: "Damage",
        faction: "Forest Alliance",
        image: "https://via.placeholder.com/150x150/3B82F6/FFFFFF?text=Sharpshooter",
        base_stats: { damage: 85, attack_speed: 1.2, range: "Long",
            target: "First" },
        levels: [
            { level: 1, damage: 85 }, { level: 2, damage: 96 }, { level: 3,
                damage: 109 },
            { level: 4, damage: 123 }, { level: 5, damage: 140 }, { level:
                    6, damage: 158 },
            { level: 7, damage: 179 }, { level: 8, damage: 203 }, { level:
                    9, damage: 230 },
            { level: 10, damage: 260 }, { level: 11, damage: 295 }, { level:
                    12, damage: 334 },
            { level: 13, damage: 378 }
        ],
        talents: [{ name: "Precision Shot", description: "Targets enemies closest to max health." }],
            description: "Focuses on enemies closest to their maximum health."
        },
    {
        id: 44,
        name: "Sentry",
        rarity: "Rare",
        class: "Damage",
        faction: "Technogenic Society",
        image: "https://via.placeholder.com/150x150/3B82F6/FFFFFF?text=Sentry",
        base_stats: { damage: 70, attack_speed: 1.1, range: "First",
            target: "First" },
        levels: [
            { level: 1, damage: 70 }, { level: 2, damage: 79 }, { level: 3,
                damage: 90 },
            { level: 4, damage: 102 }, { level: 5, damage: 115 }, { level:
                    6, damage: 131 },
            { level: 7, damage: 148 }, { level: 8, damage: 168 }, { level:
                    9, damage: 190 },
            { level: 10, damage: 216 }, { level: 11, damage: 245 }, { level:
                    12, damage: 278 },
            { level: 13, damage: 315 }
        ],
        talents: [{ name: "Gradual Increase", description: "Gradually increases in power over time." }],
            description: "Gradually increases in power during battle."
        },
    {
        id: 45,
        name: "Marksman",
        rarity: "Rare",
        class: "Damage",
        faction: "Forest Alliance",
        image: "https://via.placeholder.com/150x150/3B82F6/FFFFFF?text=Marksman",
        base_stats: { damage: 120, attack_speed: 1.3, range: "Long",
            target: "First" },
        levels: [
            { level: 1, damage: 120 }, { level: 2, damage: 136 }, { level:
                    3, damage: 154 },
            { level: 4, damage: 175 }, { level: 5, damage: 198 }, { level:
                    6, damage: 224 },
            { level: 7, damage: 254 }, { level: 8, damage: 288 }, { level:
                    9, damage: 326 },
            { level: 10, damage: 370 }, { level: 11, damage: 419 }, { level:
                    12, damage: 475 },
            { level: 13, damage: 538 }
        ],
        talents: [{ name: "Long Range", description: "Extended range and piercing shots." }],
            description: "Expert marksman with exceptional range and accuracy."
        },
    {
        id: 46,
        name: "Paladin",
        rarity: "Rare",
        class: "Support",
        faction: "Kingdom of Light",
        image: "https://via.placeholder.com/150x150/3B82F6/FFFFFF?text=Paladin",
        base_stats: { damage: 90, attack_speed: 0.8, range: "First",
            target: "First" },
        levels: [
            { level: 1, damage: 90 }, { level: 2, damage: 102 }, { level: 3,
                damage: 116 },
            { level: 4, damage: 131 }, { level: 5, damage: 149 }, { level:
                    6, damage: 169 },
            { level: 7, damage: 191 }, { level: 8, damage: 217 }, { level:
                    9, damage: 246 },
            { level: 10, damage: 279 }, { level: 11, damage: 316 }, { level:
                    12, damage: 358 },
            { level: 13, damage: 406 }
        ],
        talents: [{ name: "Divine Protection", description: "Provides damage reduction to nearby units." }],
            description: "Holy warrior that protects and inspires allies."
        },
    {
        id: 47,
        name: "Warlock",
        rarity: "Rare",
        class: "Damage",
        faction: "Dark Domain",
        image: "https://via.placeholder.com/150x150/3B82F6/FFFFFF?text=Warlock",
        base_stats: { damage: 105, attack_speed: 1.0, range: "First",
            target: "First" },
        levels: [
            { level: 1, damage: 105 }, { level: 2, damage: 119 }, { level:
                    3, damage: 135 },
            { level: 4, damage: 153 }, { level: 5, damage: 173 }, { level:
                    6, damage: 196 },
            { level: 7, damage: 222 }, { level: 8, damage: 252 }, { level:
                    9, damage: 285 },
            { level: 10, damage: 323 }, { level: 11, damage: 366 }, { level:
                    12, damage: 415 },
            { level: 13, damage: 470 }
        ],
        talents: [{ name: "Dark Magic", description: "Deals bonus damage and applies curses." }],
            description: "Master of dark magic with cursing abilities."
        },
    {
        id: 48,
        name: "Scout",
        rarity: "Rare",
        class: "Support",
        faction: "Forest Alliance",
        image: "https://via.placeholder.com/150x150/3B82F6/FFFFFF?text=Scout",
        base_stats: { damage: 60, attack_speed: 1.5, range: "Long",
            target: "First" },
        levels: [
            { level: 1, damage: 60 }, { level: 2, damage: 68 }, { level: 3,
                damage: 77 },
            { level: 4, damage: 87 }, { level: 5, damage: 99 }, { level: 6,
                damage: 112 },
            { level: 7, damage: 127 }, { level: 8, damage: 144 }, { level:
                    9, damage: 163 },
            { level: 10, damage: 185 }, { level: 11, damage: 209 }, { level:
                    12, damage: 237 },
            { level: 13, damage: 269 }
        ],
        talents: [{ name: "Early Warning", description: "Increases attack speed of nearby units." }],
            description: "Fast reconnaissance unit that boosts team coordination."
        },
    {
        id: 49,
        name: "Artificer",
        rarity: "Rare",
        class: "Support",
        faction: "Technogenic Society",
        image: "https://via.placeholder.com/150x150/3B82F6/FFFFFF?text=Artificer",
        base_stats: { damage: 75, attack_speed: 1.0, range: "First",
            target: "First" },
        levels: [
            { level: 1, damage: 75 }, { level: 2, damage: 85 }, { level: 3,
                damage: 96 },
            { level: 4, damage: 109 }, { level: 5, damage: 123 }, { level:
                    6, damage: 140 },
            { level: 7, damage: 158 }, { level: 8, damage: 179 }, { level:
                    9, damage: 203 },
            { level: 10, damage: 230 }, { level: 11, damage: 260 }, { level:
                    12, damage: 295 },
            { level: 13, damage: 334 }
        ],
        talents: [{ name: "Tech Repair", description: "Repairs and enhances nearby mechanical units." }],
            description: "Specialist in maintaining and upgrading technology."
        },
    {
        id: 50,
        name: "Elementalist",
        rarity: "Rare",
        class: "Damage",
        faction: "Magic Council",
        image: "https://via.placeholder.com/150x150/3B82F6/FFFFFF?text=Elementalist",
        base_stats: { damage: 95, attack_speed: 1.1, range: "AoE", target:
                "First" },
        levels: [
            { level: 1, damage: 95 }, { level: 2, damage: 108 }, { level: 3,
                damage: 122 },
            { level: 4, damage: 138 }, { level: 5, damage: 157 }, { level:
                    6, damage: 178 },
            { level: 7, damage: 202 }, { level: 8, damage: 229 }, { level:
                    9, damage: 259 },
            { level: 10, damage: 294 }, { level: 11, damage: 333 }, { level:
                    12, damage: 377 },
            { level: 13, damage: 427 }
        ],
        talents: [{ name: "Elemental Mastery", description: "Rotates through fire, ice, and lightning attacks." }],
            description: "Master of elemental magic with varied attack types."
        },
    {
        id: 51,
        name: "Assassin",
        rarity: "Rare",
        class: "Damage",
        faction: "Dark Domain",
        image: "https://via.placeholder.com/150x150/3B82F6/FFFFFF?text=Assassin",
        base_stats: { damage: 130, attack_speed: 1.4, range: "First",
            target: "First" },
        levels: [
            { level: 1, damage: 130 }, { level: 2, damage: 147 }, { level:
                    3, damage: 167 },
            { level: 4, damage: 189 }, { level: 5, damage: 214 }, { level:
                    6, damage: 243 },
            { level: 7, damage: 275 }, { level: 8, damage: 312 }, { level:
                    9, damage: 354 },
            { level: 10, damage: 401 }, { level: 11, damage: 454 }, { level:
                    12, damage: 515 },
            { level: 13, damage: 583 }
        ],
        talents: [{ name: "Stealth Strike", description: "Critical hits and chance to bypass armor." }],
            description: "Swift assassin with high critical damage potential."
        },
    {
        id: 52,
        name: "Mechanic",
        rarity: "Rare",
        class: "Damage",
        faction: "Technogenic Society",
        image: "https://via.placeholder.com/150x150/3B82F6/FFFFFF?text=Mechanic",
        base_stats: { damage: 110, attack_speed: 1.0, range: "First",
            target: "First" },
        levels: [
            { level: 1, damage: 110 }, { level: 2, damage: 125 }, { level:
                    3, damage: 141 },
            { level: 4, damage: 160 }, { level: 5, damage: 181 }, { level:
                    6, damage: 205 },
            { level: 7, damage: 232 }, { level: 8, damage: 263 }, { level:
                    9, damage: 298 },
            { level: 10, damage: 338 }, { level: 11, damage: 383 }, { level:
                    12, damage: 434 },
            { level: 13, damage: 492 }
        ],
        talents: [{ name: "Mechanical Expertise", description: "Bonus damage to mechanical enemies." }],
            description: "Expert in mechanical warfare and repairs."
        },
    {
        id: 53,
        name: "Ranger",
        rarity: "Rare",
        class: "Damage",
        faction: "Forest Alliance",
        image: "https://via.placeholder.com/150x150/3B82F6/FFFFFF?text=Ranger",
        base_stats: { damage: 80, attack_speed: 1.3, range: "Long",
            target: "First" },
        levels: [
            { level: 1, damage: 80 }, { level: 2, damage: 91 }, { level: 3,
                damage: 103 },
            { level: 4, damage: 117 }, { level: 5, damage: 132 }, { level:
                    6, damage: 150 },
            { level: 7, damage: 170 }, { level: 8, damage: 193 }, { level:
                    9, damage: 219 },
            { level: 10, damage: 248 }, { level: 11, damage: 281 }, { level:
                    12, damage: 318 },
            { level: 13, damage: 361 }
        ],
        talents: [{ name: "Forest Knowledge", description: "Increased damage in forest terrains." }],
            description: "Expert tracker and hunter of the deep forests."
        },
    {
        id: 54,
        name: "Cleric",
        rarity: "Rare",
        class: "Support",
        faction: "Kingdom of Light",
        image: "https://via.placeholder.com/150x150/3B82F6/FFFFFF?text=Cleric",
        base_stats: { damage: 55, attack_speed: 1.0, range: "Support",
            target: "None" },
        levels: [
            { level: 1, damage: 55 }, { level: 2, damage: 62 }, { level: 3,
                damage: 71 },
            { level: 4, damage: 80 }, { level: 5, damage: 91 }, { level: 6,
                damage: 103 },
            { level: 7, damage: 117 }, { level: 8, damage: 132 }, { level:
                    9, damage: 150 },
            { level: 10, damage: 170 }, { level: 11, damage: 193 }, { level:
                    12, damage: 219 },
            { level: 13, damage: 248 }
        ],
        talents: [{ name: "Healing Aura", description: "Provides regeneration to nearby units." }],
            description: "Divine healer that restores and protects allies."
        },

    // ===== COMMON CARDS (18 TOTAL) =====
    {
        id: 55,
        name: "Archer",
        rarity: "Common",
        class: "Damage",
        faction: "Forest Alliance",
        image: "https://via.placeholder.com/150x150/6B7280/FFFFFF?text=Archer",
        base_stats: { damage: 60, attack_speed: 1.3, range: "Long",
            target: "First" },
        levels: [
            { level: 1, damage: 60 }, { level: 2, damage: 69 }, { level: 3,
                damage: 79 },
            { level: 4, damage: 91 }, { level: 5, damage: 105 }, { level: 6,
                damage: 121 },
            { level: 7, damage: 139 }, { level: 8, damage: 160 }, { level:
                    9, damage: 184 },
            { level: 10, damage: 212 }, { level: 11, damage: 244 }, { level:
                    12, damage: 281 },
            { level: 13, damage: 323 }, { level: 14, damage: 372 }, { level:
                    15, damage: 428 }
        ],
        talents: [],
        description: "Basic ranged damage dealer."
    },
    {
        id: 56,
        name: "Bombardier",
        rarity: "Common",
        class: "Debuff",
        faction: "Technogenic Society",
        image: "https://via.placeholder.com/150x150/6B7280/FFFFFF?text=Bombardier",
        base_stats: { damage: 80, attack_speed: 1.0, range: "AoE", target:
                "First" },
        levels: [
            { level: 1, damage: 80 }, { level: 2, damage: 92 }, { level: 3,
                damage: 106 },
            { level: 4, damage: 122 }, { level: 5, damage: 140 }, { level:
                    6, damage: 161 },
            { level: 7, damage: 185 }, { level: 8, damage: 213 }, { level:
                    9, damage: 245 },
            { level: 10, damage: 282 }, { level: 11, damage: 324 }, { level:
                    12, damage: 373 },
            { level: 13, damage: 429 }, { level: 14, damage: 493 }, { level:
                    15, damage: 567 }
        ],
        talents: [{ name: "Stun", description: "Stuns enemies with explosive attacks." }],
            description: "Stuns enemies with powerful explosive attacks."
        },
    {
        id: 57,
        name: "Cold Mage",
        rarity: "Common",
        class: "Debuff",
        faction: "Magic Council",
        image: "https://via.placeholder.com/150x150/6B7280/FFFFFF?text=Cold+Mage",
        base_stats: { damage: 65, attack_speed: 1.2, range: "Medium",
            target: "First" },
        levels: [
            { level: 1, damage: 65 }, { level: 2, damage: 75 }, { level: 3,
                damage: 86 },
            { level: 4, damage: 99 }, { level: 5, damage: 114 }, { level: 6,
                damage: 131 },
            { level: 7, damage: 151 }, { level: 8, damage: 174 }, { level:
                    9, damage: 200 },
            { level: 10, damage: 230 }, { level: 11, damage: 265 }, { level:
                    12, damage: 305 },
            { level: 13, damage: 351 }, { level: 14, damage: 404 }, { level:
                    15, damage: 464 }
        ],
        talents: [{ name: "Freeze", description: "Slows down enemy movement." }],
        description: "Slows down enemies with ice attacks."
    },
    {
        id: 58,
        name: "Fire Mage",
        rarity: "Common",
        class: "Damage",
        faction: "Magic Council",
        image: "https://via.placeholder.com/150x150/6B7280/FFFFFF?text=Fire+Mage",
        base_stats: { damage: 70, attack_speed: 1.1, range: "AoE", target:
                "First" },
        levels: [
            { level: 1, damage: 70 }, { level: 2, damage: 80 }, { level: 3,
                damage: 92 },
            { level: 4, damage: 106 }, { level: 5, damage: 122 }, { level:
                    6, damage: 140 },
            { level: 7, damage: 161 }, { level: 8, damage: 185 }, { level:
                    9, damage: 213 },
            { level: 10, damage: 245 }, { level: 11, damage: 282 }, { level:
                    12, damage: 324 },
            { level: 13, damage: 373 }, { level: 14, damage: 429 }, { level:
                    15, damage: 493 }
        ],
        talents: [{ name: "Fire Splash", description: "Deals splash damage to nearby enemies." }],
            description: "Deals fire damage with splash effect."
        },
    {
        id: 59,
        name: "Hunter",
        rarity: "Common",
        class: "Damage",
        faction: "Forest Alliance",
        image: "https://via.placeholder.com/150x150/6B7280/FFFFFF?text=Hunter",
        base_stats: { damage: 90, attack_speed: 1.3, range: "Long",
            target: "First" },
        levels: [
            { level: 1, damage: 90 }, { level: 2, damage: 103 }, { level: 3,
                damage: 119 },
            { level: 4, damage: 137 }, { level: 5, damage: 157 }, { level:
                    6, damage: 181 },
            { level: 7, damage: 208 }, { level: 8, damage: 239 }, { level:
                    9, damage: 275 },
            { level: 10, damage: 316 }, { level: 11, damage: 364 }, { level:
                    12, damage: 418 },
            { level: 13, damage: 481 }, { level: 14, damage: 553 }, { level:
                    15, damage: 636 }
        ],
        talents: [{ name: "First Shot Bonus", description: "Deals extra damage with first shot at target." }],
            description: "Deals extra damage with the first shot at the target."
        },
    {
        id: 60,
        name: "Lightning Mage",
        rarity: "Common",
        class: "Damage",
        faction: "Magic Council",
        image: "https://via.placeholder.com/150x150/6B7280/FFFFFF?text=Lightning+Mage",
        base_stats: { damage: 75, attack_speed: 1.2, range: "Medium",
            target: "First" },
        levels: [
            { level: 1, damage: 75 }, { level: 2, damage: 86 }, { level: 3,
                damage: 99 },
            { level: 4, damage: 114 }, { level: 5, damage: 131 }, { level:
                    6, damage: 151 },
            { level: 7, damage: 174 }, { level: 8, damage: 200 }, { level:
                    9, damage: 230 },
            { level: 10, damage: 265 }, { level: 11, damage: 305 }, { level:
                    12, damage: 351 },
            { level: 13, damage: 404 }, { level: 14, damage: 464 }, { level:
                    15, damage: 534 }
        ],
        talents: [{ name: "Chain Lightning", description: "Lightning can chain to nearby enemies." }],
            description: "Lightning attacks that can chain between enemies."
        },
    {
        id: 61,
        name: "Poisoner",
        rarity: "Common",
        class: "Debuff",
        faction: "Magic Council",
        image: "https://via.placeholder.com/150x150/6B7280/FFFFFF?text=Poisoner",
        base_stats: { damage: 55, attack_speed: 1.1, range: "First",
            target: "First" },
        levels: [
            { level: 1, damage: 55 }, { level: 2, damage: 63 }, { level: 3,
                damage: 72 },
            { level: 4, damage: 83 }, { level: 5, damage: 95 }, { level: 6,
                damage: 109 },
            { level: 7, damage: 126 }, { level: 8, damage: 145 }, { level:
                    9, damage: 166 },
            { level: 10, damage: 191 }, { level: 11, damage: 220 }, { level:
                    12, damage: 253 },
            { level: 13, damage: 291 }, { level: 14, damage: 335 }, { level:
                    15, damage: 385 }
        ],
        talents: [{ name: "Poison", description: "Inflicts poison damage over time." }],
            description: "Inflicts poison damage that continues over time."
        },
    {
        id: 62,
        name: "Rogue",
        rarity: "Common",
        class: "Damage",
        faction: "Forest Alliance",
        image: "https://via.placeholder.com/150x150/6B7280/FFFFFF?text=Rogue",
        base_stats: { damage: 85, attack_speed: 1.4, range: "First",
            target: "First" },
        levels: [
            { level: 1, damage: 85 }, { level: 2, damage: 98 }, { level: 3,
                damage: 113 },
            { level: 4, damage: 130 }, { level: 5, damage: 149 }, { level:
                    6, damage: 171 },
            { level: 7, damage: 197 }, { level: 8, damage: 227 }, { level:
                    9, damage: 261 },
            { level: 10, damage: 300 }, { level: 11, damage: 345 }, { level:
                    12, damage: 397 },
            { level: 13, damage: 457 }, { level: 14, damage: 525 }, { level:
                    15, damage: 604 }
        ],
        talents: [{ name: "Critical Strike", description: "Random bonus damage from 1 to critical damage value." }],
            description: "Damage per strike increases by random amount up to crit value."
        },
    {
        id: 63,
        name: "Thrower",
        rarity: "Common",
        class: "Damage",
        faction: "Technogenic Society",
        image: "https://via.placeholder.com/150x150/6B7280/FFFFFF?text=Thrower",
        base_stats: { damage: 65, attack_speed: 1.0, range: "Medium",
            target: "First" },
        levels: [
            { level: 1, damage: 65 }, { level: 2, damage: 75 }, { level: 3,
                damage: 86 },
            { level: 4, damage: 99 }, { level: 5, damage: 114 }, { level: 6,
                damage: 131 },
            { level: 7, damage: 151 }, { level: 8, damage: 174 }, { level:
                    9, damage: 200 },
            { level: 10, damage: 230 }, { level: 11, damage: 265 }, { level:
                    12, damage: 305 },
            { level: 13, damage: 351 }, { level: 14, damage: 404 }, { level:
                    15, damage: 464 }
        ],
        talents: [{ name: "Projectile Attack", description: "Throws projectiles at enemies." }],
            description: "Basic projectile thrower unit."
        },

];

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                const rarityColors = {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    Common: "bg-gray-400",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    Rare: "bg-blue-400",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    Epic: "bg-purple-400",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    Legendary: "bg-yellow-400"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                };

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                const factionColors = {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    "Forest Alliance": "bg-green-100 border-green-300",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    "Kingdom of Light": "bg-yellow-100 border-yellow-300",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    "Magic Council": "bg-blue-100 border-blue-300",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    "Dark Domain": "bg-purple-100 border-purple-300",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    "Technogenic Society": "bg-gray-100 border-gray-300"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                };

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                const classIcons = {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    Damage: Sword,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    Support: Heart,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    Debuff: Zap,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    Special: Star
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                };

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                const RushRoyaleApp = () => {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    const [searchTerm, setSearchTerm] = useState('');
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    const [selectedRarity, setSelectedRarity] = useState('All');
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    const [selectedFaction, setSelectedFaction] = useState('All');
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    const [selectedCard, setSelectedCard] = useState(null);

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    const filteredCards = rushRoyaleCards.filter(card => {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        const matchesSearch =
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            card.name.toLowerCase().includes(searchTerm.toLowerCase());
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        const matchesRarity = selectedRarity === 'All' || card.rarity ===
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            selectedRarity;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        const matchesFaction = selectedFaction === 'All' || card.faction
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            === selectedFaction;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        return matchesSearch && matchesRarity && matchesFaction;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    });

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    // Group cards by rarity first, then by faction within each rarity
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    const groupedCards = filteredCards.reduce((acc, card) => {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        if (!acc[card.rarity]) {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            acc[card.rarity] = {};
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        if (!acc[card.rarity][card.faction]) {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            acc[card.rarity][card.faction] = [];
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        acc[card.rarity][card.faction].push(card);
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        return acc;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    }, {});

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    const rarityOrder = ['Legendary', 'Epic', 'Rare', 'Common'];
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    const factions = [...new Set(rushRoyaleCards.map(card => card.faction))];

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    const CardModal = ({ card, onClose }) => {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        if (!card) return null;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        const ClassIcon = classIcons[card.class];

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        return (
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <div className="fixed inset-0 bg-black bg-opacity-50 flex
items-center justify-center p-4 z-50">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                <div className="bg-white rounded-lg max-w-2xl w-full
max-h-[90vh] overflow-y-auto">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    <div className="p-6">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        <div className="flex justify-between items-start mb-4">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <h2 className="text-2xl font-bold text-gray-900">{card.name}</h2>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <button onClick={onClose} className="text-gray-500
hover:text-gray-700">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                <X size={24} />
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            </button>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        </div>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        <div className="space-y-4">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <div className="flex items-center space-x-2">
               <span className={`px-3 py-1 rounded-full text-white
text-sm font-semibold ${rarityColors[card.rarity]}`}>
                 {card.rarity}
               </span>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                <div className="flex items-center space-x-1">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    {ClassIcon && <ClassIcon size={16} />}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    <span className="text-sm font-medium
text-gray-900">{card.class}</span>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            </div>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <div className={`p-3 rounded-lg border-2
${factionColors[card.faction]}`}>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                <p className="font-semibold text-gray-900">{card.faction}</p>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            </div>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <div className="bg-gray-50 p-4 rounded-lg">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                <h3 className="font-semibold mb-2 text-gray-900">Base Stats</h3>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    <div>Damage: <span
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        className="font-semibold">{card.base_stats.damage}</span></div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    <div>Speed: <span
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        className="font-semibold">{card.base_stats.attack_speed}</span></div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    <div>Range: <span
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        className="font-semibold">{card.base_stats.range}</span></div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    <div>Target: <span
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        className="font-semibold">{card.base_stats.target}</span></div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    {card.base_stats.morale && (
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        <div>Morale: <span
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            className="font-semibold">{card.base_stats.morale}</span></div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    )}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            </div>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            {card.talents && card.talents.length > 0 && (
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                <div className="bg-blue-50 p-4 rounded-lg">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    <h3 className="font-semibold mb-2 text-gray-900">Talents</h3>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    {card.talents.map((talent, idx) => (
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        <div key={idx} className="mb-2">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <p className="font-medium text-sm
text-gray-900">{talent.name}</p>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <p className="text-xs
text-gray-600">{talent.description}</p>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    ))}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            )}

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <div className="bg-green-50 p-4 rounded-lg">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                <h3 className="font-semibold mb-2
text-gray-900">Description</h3>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                <p className="text-sm text-gray-700">{card.description}</p>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            </div>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            {card.levels && card.levels.length > 0 && (
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                <div className="bg-yellow-50 p-4 rounded-lg">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    <h3 className="font-semibold mb-2
text-gray-900">Level Progression</h3>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    <div className="grid grid-cols-1 md:grid-cols-2
gap-2 max-h-40 overflow-y-auto">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        {card.levels.map((level, idx) => (
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <div key={idx} className="flex justify-between
text-sm bg-white p-2 rounded">
                       <span className="font-medium">Level
                           {level.level}:</span>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                <span>DMG: {level.damage} {level.morale && `|
Morale: ${level.morale}`}</span>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        ))}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            )}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        );
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    };

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    return (
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        <div className="min-h-screen bg-gradient-to-br from-blue-900
via-purple-900 to-indigo-900 text-white">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <div className="container mx-auto px-4 py-8">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                {/* Header */}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                <div className="text-center mb-8">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r
from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        Rush Royale Companion
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    </h1>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    <p className="text-gray-300">Complete card database with all
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        72 cards and full level progression</p>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    <p className="text-sm text-gray-400 mt-2">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        Cards: {filteredCards.length} / {rushRoyaleCards.length}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    </p>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                </div>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                {/* Search and Filters */}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        <div className="relative">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <input
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                type="text"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                placeholder="Search cards..."
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                className="w-full pl-10 pr-4 py-2 bg-white/20 border
border-white/30 rounded-lg text-white placeholder-gray-300
focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                value={searchTerm}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                onChange={(e) => setSearchTerm(e.target.value)}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            />
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        </div>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        <select
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            className="px-4 py-2 bg-white/20 border border-white/30
rounded-lg text-white focus:outline-none focus:ring-2
focus:ring-yellow-400"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            value={selectedRarity}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            onChange={(e) => setSelectedRarity(e.target.value)}

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        <option value="All">All Rarities</option>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            {rarityOrder.map(rarity => (
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                <option key={rarity} value={rarity}>{rarity}</option>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            ))}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    </select>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    <select
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        className="px-4 py-2 bg-white/20 border border-white/30
rounded-lg text-white focus:outline-none focus:ring-2
focus:ring-yellow-400"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        value={selectedFaction}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        onChange={(e) => setSelectedFaction(e.target.value)}

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    <option value="All">All Factions</option>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        {factions.map(faction => (
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <option key={faction} value={faction}>{faction}</option>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        ))}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                </select>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        </div>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    {/* Cards Display */}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    <div className="space-y-8">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        {rarityOrder.map(rarity => {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            if (!groupedCards[rarity]) return null;

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            const totalCardsInRarity =
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                Object.values(groupedCards[rarity]).flat().length;

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            return (
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                <div key={rarity} className="bg-white/5 backdrop-blur-sm
rounded-lg p-6">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    <div className="flex items-center mb-4">
                 <span className={`px-4 py-2 rounded-full text-white
font-bold ${rarityColors[rarity]} mr-3`}>
                   {rarity} ({totalCardsInRarity})
                 </span>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        <div className="flex-1 h-px bg-gradient-to-r
from-white/30 to-transparent"></div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    </div>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    {Object.entries(groupedCards[rarity]).map(([faction,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   cards]) => (
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        <div key={faction} className="mb-6 last:mb-0">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <h3 className="text-lg font-semibold mb-3 text-gray-200">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                {faction} ({cards.length} cards)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            </h3>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <div className="grid grid-cols-1 sm:grid-cols-2
lg:grid-cols-3 xl:grid-cols-4 gap-4">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                {cards.map(card => {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    const ClassIcon = classIcons[card.class];
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    return (
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        <div
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            key={card.id}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            className="bg-white/10 backdrop-blur-sm
rounded-lg p-4 border border-white/20 hover:border-yellow-400/50
transition-all duration-300 cursor-pointer hover:shadow-lg
hover:shadow-yellow-400/20 transform hover:scale-105"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            onClick={() => setSelectedCard(card)}

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        <div className="flex items-start
justify-between mb-3">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <h4 className="font-semibold text-white
truncate">{card.name}</h4>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <div className="flex items-center space-x-1">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                {ClassIcon && <ClassIcon size={16}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         className="text-gray-300" />}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        </div>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        <div className="space-y-2 text-sm text-gray-300">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <div className="flex justify-between">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                <span>Damage:</span>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                <span className="text-white
font-semibold">{card.base_stats.damage}</span>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <div className="flex justify-between">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                <span>Class:</span>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                <span className="text-white">{card.class}</span>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <div className="flex justify-between">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                <span>Levels:</span>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                <span className="text-yellow-300
font-semibold">{card.levels.length}</span>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        </div>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    {card.talents && card.talents.length > 0 && (
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        <div className="mt-3 pt-3 border-t
border-white/20">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <div className="text-xs
text-yellow-300 font-medium truncate">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                {card.talents[0].name}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    )}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                );
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                })}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    ))}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            );
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        })}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    </div>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    {filteredCards.length === 0 && (
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        <div className="text-center py-12">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <p className="text-gray-400 text-lg">No cards found
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                matching your criteria.</p>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    )}

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    {/* Card Modal */}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    <CardModal card={selectedCard} onClose={() => setSelectedCard(null)} />
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                );
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                };

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                export default RushRoyaleApp;