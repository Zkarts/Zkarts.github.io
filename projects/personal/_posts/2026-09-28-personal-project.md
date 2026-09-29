---
layout: post
title: "Unreal Learning Project"
date: 2026-09-28
tags: [C++, Unreal, PC, Game, Multiplayer, Networking]
featured: yes
images:
- "assets/images/aq-dod.png"
- "assets/images/aq-dod2.png"
- "assets/images/aq-dod3.png"
- "assets/images/aq-tonemapping.png"
- "assets/images/aq-mass.png"
- "assets/images/aq-shading.png"
preview: "assets/images/aq-thumb.png"
download:
read:
infourl:
keywords: "C++, Unreal, Learning, PC, Game, Multiplayer, Networking"
description: "A personal game development project that grows along with me"
---

This is a personal project I have been working on slowly for several years with a friend to explore the various systems and features of Unreal Engine, gradually improving our skills and sharing our knowledge. He does more work on the art and I tackle the more complex programming challenges.

### Work summary
- Data-oriented programming
- Unreal Engine 5's Mass system
- Lighting management
- UI setup and scaling
	- Common UI
- Network coding
- Built ability system similar to Gameplay Ability System from scratch
	- Includes networking capability
	- Support for modular, reusable components
- Implemented Dialogue system
	- Fully animatable text in dialogue box
- Post processing, render-target based Fog of War solution
- FlowGraph inclusion for mission flow
- Enhanced Input
- Physically based lighting
- Tonemapping
- Post Processing shaders (toon shader, impact frame shader)

### Phase 1: Data-oriented Programming Vampire Survivors-like
There have been various phases for this project. Initially, we wanted to build something akin to Vampire Survivors, a small, arcade-y game that we could play around with with characters and abilities. I utilised Unreal Engine 5's new ECS system called Mass to reach a large number of enemies and projectiles. This worked quite well, technically, but we ran into game design issues that Vampire Survivors essentially also has, where you can't actually do that much. So we pivoted to a more active gameplay style.
Additionally, the Mass system worked, but it meant I was the only one who could work on the majority of the game's systems, because the friend I work on the project with is not a programmer. We wanted more interesting enemies to go with the improved agency of the player, which required switching away from the limiting system of Mass, which was primarily built for crowd simulation and not much more, back to the general Actor system of Unreal.

### Phase 2: Twin-stick Shooter like Endless Dungeon
We wanted more agency for the player, more choices during gameplay, as well as more control over the enemies. We landed on a style and system akin to the Endless Dungeon game, a character-based twin-stick shooter with active abilities. This is currently still our target, but we have been building various systems around this, such as, but not limited to:
- Dialogue system
- Fog of War system
- Ability system
- Toon shading
- FlowGraph for mission flow

We also decided we wanted the game to support online multiplayer, because it would be fun to play together, or with other friends, which meant keeping this in mind from the start and learning together to do this right. I could tap into previous experience both at work and my previous personal multiplayer project.
