---
layout: post
title: "Advanced Graphics: Ray Tracer vs Path Tracer"
date: 2015-11-24
tags: graphics
images:
 - "assets/images/path tracer.jpg"
preview: "assets/images/path tracer-thumb.jpg"
download:
read: "/assets/content/Ray Tracer vs Path Tracer.pdf"
infourl:
keywords: "Graphics, C++, Ray tracer, Path tracer"
description: "Implementation of a basic ray tracer and a path tracer and a comparison between them"
---

An assignment for my Master's Advanced Graphics course was to implement the basic Whitted-style ray tracer and a path tracer, fully in C++, with several features and options. These two ray tracers needed to be compared and a report was to show the differences.

I developed the entire Whitted-style ray tracer and path tracer, with basic shapes, materials, OBJ/FBX file import, depth of field and several features to speed up the convergence and noise reduction, such as Importance Sampling and a Russian Roulette solution to the Monte Carlo system.