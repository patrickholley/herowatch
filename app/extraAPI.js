angular.module('herowatchApp').service('extraAPI', function() {
    //Do not change liveExtraAPI
    var liveExtraAPI = [
        {
            "id":1,
            "role": {
                "id": 4,
                "name": "support"
            },
            "abilities": [
                {
                    "id": 1,
                    "name": "Biotic Rifle",
                    "description": "Ana’s rifle shoots darts that can restore health to her allies or deal ongoing damage to her enemies. She can use the rifle’s scope to zoom in on targets and make highly accurate shots.",
                    "is_ultimate": false,
                    "url": "https://overwatch-api.net/api/v1/ability/1"
                },
                {
                    "id": 2,
                    "name": "Sleep Dart",
                    "description": "Ana fires a dart from her sidearm, rendering an enemy unconscious (though any damage will rouse them).",
                    "is_ultimate": false,
                    "url": "https://overwatch-api.net/api/v1/ability/2"
                },
                {
                    "id": 3,
                    "name": "Biotic Grenade",
                    "description": "Ana tosses a biotic bomb that deals damage to enemies and heals allies in a small area of effect. Affected allies briefly receive increased healing from all sources, while enemies caught in the blast cannot be healed for a few moments.",
                    "is_ultimate": false,
                    "url": "https://overwatch-api.net/api/v1/ability/3"
                },
                {
                    "id": 4,
                    "name": "Nano Boost",
                    "description": "After Ana hits one of her allies with a combat boost, they temporarily move faster, deal more damage, and take less damage from enemies’ attacks.",
                    "is_ultimate": true,
                    "url": "https://overwatch-api.net/api/v1/ability/4"
                }
            ]
        },
        {
            "id": 2,
            "role": {
                "id": 2,
                "name": "defense"
            },
            "abilities": [
                {
                    "id": 5,
                    "name": "Configuration: Recon",
                    "description": "In Recon mode, Bastion is fully mobile, outfitted with a submachine gun that fires steady bursts of bullets at medium range.",
                    "is_ultimate": false,
                    "url": "https://overwatch-api.net/api/v1/ability/5"
                },
                {
                    "id": 6,
                    "name": "Configuration: Sentry",
                    "description": "In Sentry mode, Bastion is a stationary powerhouse equipped with a gatling gun capable of unleashing a hail of bullets. The gun's aim can be \"walked\" across multiple targets dealing devastating damage at short to medium range.",
                    "is_ultimate": false,
                    "url": "https://overwatch-api.net/api/v1/ability/6"
                },
                {
                    "id": 7,
                    "name": "Reconfigure",
                    "description": "Bastion transforms between its two primary combat modes to adapt to changing battlefield conditions.",
                    "is_ultimate": false,
                    "url": "https://overwatch-api.net/api/v1/ability/7"
                },
                {
                    "id": 8,
                    "name": "Self-Repair",
                    "description": "Bastion restores its health; it cannot move or fire weapons while the repair process is in effect.",
                    "is_ultimate": false,
                    "url": "https://overwatch-api.net/api/v1/ability/8"
                },
                {
                    "id": 9,
                    "name": "Configuration: Tank",
                    "description": "In Tank mode, Bastion extends wheeled treads and a powerful long-range cannon. The cannon’s explosive shells demolish targets in a wide blast radius, but Bastion can only remain in this mode for a limited time.",
                    "is_ultimate": true,
                    "url": "https://overwatch-api.net/api/v1/ability/9"
                }
            ]
        },
        {
            "id": 3,
            "role": {
                "id": 3,
                "name": "tank"
            },
            "abilities": [
                {
                    "id": 10,
                    "name": "Fusion Cannons",
                    "description": "D.Va's mech is equipped with twin short-range rotating cannons. They lay down continuous, high-damage fire without needing to reload, but slow D.Va’s movement while they’re active.",
                    "is_ultimate": false,
                    "url": "https://overwatch-api.net/api/v1/ability/10"
                },
                {
                    "id": 11,
                    "name": "Boosters",
                    "description": "D.Va’s mech launches into the air, her momentum carrying her forward. She can turn and change directions or barrel through her enemies, knocking them back.",
                    "is_ultimate": false,
                    "url": "https://overwatch-api.net/api/v1/ability/11"
                },
                {
                    "id": 12,
                    "name": "Defense Matrix",
                    "description": "D.Va can activate this forward-facing targeting array to shoot incoming projectiles out of the air.",
                    "is_ultimate": false,
                    "url": "https://overwatch-api.net/api/v1/ability/12"
                },
                {
                    "id": 13,
                    "name": "Eject",
                    "description": "D.Va ejects out of her mech when it is destroyed.",
                    "is_ultimate": false,
                    "url": "https://overwatch-api.net/api/v1/ability/13"
                },
                {
                    "id": 14,
                    "name": "Self-Destruct",
                    "description": "D.Va ejects from her mech and sets its reactor to explode, dealing massive damage to nearby opponents.",
                    "is_ultimate": true,
                    "url": "https://overwatch-api.net/api/v1/ability/14"
                },
                {
                    "id": 15,
                    "name": "Light Gun",
                    "description": "While outside of her mech, D.Va can continue the fight with a mid-range automatic blaster.",
                    "is_ultimate": false,
                    "url": "https://overwatch-api.net/api/v1/ability/15"
                },
                {
                    "id": 16,
                    "name": "Call Mech",
                    "description": "If her armored battle suit is destroyed, D.Va can call down a fresh mech and return to the fray.",
                    "is_ultimate": true,
                    "url": "https://overwatch-api.net/api/v1/ability/16"
                }
            ]
        },
        {
            "id": 4,
            "role": {
                "id": 1,
                "name": "offense"
            },
            "abilities": [
                {
                    "id": 17,
                    "name": "Shuriken",
                    "description": "Genji looses three deadly throwing stars in quick succession. Alternatively, he can throw three shuriken in a wider spread.",
                    "is_ultimate": false,
                    "url": "https://overwatch-api.net/api/v1/ability/17"
                },
                {
                    "id": 18,
                    "name": "Swift Strike",
                    "description": "Genji darts forward, slashing with his katana and passing through foes in his path. If Genji eliminates a target, he can instantly use this ability again.",
                    "is_ultimate": false,
                    "url": "https://overwatch-api.net/api/v1/ability/18"
                },
                {
                    "id": 19,
                    "name": "Deflect",
                    "description": "With lightning-quick swipes of his sword, Genji reflects any oncoming projectiles and can send them rebounding towards his enemies.",
                    "is_ultimate": false,
                    "url": "https://overwatch-api.net/api/v1/ability/19"
                },
                {
                    "id": 20,
                    "name": "Cyber-Agility",
                    "description": "Thanks to his cybernetic abilities, Genji can climb walls and perform jumps in mid-air.",
                    "is_ultimate": false,
                    "url": "https://overwatch-api.net/api/v1/ability/20"
                },
                {
                    "id": 21,
                    "name": "Dragonblade",
                    "description": "Genji brandishes his katana for a brief period of time. Until he sheathes his sword, Genji can deliver killing strikes to any targets within his reach.",
                    "is_ultimate": true,
                    "url": "https://overwatch-api.net/api/v1/ability/21"
                }
            ]
        },
        {
            "id": 5,
            "role": {
                "id": 2,
                "name": "defense"
            },
            "abilities": [
                {
                "id": 22,
                "name": "Storm Bow",
                "description": "Hanzo nocks and fires an arrow at his target.",
                "is_ultimate": false,
                "url": "https://overwatch-api.net/api/v1/ability/22"
                },
                {
                "id": 23,
                "name": "Scatter Arrow",
                "description": "Hanzo shoots a fragmenting arrow that ricochets off walls and objects and can strike multiple targets at once.",
                "is_ultimate": false,
                "url": "https://overwatch-api.net/api/v1/ability/23"
                },
                {
                "id": 24,
                "name": "Sonic Arrow",
                "description": "Hanzo launches an arrow that contains a sonar tracking device. Any enemy within its detection radius is visibly marked, making them easier for Hanzo and his allies to hunt down.",
                "is_ultimate": false,
                "url": "https://overwatch-api.net/api/v1/ability/24"
                },
                {
                "id": 25,
                "name": "Wall Climb",
                "description": "Hanzo can climb any vertical surface.",
                "is_ultimate": false,
                "url": "https://overwatch-api.net/api/v1/ability/25"
                },
                {
                "id": 26,
                "name": "Dragonstrike",
                "description": "Hanzo summons a Spirit Dragon which travels through the air in a line. It passes through walls in its way, devouring any enemies it encounters.",
                "is_ultimate": true,
                "url": "https://overwatch-api.net/api/v1/ability/26"
                }
            ]
        },
        {
            "id": 6,
            "role": {
                "id": 2,
                "name": "defense"
            },
            "abilities": [
                {
                "id": 27,
                "name": "Frag Launcher",
                "description": "Junkrat's Frag Launcher lobs grenades a significant distance. They bounce to reach their destination, and blow up when they strike an enemy.",
                "is_ultimate": false,
                "url": "https://overwatch-api.net/api/v1/ability/27"
                },
                {
                "id": 28,
                "name": "Concussion Mine",
                "description": "After placing one of his homemade Concussion Mines, Junkrat can trigger it to damage enemies and send them flying... or propel himself through the air.",
                "is_ultimate": false,
                "url": "https://overwatch-api.net/api/v1/ability/28"
                },
                {
                "id": 29,
                "name": "Steel Trap",
                "description": "Junkrat tosses out a giant, metal-toothed trap. Should an enemy wander too close to the trap, it clamps on, injuring and immobilizing them.",
                "is_ultimate": false,
                "url": "https://overwatch-api.net/api/v1/ability/29"
                },
                {
                "id": 30,
                "name": "Total Mayhem",
                "description": "Junkrat's deranged sense of humor persists past his death. If killed, he drops several live grenades.",
                "is_ultimate": false,
                "url": "https://overwatch-api.net/api/v1/ability/30"
                },
                {
                "id": 31,
                "name": "RIP-Tire",
                "description": "Junkrat revs up a motorized tire bomb and sends it rolling across the battlefield, climbing over walls and obstacles. He can remotely detonate the RIP-Tire to deal serious damage to enemies caught within the blast, or just wait for it to explode on its own.",
                "is_ultimate": true,
                "url": "https://overwatch-api.net/api/v1/ability/31"
                }
            ]
        },
        {
            "id": 7,
            "role": {
                "id": 4,
                "name": "support"
            },
            "abilities": [
                {
                "id": 32,
                "name": "Sonic Amplifier",
                "description": "Lúcio can hit his enemies with sonic projectiles or knock them back with a blast of sound.",
                "is_ultimate": false,
                "url": "https://overwatch-api.net/api/v1/ability/32"
                },
                {
                "id": 33,
                "name": "Crossfade",
                "description": "Lúcio continuously energizes himself, and nearby teammates, with music. He can switch between two songs: one amplifies movement speed, while the other regenerates health.",
                "is_ultimate": false,
                "url": "https://overwatch-api.net/api/v1/ability/33"
                },
                {
                "id": 34,
                "name": "Amp It Up",
                "description": "Lúcio increases the volume on his speakers, boosting the effects of his songs.",
                "is_ultimate": false,
                "url": "https://overwatch-api.net/api/v1/ability/34"
                },
                {
                "id": 35,
                "name": "Wall Ride",
                "description": "Lúcio rides along a wall. This has a slight upwards angle, allowing him to ascend the wall.",
                "is_ultimate": false,
                "url": "https://overwatch-api.net/api/v1/ability/35"
                },
                {
                "id": 36,
                "name": "Sound Barrier",
                "description": "Protective waves radiate out from Lúcio’s Sonic Amplifier, briefly providing him and nearby allies with personal shields.",
                "is_ultimate": true,
                "url": "https://overwatch-api.net/api/v1/ability/36"
                }
            ]
        },
        {
            "id": 8,
            "role": {
                "id": 1,
                "name": "offense"
            },
            "abilities": [
                {
                "id": 37,
                "name": "Peacekeeper",
                "description": "McCree fires off a round from his trusty six-shooter. He can fan the Peacekeeper’s hammer to swiftly unload the entire cylinder.",
                "is_ultimate": false,
                "url": "https://overwatch-api.net/api/v1/ability/37"
                },
                {
                "id": 38,
                "name": "Combat Roll",
                "description": "McCree dives in the direction he's moving, effortlessly reloading his Peacekeeper in the process.",
                "is_ultimate": false,
                "url": "https://overwatch-api.net/api/v1/ability/38"
                },
                {
                "id": 39,
                "name": "Flashbang",
                "description": "McCree heaves a blinding grenade that explodes shortly after it leaves his hand. The blast staggers enemies in a small radius.",
                "is_ultimate": false,
                "url": "https://overwatch-api.net/api/v1/ability/39"
                },
                {
                "id": 40,
                "name": "Deadeye",
                "description": "Focus. Mark. Draw. McCree takes a few precious moments to aim; when he's ready to fire, he shoots every enemy in his line of sight. The weaker his targets are, the faster he'll line up a killshot.",
                "is_ultimate": true,
                "url": "https://overwatch-api.net/api/v1/ability/40"
                }
            ]
        },
        {
            "id": 9,
            "role": {
                "id": 2,
                "name": "defense"
            },
            "abilities": [
                {
                "id": 41,
                "name": "Endothermic Blaster",
                "description": "Mei's blaster unleashes a concentrated, short-range stream of frost that damages, slows, and ultimately freezes enemies in place. Mei can also use her blaster to shoot icicle-like projectiles at medium range.",
                "is_ultimate": false,
                "url": "https://overwatch-api.net/api/v1/ability/41"
                },
                {
                "id": 42,
                "name": "Cryo-Freeze",
                "description": "Mei instantly surrounds herself with a block of thick ice. She heals and ignores damage while encased, but cannot move or use abilities.",
                "is_ultimate": false,
                "url": "https://overwatch-api.net/api/v1/ability/42"
                },
                {
                "id": 43,
                "name": "Ice Wall",
                "description": "Mei generates an enormous ice wall that obstructs lines of sight, stops movement, and blocks attacks.",
                "is_ultimate": false,
                "url": "https://overwatch-api.net/api/v1/ability/43"
                },
                {
                "id": 44,
                "name": "Blizzard",
                "description": "Mei deploys a weather-modification drone that emits gusts of wind and snow in a wide area. Enemies caught in the blizzard are slowed and take damage; those who linger too long are frozen solid.",
                "is_ultimate": true,
                "url": "https://overwatch-api.net/api/v1/ability/44"
                }
            ]
        },
        {
            "id": 10,
            "role": {
                "id": 4,
                "name": "support"
            },
            "abilities": [
                {
                "id": 45,
                "name": "Caduceus Staff",
                "description": "Mercy engages one of two beams that connect to an ally. By maintaining the beams, she can either restore that ally's health or increase the amount of damage they deal.",
                "is_ultimate": false,
                "url": "https://overwatch-api.net/api/v1/ability/45"
                },
                {
                "id": 46,
                "name": "Caduceus Blaster",
                "description": "Mercy shoots a round from her sidearm. It's best reserved for emergency personal defense.",
                "is_ultimate": false,
                "url": "https://overwatch-api.net/api/v1/ability/46"
                },
                {
                "id": 47,
                "name": "Guardian Angel",
                "description": "Mercy flies towards a targeted ally, allowing her to reach them quickly and provide assistance in crucial moments.",
                "is_ultimate": false,
                "url": "https://overwatch-api.net/api/v1/ability/47"
                },
                {
                "id": 48,
                "name": "Angelic Descent",
                "description": "Propelled by her Valkyrie suit, Mercy slows the speed of her descent from great heights.",
                "is_ultimate": false,
                "url": "https://overwatch-api.net/api/v1/ability/48"
                },
                {
                "id": 49,
                "name": "Resurrect",
                "description": "Mercy radiates restorative power, bringing nearby dead allies back into the fight with full health.",
                "is_ultimate": true,
                "url": "https://overwatch-api.net/api/v1/ability/49"
                }
            ]
        },
        {
            "id": 11,
            "role": {
                "id": 1,
                "name": "offense"
            },
            "abilities": [
                {
                "id": 50,
                "name": "Rocket Launcher",
                "description": "Pharah’s primary weapon launches rockets that deal significant damage in a wide blast radius.",
                "is_ultimate": false,
                "url": "https://overwatch-api.net/api/v1/ability/50"
                },
                {
                "id": 51,
                "name": "Concussive Blast",
                "description": "Pharah looses a wrist rocket that knocks back any enemies it strikes.",
                "is_ultimate": false,
                "url": "https://overwatch-api.net/api/v1/ability/51"
                },
                {
                "id": 52,
                "name": "Jump Jet",
                "description": "Propelled by her suit’s thrusters, Pharah soars high into the air.",
                "is_ultimate": false,
                "url": "https://overwatch-api.net/api/v1/ability/52"
                },
                {
                "id": 53,
                "name": "Hover Jets",
                "description": "Pharah hovers in mid-air.",
                "is_ultimate": false,
                "url": "https://overwatch-api.net/api/v1/ability/53"
                },
                {
                "id": 54,
                "name": "Barrage",
                "description": "Pharah directs a continuous salvo of mini-rockets to destroy groups of enemies.",
                "is_ultimate": true,
                "url": "https://overwatch-api.net/api/v1/ability/54"
                }
            ]
        },
        {
            "id": 12,
            "role": {
                "id": 1,
                "name": "offense"
            },
            "abilities": [
                {
                "id": 55,
                "name": "Hellfire Shotguns",
                "description": "Reaper tears enemies apart with twin shotguns.",
                "is_ultimate": false,
                "url": "https://overwatch-api.net/api/v1/ability/55"
                },
                {
                "id": 56,
                "name": "Wraith Form",
                "description": "Reaper becomes a shadow for a short period of time. While in this form, he takes no damage and is able to pass through enemies, but cannot fire his weapons or use other abilities.",
                "is_ultimate": false,
                "url": "https://overwatch-api.net/api/v1/ability/56"
                },
                {
                "id": 57,
                "name": "Shadow Step",
                "description": "After marking a destination, Reaper disappears and reappears at that location.",
                "is_ultimate": false,
                "url": "https://overwatch-api.net/api/v1/ability/57"
                },
                {
                "id": 58,
                "name": "The Reaping",
                "description": "Reaper collects souls from fallen enemies to replenish his health.",
                "is_ultimate": false,
                "url": "https://overwatch-api.net/api/v1/ability/58"
                },
                {
                "id": 59,
                "name": "Death Blossom",
                "description": "In a blur of motion, Reaper empties both hellfire shotguns at breakneck speed, dealing massive damage to all nearby enemies.",
                "is_ultimate": true,
                "url": "https://overwatch-api.net/api/v1/ability/59"
                }
            ]
        },
        {
            "id": 13,
            "role": {
                "id": 3,
                "name": "tank"
            },
            "abilities": [
                {
                "id": 60,
                "name": "Rocket Hammer",
                "description": "Reinhardt’s Rocket Hammer is an exemplary melee weapon, able to deal punishing damage in a wide arc with every swing.",
                "is_ultimate": false,
                "url": "https://overwatch-api.net/api/v1/ability/60"
                },
                {
                "id": 61,
                "name": "Barrier Field",
                "description": "Reinhardt projects a broad, forward-facing energy barrier, which can absorb substantial damage before it is destroyed. Although Reinhardt can protect himself and his companions behind the barrier, he cannot attack while sustaining it.",
                "is_ultimate": false,
                "url": "https://overwatch-api.net/api/v1/ability/61"
                },
                {
                "id": 62,
                "name": "Charge",
                "description": "Reinhardt charges forth in a straight line, pinning the first enemy in his path and knocking others aside. If he collides with a wall, the foe he’s carrying suffers extreme damage.",
                "is_ultimate": false,
                "url": "https://overwatch-api.net/api/v1/ability/62"
                },
                {
                "id": 63,
                "name": "Fire Strike",
                "description": "By whipping his Rocket Hammer forward, Reinhardt slings a flaming projectile which pierces and damages any enemies it touches.",
                "is_ultimate": false,
                "url": "https://overwatch-api.net/api/v1/ability/63"
                },
                {
                "id": 64,
                "name": "Earthshatter",
                "description": "Reinhardt forcefully slams his rocket hammer into the ground, knocking down and damaging all enemies in front of him.",
                "is_ultimate": true,
                "url": "https://overwatch-api.net/api/v1/ability/64"
                }
            ]
        },
        {
            "id": 14,
            "role": {
                "id": 3,
                "name": "tank"
            },
            "abilities": [
                {
                "id": 65,
                "name": "Scrap Gun",
                "description": "Roadhog's Scrap Gun fires short-range blasts of shrapnel with a wide spread. Alternatively, it can launch a shrapnel ball that detonates farther away, scattering metal fragments from the point of impact.",
                "is_ultimate": false,
                "url": "https://overwatch-api.net/api/v1/ability/65"
                },
                {
                "id": 66,
                "name": "Take A Breather",
                "description": "Roadhog restores a chunk of his health over a brief period of time.",
                "is_ultimate": false,
                "url": "https://overwatch-api.net/api/v1/ability/66"
                },
                {
                "id": 67,
                "name": "Chain Hook",
                "description": "Roadhog hurls his chain at a target; if it catches, he yanks them into close range.",
                "is_ultimate": false,
                "url": "https://overwatch-api.net/api/v1/ability/67"
                },
                {
                "id": 68,
                "name": "Whole Hog",
                "description": "After cramming a top-loader onto his Scrap Gun, Roadhog pours in ammo. For a short time, he can crank out a stream of shrapnel that knocks back enemies.",
                "is_ultimate": true,
                "url": "https://overwatch-api.net/api/v1/ability/68"
                }
            ]
        },
        {
            "id": 15,
            "role": {
                "id": 1,
                "name": "offense"
            },
            "abilities": [
                {
                "id": 69,
                "name": "Heavy Pulse Rifle",
                "description": "Soldier: 76’s rifle remains particularly steady while unloading fully-automatic pulse fire. He can also fire single shots with pinpoint accuracy.",
                "is_ultimate": false,
                "url": "https://overwatch-api.net/api/v1/ability/69"
                },
                {
                "id": 70,
                "name": "Helix Rockets",
                "description": "Tiny rockets spiral out of Soldier: 76’s Pulse Rifle in a single burst. The rockets’ explosion damages enemies in a small radius.",
                "is_ultimate": false,
                "url": "https://overwatch-api.net/api/v1/ability/70"
                },
                {
                "id": 71,
                "name": "Sprint",
                "description": "Whether he needs to evade a firefight or get back into one, Soldier: 76 can rush ahead in a burst of speed. His sprint ends if he takes an action other than charging forward.",
                "is_ultimate": false,
                "url": "https://overwatch-api.net/api/v1/ability/71"
                },
                {
                "id": 72,
                "name": "Biotic Field",
                "description": "Soldier: 76 plants a biotic emitter on the ground. Its energy projection restores health to 76 and any of his squadmates within the field.",
                "is_ultimate": false,
                "url": "https://overwatch-api.net/api/v1/ability/72"
                },
                {
                "id": 73,
                "name": "Tactical Visor",
                "description": "Soldier: 76’s pinpoint targeting visor “locks” his aim on the threat closest to his crosshairs. If an enemy leaves his line of sight, Soldier: 76 can quickly switch to another target.",
                "is_ultimate": true,
                "url": "https://overwatch-api.net/api/v1/ability/73"
                }
            ]
        },
        {
            "id": 16,
            "role": {
                "id": 4,
                "name": "support"
            },
            "abilities": [
                {
                "id": 74,
                "name": "Photon Projector",
                "description": "Symmetra’s weapon emits a short-range beam that homes in on a nearby enemy, dealing continuous damage that increases the longer it is connected. The projector can also release a charged energy ball that deals high damage.",
                "is_ultimate": false,
                "url": "https://overwatch-api.net/api/v1/ability/74"
                },
                {
                "id": 75,
                "name": "Sentry Turret",
                "description": "Symmetra sets up a small turret that automatically fires speed-reducing blasts at the nearest enemy within range. Several turrets can be built on the battlefield at once.",
                "is_ultimate": false,
                "url": "https://overwatch-api.net/api/v1/ability/75"
                },
                {
                "id": 76,
                "name": "Photon Shield",
                "description": "Symmetra surrounds an ally with a hard-light shield that absorbs damage and persists as long as that ally remains alive.",
                "is_ultimate": false,
                "url": "https://overwatch-api.net/api/v1/ability/76"
                },
                {
                "id": 77,
                "name": "Teleporter",
                "description": "Symmetra places a teleporter exit pad at her current location, and connects it to a teleporter entry pad at her team’s starting point. Allies can travel through the entry pad to the exit pad instantly, enabling them to return to the fight swiftly after being defeated.",
                "is_ultimate": true,
                "url": "https://overwatch-api.net/api/v1/ability/77"
                }
            ]
        },
        {
            "id": 17,
            "role": {
                "id": 2,
                "name": "defense"
            },
            "abilities": [
                {
                "id": 78,
                "name": "Rivet Gun",
                "description": "Torbjörn fires rivets at long range, or ejects molten metal from his gun in a short, close-range burst.",
                "is_ultimate": false,
                "url": "https://overwatch-api.net/api/v1/ability/78"
                },
                {
                "id": 79,
                "name": "Forge Hammer",
                "description": "Torbjörn uses his multipurpose hammer to build, upgrade and repair turrets. In a pinch, it can also be swung as a weapon.",
                "is_ultimate": false,
                "url": "https://overwatch-api.net/api/v1/ability/79"
                },
                {
                "id": 80,
                "name": "Build Turret",
                "description": "Torbjörn constructs an enemy-tracking autocannon. He can use his Forge Hammer to repair or upgrade it, increasing its health and adding a second cannon barrel and a rocket launcher.",
                "is_ultimate": false,
                "url": "https://overwatch-api.net/api/v1/ability/80"
                },
                {
                "id": 81,
                "name": "Scrap Collector",
                "description": "Collect scrap to gain resources.",
                "is_ultimate": false,
                "url": "https://overwatch-api.net/api/v1/ability/81"
                },
                {
                "id": 82,
                "name": "Armor Pack",
                "description": "Torbjörn deploys an armor upgrade; either he or his allies can pick it up to absorb some damage.",
                "is_ultimate": false,
                "url": "https://overwatch-api.net/api/v1/ability/82"
                },
                {
                "id": 83,
                "name": "Molten Core",
                "description": "After overheating his personal forge, Torbjörn gains a significant amount of armor. He also attacks (and builds and repairs turrets) far faster than normal.",
                "is_ultimate": true,
                "url": "https://overwatch-api.net/api/v1/ability/83"
                }
            ]
        },
        {
            "id": 18,
            "role": {
                "id": 1,
                "name": "offense"
            },
            "abilities": [
                {
                "id": 84,
                "name": "Pulse Pistols",
                "description": "Tracer rapid-fires both of her pistols.",
                "is_ultimate": false,
                "url": "https://overwatch-api.net/api/v1/ability/84"
                },
                {
                "id": 85,
                "name": "Blink",
                "description": "Tracer zips horizontally through space in the direction she’s moving, and reappears several yards away. She stores up to three charges of the blink ability and generates more every few seconds.",
                "is_ultimate": false,
                "url": "https://overwatch-api.net/api/v1/ability/85"
                },
                {
                "id": 86,
                "name": "Recall",
                "description": "Tracer bounds backward in time, returning her health, ammo and position on the map to precisely where they were a few seconds before.",
                "is_ultimate": false,
                "url": "https://overwatch-api.net/api/v1/ability/86"
                },
                {
                "id": 87,
                "name": "Pulse Bomb",
                "description": "Tracer lobs a large bomb that adheres to any surface or unfortunate opponent it lands on. After a brief delay, the bomb explodes, dealing high damage to all enemies within its blast radius.",
                "is_ultimate": true,
                "url": "https://overwatch-api.net/api/v1/ability/87"
                }
            ]
        },
        {
            "id": 19,
            "role": {
                "id": 2,
                "name": "defense"
            },
            "abilities": [
                {
                "id": 88,
                "name": "Widow's Kiss",
                "description": "Widowmaker’s versatile sniper rifle is ideal for scope-aimed shots at distant targets. Should targets close to medium range, the rifle can also be fired in fully-automatic mode.",
                "is_ultimate": false,
                "url": "https://overwatch-api.net/api/v1/ability/88"
                },
                {
                "id": 89,
                "name": "Grappling Hook",
                "description": "Widowmaker launches a grappling hook towards the location she’s aiming at – when the hook connects with a scalable surface, she’s quickly drawn towards it, allowing her to expand her view of the battlefield and evade or flank targets.",
                "is_ultimate": false,
                "url": "https://overwatch-api.net/api/v1/ability/89"
                },
                {
                "id": 90,
                "name": "Venom Mine",
                "description": "Widowmaker adheres a swiftly-arming venom mine to nearly any surface. When a target wanders within range of the mine’s motion trigger, it explodes, delivering poison gas to any enemies in the vicinity.",
                "is_ultimate": false,
                "url": "https://overwatch-api.net/api/v1/ability/90"
                },
                {
                "id": 91,
                "name": "Infra-Sight",
                "description": "Widowmaker’s recon visor allows her to see the heat signatures of her targets through walls and objects for a moderate amount of time. This enhanced vision is shared with her allies.",
                "is_ultimate": true,
                "url": "https://overwatch-api.net/api/v1/ability/91"
                }
            ]
        },
        {
            "id": 20,
            "role": {
                "id": 3,
                "name": "tank"
            },
            "abilities": [
                {
                "id": 92,
                "name": "Tesla Cannon",
                "description": "Winston’s weapon fires a short-range electric barrage for as long as he holds down the trigger.",
                "is_ultimate": false,
                "url": "https://overwatch-api.net/api/v1/ability/92"
                },
                {
                "id": 93,
                "name": "Jump Pack",
                "description": "Assisted by his energy pack, Winston lunges through the air, dealing significant damage and staggering nearby enemies when he lands.",
                "is_ultimate": false,
                "url": "https://overwatch-api.net/api/v1/ability/93"
                },
                {
                "id": 94,
                "name": "Barrier Projector",
                "description": "Winston's barrier projector extends a bubble-shaped field that absorbs damage until it's destroyed. Allies protected by the barrier can return fire from within it.",
                "is_ultimate": false,
                "url": "https://overwatch-api.net/api/v1/ability/94"
                },
                {
                "id": 95,
                "name": "Primal Rage",
                "description": "Winston embraces his animal nature, significantly boosting his health and making him very difficult to kill, strengthening his melee attack, and allowing him to use his Jump Pack ability more frequently. While raging, Winston can only make melee and Jump Pack attacks.",
                "is_ultimate": true,
                "url": "https://overwatch-api.net/api/v1/ability/95"
                }
            ]
        },
        {
            "id": 21,
            "role": {
                "id": 3,
                "name": "tank"
            },
            "abilities": [
                {
                "id": 96,
                "name": "Particle Cannon",
                "description": "Zarya’s mighty Particle Cannon unleashes a short-range beam of destructive energy. Alternatively, Zarya can lob an explosive charge to strike multiple opponents.",
                "is_ultimate": false,
                "url": "https://overwatch-api.net/api/v1/ability/96"
                },
                {
                "id": 97,
                "name": "Particle Barrier",
                "description": "The Particle Cannon can emit a personal barrier that shields Zarya against incoming attacks, redirecting their energy to enhance her weapon’s damage and the width of its beam.",
                "is_ultimate": false,
                "url": "https://overwatch-api.net/api/v1/ability/97"
                },
                {
                "id": 98,
                "name": "Projected Barrier",
                "description": "Zarya surrounds one of her teammates with an energy barrier that simultaneously absorbs fire and boosts the power of her Particle Cannon.",
                "is_ultimate": false,
                "url": "https://overwatch-api.net/api/v1/ability/98"
                },
                {
                "id": 99,
                "name": "Energy",
                "description": "Damage blocked increases Particle Cannon damage.",
                "is_ultimate": false,
                "url": "https://overwatch-api.net/api/v1/ability/99"
                },
                {
                "id": 100,
                "name": "Graviton Surge",
                "description": "Zarya launches a gravity bomb that draws in enemy combatants and deals damage while they’re trapped.",
                "is_ultimate": true,
                "url": "https://overwatch-api.net/api/v1/ability/100"
                }
            ]
        },
        {
            "id": 22,
            "role": {
                "id": 4,
                "name": "support"
            },
            "abilities": [
                {
                "id": 101,
                "name": "Orb of Destruction",
                "description": "Zenyatta projects his destructive energy orbs either individually, or in a rapid-fire volley after a few seconds spent gathering power.",
                "is_ultimate": false,
                "url": "https://overwatch-api.net/api/v1/ability/101"
                },
                {
                "id": 102,
                "name": "Orb of Harmony",
                "description": "Zenyatta casts an orb over the shoulder of a targeted ally. So long as Zenyatta maintains line of sight, the orb slowly restores health to his ally. Only one ally can receive the orb's benefit at a time.",
                "is_ultimate": false,
                "url": "https://overwatch-api.net/api/v1/ability/102"
                },
                {
                "id": 103,
                "name": "Orb of Discord",
                "description": "Attaching the orb of discord to an opponent amplifies the amount of damage they receive for as long as Zenyatta maintains line of sight. Only one opponent can suffer the orb's effects at a time.",
                "is_ultimate": false,
                "url": "https://overwatch-api.net/api/v1/ability/103"
                },
                {
                "id": 104,
                "name": "Transcendence",
                "description": "Zenyatta enters a state of heightened existence for a short period of time. While transcendent, Zenyatta cannot use abilities or weapons, but is immune to damage, moves twice as fast, and automatically restores his health and that of nearby allies.",
                "is_ultimate": true,
                "url": "https://overwatch-api.net/api/v1/ability/104"
                }
            ]
        },
        {
            "id": 23,
            "role": {
                "id": 1,
                "name": "offense"
            },
            "abilities": [
                {
                "id": 105,
                "name": "Machine Pistol",
                "description": "Sombra’s fully-automatic machine pistol fires in a short-range spread.",
                "is_ultimate": false,
                "url": "https://overwatch-api.net/api/v1/ability/105"
                },
                {
                "id": 106,
                "name": "Hack",
                "description": "Sombra hacks enemies to temporarily stop them from using their abilities, or hacks first aid kits to make them useless to her opponents.",
                "is_ultimate": false,
                "url": "https://overwatch-api.net/api/v1/ability/106"
                },
                {
                "id": 107,
                "name": "Thermoptic Camo",
                "description": "Sombra becomes invisible for a short period of time, during which her speed is boosted considerably. Attacking, using offensive abilities, or taking damage disables her camouflage.",
                "is_ultimate": false,
                "url": "https://overwatch-api.net/api/v1/ability/107"
                },
                {
                "id": 108,
                "name": "Translocator",
                "description": "Sombra tosses out a translocator beacon. She can instantly return to the beacon’s location while it is active (including when it’s in mid-flight).",
                "is_ultimate": false,
                "url": "https://overwatch-api.net/api/v1/ability/108"
                },
                {
                "id": 109,
                "name": "EMP",
                "description": "Sombra discharges electromagnetic energy in a wide radius, destroying enemy barriers and shields and hacking all opponents caught in the blast.",
                "is_ultimate": true,
                "url": "https://overwatch-api.net/api/v1/ability/109"
                }
            ]
        },
    ]
    //Change this one instead
    this.extraAPI = liveExtraAPI.slice()
    this.getExtraAPI = function() { return this.extraAPI }
})