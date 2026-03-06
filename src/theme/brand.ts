/**
 * Sales Coach Brand Tokens
 * Single source of truth for all design values
 */

// ═══════════════════════════════════════════════════════════════
// COLORS
// ═══════════════════════════════════════════════════════════════

export const COLORS = {
  // Primary palette
  PRIMARY: "#00D67D",
  SECONDARY: "#0A0A0A",

  // Background colors
  BACKGROUND: "#0A0A0A",
  SURFACE: "#1A1A1A",
  SURFACE_HIGH: "#2A2A2A",

  // Text colors
  TEXT_PRIMARY: "#FFFFFF",
  TEXT_SECONDARY: "#A0A0A0",
  TEXT_MUTED: "#666666",

  // Semantic colors
  SUCCESS: "#00D67D",
  WARNING: "#FFB800",
  ERROR: "#FF4444",
  INFO: "#0095FF",

  // Transparent variants
  PRIMARY_10: "rgba(0, 214, 125, 0.1)",
  PRIMARY_20: "rgba(0, 214, 125, 0.2)",
  ERROR_10: "rgba(255, 68, 68, 0.1)",
  WARNING_10: "rgba(255, 184, 0, 0.1)",
} as const;

// ═══════════════════════════════════════════════════════════════
// SPACING
// ═══════════════════════════════════════════════════════════════

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
} as const;

// ═══════════════════════════════════════════════════════════════
// BORDER RADIUS
// ═══════════════════════════════════════════════════════════════

export const RADIUS = {
  sm: 4,
  md: 8,
  lg: 16,
  xl: 24,
  full: 9999,
} as const;

// ═══════════════════════════════════════════════════════════════
// TYPOGRAPHY
// ═══════════════════════════════════════════════════════════════

export const TYPOGRAPHY = {
  h1: {
    fontSize: 32,
    lineHeight: 40,
    fontWeight: "700" as const,
    fontFamily: "SpaceGrotesk_700Bold",
  },
  h2: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: "600" as const,
    fontFamily: "SpaceGrotesk_600SemiBold",
  },
  h3: {
    fontSize: 20,
    lineHeight: 28,
    fontWeight: "600" as const,
    fontFamily: "SpaceGrotesk_600SemiBold",
  },
  body: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "400" as const,
    fontFamily: "Inter_400Regular",
  },
  bodySmall: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "400" as const,
    fontFamily: "Inter_400Regular",
  },
  caption: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: "500" as const,
    fontFamily: "Inter_500Medium",
  },
  button: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "600" as const,
    fontFamily: "Inter_600SemiBold",
  },
} as const;

// ═══════════════════════════════════════════════════════════════
// SHADOWS (for iOS)
// ═══════════════════════════════════════════════════════════════

export const SHADOWS = {
  sm: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  md: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 4,
  },
  lg: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
  },
} as const;

// ═══════════════════════════════════════════════════════════════
// ANIMATION
// ═══════════════════════════════════════════════════════════════

export const ANIMATION = {
  duration: {
    fast: 150,
    normal: 200,
    slow: 300,
  },
  easing: {
    easeOut: [0.0, 0.0, 0.2, 1],
    easeIn: [0.4, 0.0, 1, 1],
    easeInOut: [0.4, 0.0, 0.2, 1],
  },
} as const;

// ═══════════════════════════════════════════════════════════════
// SCORE COLORS
// ═══════════════════════════════════════════════════════════════

/**
 * Get color based on score value
 */
export function getScoreColor(score: number): string {
  if (score >= 86) return COLORS.PRIMARY;
  if (score >= 71) return COLORS.PRIMARY;
  if (score >= 41) return COLORS.WARNING;
  return COLORS.TEXT_MUTED;
}

// ═══════════════════════════════════════════════════════════════
// THEME HOOK
// ═══════════════════════════════════════════════════════════════

/**
 * Hook to access theme values
 * Placeholder for future dark/light mode support
 */
export function useTheme() {
  return {
    colors: COLORS,
    spacing: SPACING,
    radius: RADIUS,
    typography: TYPOGRAPHY,
    shadows: SHADOWS,
    animation: ANIMATION,
  };
}
