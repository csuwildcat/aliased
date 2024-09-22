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
  const alpha = 0.7; // Set alpha transparency for blending

  // Colors with alpha for transparency
  const color1 = `hsla(${hue1}, ${saturation}%, ${lightness}%, ${alpha})`;
  const color2 = `hsla(${hue2}, ${saturation}%, ${lightness}%, ${alpha})`;

  // Generate distinct center points based on byte values for each gradient
  const x1 = (byteValues[4] % 81) + 10; // X coordinate for the first gradient between 10% and 90%
  const y1 = (byteValues[5] % 81) + 10; // Y coordinate for the first gradient between 10% and 90%
  const x2 = (byteValues[6] % 81) + 10; // X coordinate for the second gradient between 10% and 90%
  const y2 = (byteValues[7] % 81) + 10; // Y coordinate for the second gradient between 10% and 90%

  // Adjust positions to ensure the gradients are not placed too closely to each other
  if (Math.abs(x1 - x2) < 20) x2 = (x2 + 20) % 90 + 10;
  if (Math.abs(y1 - y2) < 20) y2 = (y2 + 20) % 90 + 10;

  // Create the gradients with alpha colors to ensure full coverage and blending
  return `radial-gradient(circle at ${x1}% ${y1}%, ${color1} 0%, ${color2} 50%),
          radial-gradient(circle at ${x2}% ${y2}%, ${color2} 0%, ${color1} 50%)`;
}
