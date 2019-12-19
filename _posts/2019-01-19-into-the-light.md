---
layout: post
title: "Into the Light"
date: 2019-01-19
tags: [C++, Unreal, PC, Game, Art, Game Design]
images:
 - "/assets/images/light-and-dark.jpg"
 - "/assets/images/rig.jpg"
preview: "assets/images/light-and-dark-thumb.jpg"
download:
read:
infourl:
keywords: "Maya, Unreal, C++, 3D modeling, rigging, animation, PC, Game"
description: "Exploring different parts of game development to learn ever more. This time, digging into Unreal with C++ to create a game in which I want to play with light."
---

My primary game development experience lies with the Unity Engine. I touched Game Maker as well, but a big name I still wanted to dig into was the Unreal Engine. So that's just what I did.

I set this project up so that I can explore many different aspects that I was not too familiar with yet, like fully going through the 3D asset pipeline from modeling in Maya, rigging and texturing. I aim for a low-poly look and feel and want to texture my character and world in full slabs of colour through a colour palette texture with just a couple of colours. Rigging is also a very interesting issue and I learned the hard way that you need to keep rigging and animation in mind in the modeling itself and that not everything animates well. Still, it's a very interesting venture to even just learn about rigging options, possibilities and what the effects are on the output and the assets that make it to the development department.

I wanted to get to work in C++ again, so I combined that with working in the Unreal Engine, which had me learn both how Unreal worked and how C++ works within Unreal. My primary aim is to use the C++ side of Unreal, but I found out more and more that although I was initially adverse to Unreal Blueprints, their visual scripting tool, the big advantage of what Unreal offers is the ease of blueprints combined with the more complex functionality that can be written in C++. Those functions can also be exposed to Blueprints, so I fully intend to dive into the perfect marriage between these different options.

Default Unreal startup projects generally come with a number of pre-defined settings, which is great to get started, but I soon found out that achieving complete darkness is quite tough. It took quite a while to fiddle around and find settings that do not allow for cheating by changing screen brightness, contrast and/or gamma settings. There is actually a GDC talk from the developers of Below that deals with this exact issue as well, which was a big inspiration for me to get started on this project.