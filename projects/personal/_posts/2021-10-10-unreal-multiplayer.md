---
layout: post
title: "Unreal Online Multiplayer"
date: 2021-10-10
tags: [C++, Unreal, Online, Multiplayer, Networking]
featured: yes
images: 
 - "/assets/images/ue-multiplayer.png"
preview: "/assets/images/ue-multiplayer-thumb.png"
download: 
read:
infourl:
keywords: "Unreal, Online, Multiplayer"
description: "As an exercise to learn Unreal Engine 4 multiplayer code in preparation for a work project, I made an online shooter inspired by Splatoon."
---

In response to working on an internal project at Wushu Studios where we worked on a multiplayer prototype and seeing the lack of networking knowledge within our team, I decided to dive into learning multiplayer networking coding systems in Unreal. I developed my own Splatoon-like area-based capture point game with full multiplayer support. I played the game several times with several groups.
A big challenge was the general connection setup. The project required a lot of investigation into networking logic for the general internet, as my connections ran into firewalls and NAT issues. I developed a NAT punchthrough application to connect to a separate service running online on Heroku for "matchmaking", which was effectively just matching up the couple of active players with each other, as I never intended to release it to a wider audience.

### Summary of work
- Basic point capture colouring mechanic
- Replication
- RPCs
- MiniUpnp
	- Including plugins, 3rd party libraries in UE4 project
- NAT Punchthrough
	- Heroku, python flask app
	- SocketIO
	- UE4 SocketIO plugin