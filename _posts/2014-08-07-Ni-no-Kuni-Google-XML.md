---
layout: post
title: "Ni no Kuni Fan Translation Tools"
date: 2014-08-07
tags: tools
images:
preview: "assets/images/ni-no-kuni-thumb.jpg"
download:
read:
infourl:
keywords: "Google, XML, C#, Fan translation, Tools, Hobby"
description: "Tools to streamline the fan translation effort for the Japan-exclusive DS title Ni no Kuni."
---

As a hobby project alongside my studies, I joined the fan translation effort for the DS title <i>Ni no Kuni</i> which only released in Japan because of localisation difficulties, most likely because of the book that was added to each retail version. A PS3 version of the game did appear with a digital version of that book (with some alterations).

My role was initially to clean the Japanese text from the images used in the game and insert the English translation. My role quickly grew into more of a team lead role, overseeing the project, recruiting people, fixing images and text, creating the actual patches and developing tools.

One of these tools was a program to read and convert the XML text files that were imported into the game into Google Spreadsheets and upload them using the Google API. All this was meant to streamline the editing process, making the files more accessible to different team members, but also more readable to those not used to XML files. Along with the XML to Google Spreadsheet conversion was the counter conversion, downloading the data from the Google Spreadsheets and converting it back to XML and writing it to a file. This became part of the patching system we used throughout the rest of the project.

UPDATE: The fan translation has been released!!