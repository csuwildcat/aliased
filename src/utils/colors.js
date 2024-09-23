export function generateGradient(byteString) {
  if (byteString.length < 32) {
    throw new Error("Input must be at least 32 bytes long.");
  }

  const byteValues = Array.from(byteString, (char) => char.charCodeAt(0));
  const saturation = 85 + (byteValues[0] % 15); // Saturation between 85-100%
  const lightness = 50 + (byteValues[1] % 20); // Lightness between 50-70%

  // Function to generate a color based on a base hue and offset
  const generateColor = (baseHue, offset) => {
    const hue = (baseHue + offset) % 360; // Adjust hue with offset
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  };

  // Base hue for the gradient
  const baseHue = (byteValues[2] * 1.4) % 360;

  // Generate three colors, skipping a band (60 degrees) between each
  const color1 = generateColor(baseHue, 0); // First color
  const color2 = generateColor(baseHue, 60); // Second color, skipping one band
  const color3 = generateColor(baseHue, 120); // Third color, skipping another band

  // Determine the gradient angle based on the input string
  const gradientAngle = byteValues[3] % 360; // Angle between 0-359 degrees

  // Create the linear gradient string
  const linearGradient = `linear-gradient(${gradientAngle}deg, ${color1}, ${color2}, ${color3})`;

  return linearGradient;
}
