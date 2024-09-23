export function generateGradient(byteString) {
  if (byteString.length < 32) {
    throw new Error("Input must be at least 32 bytes long.");
  }

  const colorNumber = 3;
  const colorSeparation = 60;
  const byteValues = Array.from(byteString, (char) => char.charCodeAt(0));
  const saturation = 80 + (byteValues[0] % 15); // Saturation between 85-100%
  const lightness = 45 + (byteValues[1] % 20); // Lightness between 50-70%
  const baseHue = (byteValues[2] * 1.4) % 360;

  // Generate three colors, skipping a colorSeparation distance on the color wheel
  const bands = Array.from({ length: colorNumber }).map((_, i) => {
    const hue = (baseHue + i * colorSeparation) % 360; // Adjust hue with offset
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  }).join(', ');

  let gradientAngle = byteValues[3] % 180; // Initial angle range between 0-179 degrees

  // Shift the angle to fit within the left or right side constraints (45-135 and 225-315 degrees)
  gradientAngle = gradientAngle < 45 ? gradientAngle += 315 : gradientAngle > 135 ? gradientAngle += 90 : gradientAngle;

  return `linear-gradient(${gradientAngle}deg, ${bands})`;

}
