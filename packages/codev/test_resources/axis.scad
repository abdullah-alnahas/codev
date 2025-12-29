// Axis visualization test for 3D viewer orientation verification
// Uses BOSL2's frame_ref() to show X, Y, Z axes clearly
//
// Expected orientation in viewer:
//   X (Red)   -> Right
//   Y (Green) -> Front (towards camera in default view)
//   Z (Blue)  -> Up

// Quality settings
$fa = 1;
$fs = 0.1;

// BOSL2 library
include <BOSL2/std.scad>

// Create axis reference frame with large arrows for visibility
frame_ref(s=30);
