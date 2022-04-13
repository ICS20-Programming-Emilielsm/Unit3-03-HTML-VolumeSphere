// Copyright (c) 2022 Ms Raffin All rights reserved
//
// Created by: Ms Raffin
// Created on: March 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates area and perimeter of rectangle.
 */
function calcVolume () {
  // get user input
  let radius = parseFloat(document.getElementById("radius").value)
  
  
  // calculate the volume
  let volume = (4/3) * Math.PI * radius ** 3
  
  // display the results
  document.getElementById("volume").innerHTML = "The volume is " + volume.toFixed(2) + "cm<sup>3</sup>"
}