import React from "react";
import {
  Pressable,
  Text,
  ActivityIndicator,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from "react-native";
import * as Haptics from "expo-haptics";
import { COLORS, SPACING, RADIUS, TYPOGRAPHY } from "@/theme/brand";

// ═══════════════════════════════════════════════════════════════
// TYPES
// ═══════════════════════════════════════════════════════════════

type ButtonVariant = "primary" | "secondary" | "ghost" | "destructive";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  /** Button text content */
  children: string;
  /** Visual variant */
  variant?: ButtonVariant;
  /** Size preset */
  size?: ButtonSize;
  /** Show loading spinner and disable button */
  isLoading?: boolean;
  /** Disable button */
  disabled?: boolean;
  /** Full width button */
  fullWidth?: boolean;
  /** Press handler */
  onPress?: () => void;
  /** Additional container styles */
  style?: ViewStyle;
  /** Test ID for testing */
  testID?: string;
}

// ═══════════════════════════════════════════════════════════════
// COMPONENT
// ═══════════════════════════════════════════════════════════════

/**
 * Button Component
 *
 * Primary CTA component with haptic feedback, loading states,
 * and multiple variants.
 *
 * @example
 * <Button onPress={handleSubmit}>Continuar</Button>
 * <Button variant="secondary" isLoading={isSaving}>Guardar</Button>
 */
export function Button({
  children,
  variant = "primary",
  size = "md",
  isLoading = false,
  disabled = false,
  fullWidth = false,
  onPress,
  style,
  testID,
}: ButtonProps) {
  const isDisabled = disabled || isLoading;

  const handlePress = async () => {
    if (isDisabled) return;

    // Light haptic feedback on press
    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    onPress?.();
  };

  const containerStyle = [
    styles.base,
    styles[`${variant}Container`],
    styles[`${size}Container`],
    fullWidth && styles.fullWidth,
    isDisabled && styles.disabled,
    style,
  ];

  const textStyle = [
    styles.text,
    styles[`${variant}Text`],
    styles[`${size}Text`],
    isDisabled && styles.disabledText,
  ];

  return (
    <Pressable
      onPress={handlePress}
      disabled={isDisabled}
      style={({ pressed }) => [
        containerStyle,
        pressed && !isDisabled && styles.pressed,
      ]}
      testID={testID}
      accessibilityRole="button"
      accessibilityState={{ disabled: isDisabled }}
    >
      {isLoading ? (
        <ActivityIndicator
          size="small"
          color={variant === "primary" ? COLORS.SECONDARY : COLORS.PRIMARY}
        />
      ) : (
        <Text style={textStyle}>{children}</Text>
      )}
    </Pressable>
  );
}

// ═══════════════════════════════════════════════════════════════
// STYLES
// ═══════════════════════════════════════════════════════════════

const styles = StyleSheet.create({
  // Base styles
  base: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: RADIUS.md,
  },

  // Variant container styles
  primaryContainer: {
    backgroundColor: COLORS.PRIMARY,
  },
  secondaryContainer: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: COLORS.PRIMARY,
  },
  ghostContainer: {
    backgroundColor: "transparent",
  },
  destructiveContainer: {
    backgroundColor: COLORS.ERROR,
  },

  // Size container styles
  smContainer: {
    height: 36,
    paddingHorizontal: SPACING.md,
  },
  mdContainer: {
    height: 48,
    paddingHorizontal: SPACING.lg,
  },
  lgContainer: {
    height: 56,
    paddingHorizontal: SPACING.xl,
  },

  // Text base
  text: {
    ...TYPOGRAPHY.button,
  } as TextStyle,

  // Variant text styles
  primaryText: {
    color: COLORS.SECONDARY,
  },
  secondaryText: {
    color: COLORS.PRIMARY,
  },
  ghostText: {
    color: COLORS.PRIMARY,
  },
  destructiveText: {
    color: COLORS.TEXT_PRIMARY,
  },

  // Size text styles
  smText: {
    fontSize: 14,
  },
  mdText: {
    fontSize: 16,
  },
  lgText: {
    fontSize: 18,
  },

  // State styles
  fullWidth: {
    width: "100%",
  },
  disabled: {
    opacity: 0.5,
  },
  disabledText: {
    opacity: 0.7,
  },
  pressed: {
    transform: [{ scale: 0.97 }],
    opacity: 0.9,
  },
});

export default Button;
