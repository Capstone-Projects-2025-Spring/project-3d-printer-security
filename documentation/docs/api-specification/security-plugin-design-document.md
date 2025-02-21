---
sidebar_position: 3
---

# SecurityPlugin

## `public class FileManager`

File manager is a class that is responsible for all of the plugin’s IO operations. It accesses submitted g-code files through a plugin hook and stores it in a queue for processing.

## `public list gcodequeue`

This is the queue of g-code files submitted to octoprint by the user.

## `public void __populate_queue()`

A method that adds new g-code files to the queue.

## `public Bool has_files()`

* **Returns:** False if queue is empty,  True otherwise.

## `public String has_files()`

* **Returns:** The first g-code file in the queue as a String.
  

## `public class GcodeScanner`

GcodeScanner is a class related to the scanning of g-code for pre specified criteria. 

## `public dict scan_gcode(String gcode)`

This method receives a g-code as a string and scans it based on criteria from an included configuration file. If errors are found they are returned as a dict with the error code and the line at which they were found. If none are found it returns an empty dict. The error codes are as follows
  - 1: Collision 
  - 2: Excessive filament predicted
  - 3:  Excessive temperature predicted

* **Parameters:** `gcode` — Unformatted g-code as a String
* **Returns:** `dict` - dict with error codes and line, on which they were found.

## `public class Configuration`

Configuration is a class responsible for reading and writing to the configuration file.The file has fields for maximum, permitted filament and maximum permitted temperature. The values are read, and stored in the class and are to be edited with their associated methods. Upon initialization it populates the values with values from the .cfg file.

## `public float __mfillament`

This is the maximum permited amount of filament. 


## `public float __temperature`

This is the maximum permited amount of temperature. 

## `public float max_fillament(fill:float = none)`


This method returns maximum filament, if a parameter is specified it changes the current stored value to it. 


* **Parameters:** `fill` — New value for fillament.
* **Returns:** `float` - Currently held value.
  
## `public float max_temperature(temp: float = none)`


This method returns maximum temperature, if a parameter is specified it changes the current stored value to it.

* **Parameters:** `temp` — New value for temperature.
* **Returns:** `float` - Currently held value.
  

## `public void save_config()`

This method saves the currently held values to the .cfg file, and should be called whenever they are changed.

## `public class Display`

This is a class that is responsible for displaying information using a plugin mixin. It is used for displaying warning messages.


## `public void display_YN(String message)`

Displays the message on the UI as a popup, used for errors. Returns true if True is selected on the popup, returns False if no is selected.

* **Parameters:** `message` — Message to be displayed.
