export function generateGradients(byteString) {
  if (byteString.length < 32) {
    throw new Error("Input must be at least 32 bytes long.");
  }

  const byteValues = Array.from(byteString, (char) => char.charCodeAt(0));

  // Generate two adjacent but distinct hues
  const hue1 = (byteValues[0] * 1.4) % 360; // Base hue
  const hueOffset = 30 + (byteValues[1] % 30); // Offset between 30 and 60 degrees for distinction
  const hue2 = (hue1 + hueOffset) % 360; // Second hue, adjacent but distinct
  const saturation = 85 + (byteValues[2] % 15); // Saturation between 85-100%
  const lightness = 50 + (byteValues[3] % 20); // Lightness between 50-70%

  const color1 = `hsl(${hue1}, ${saturation}%, ${lightness}%)`;
  const color2 = `hsl(${hue2}, ${saturation}%, ${lightness}%)`;

  // Dynamically set the center points to ensure the gradients are distinct and well spaced
  const x1 = 20 + (byteValues[4] % 40); // X coordinate for the first gradient between 20% and 60%
  const y1 = 20 + (byteValues[5] % 40); // Y coordinate for the first gradient between 20% and 60%
  const x2 = 70 + (byteValues[6] % 20); // X coordinate for the second gradient between 70% and 90%
  const y2 = 70 + (byteValues[7] % 20); // Y coordinate for the second gradient between 70% and 90%

  // Create the gradients with adjusted sizes to ensure full coverage and distinct positions
  return `radial-gradient(circle at ${x1}% ${y1}%, ${color1} 0%, ${color2} 50%, transparent 100%),
          radial-gradient(circle at ${x2}% ${y2}%, ${color2} 0%, ${color1} 50%, transparent 100%)`;
}
