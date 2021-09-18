---
layout: post
title: "Into the Light"
date: 2019-01-19
tags: [C++, Unreal, PC, Game, Art, Game Design]
featured:
images:
 - "/assets/images/low-poly-fire.jpg"
 - "/assets/images/rig.jpg"
 - "/assets/images/thorns.gif"
preview: "assets/images/low-poly-fire-thumb.png"
download:
read:
infourl:
keywords: "Maya, Unreal, C++, 3D modeling, rigging, animation, PC, Game"
description: "Exploring different parts of game development to learn ever more. This time, digging into Unreal with C++ to create a game in which I want to play with light."
---

My first larger practice project to learn all facets of Unreal Engine 4.

### Exploring the 3D Asset Pipeline
Throughout this project, I intended to broaden my knowledge of all aspects of game dev, from level design, getting to know the engine, getting familiar with programming in this environment, as well as making my way through the 3D art pipeline from start to end.
I made the conscious decision to take some shortcuts in the art department. The first was largely foregoing the tedium of retopology by sculpting in ZBrush and decimating the model down to a somewhat chaotic looking low-poly model. For elements that needed to animate, I adjusted them in Maya, rigged them and got to animating. The second shortcut was in texturing, where I texture by assigning large slabs of the model to one pixel in a custom colour palette texture.

### C++ and Unreal
This project allowed me to discover Unreal and brush up on my C++ skills. Along the way I discovered the workings of Unreal, including the power of Blueprints. This provided a good opportunity to dive into setting up a good mix between C++ and Blueprints to make the most of the engine.

### Lighting and Achieving Darkness
With the idea of achieving complete darkness, I had to start by stripping out default Unreal startup projects settings like post processing effects and camera settings to adjust to darkness. There is actually a GDC talk from the developers of Below that deals with this exact issue as well, including not letting the player get around it through screen brightness or gamma settings, which was a big inspiration for me to get started on this project.

### UE5 Upgrade
With the release of Unreal Engine 5, the Lumen system provides exactly what I needed for this project and better matches my needs for what I envisioned for this project. I also still had problems with getting shadows on dynamic objects, so that was the decisive point that made me go through with the switch. It also improves this project from learning Unreal Engine 4, which I got quite comfortable with throughout this project and my work, to a chance at exploring Unreal Engine 5 as well.