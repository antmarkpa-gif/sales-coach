import React, { useEffect } from "react";
import { View, ViewStyle, StyleSheet } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  interpolate,
  Easing,
} from "react-native-reanimated";
import { COLORS, RADIUS } from "@/theme/brand";

// ═══════════════════════════════════════════════════════════════
// TYPES
// ═══════════════════════════════════════════════════════════════

interface SkeletonProps {
  /** Width of the skeleton */
  width: number | `${number}%`;
  /** Height of the skeleton */
  height: number;
  /** Border radius */
  borderRadius?: number;
  /** Additional styles */
  style?: ViewStyle;
}

// ═══════════════════════════════════════════════════════════════
// COMPONENT
// ═══════════════════════════════════════════════════════════════

/**
 * Skeleton Component
 *
 * Animated placeholder for loading states with shimmer effect.
 * Uses react-native-reanimated for smooth 60fps animations.
 *
 * @example
 * <Skeleton width={200} height={20} />
 * <Skeleton width="100%" height={48} borderRadius={8} />
 */
export function Skeleton({
  width,
  height,
  borderRadius = RADIUS.md,
  style,
}: SkeletonProps) {
  const shimmerProgress = useSharedValue(0);

  useEffect(() => {
    shimmerProgress.value = withRepeat(
      withTiming(1, {
        duration: 1500,
        easing: Easing.inOut(Easing.ease),
      }),
      -1, // Infinite repeat
      true // Reverse on each iteration
    );
  }, [shimmerProgress]);

  const animatedStyle = useAnimatedStyle(() => {
    const opacity = interpolate(shimmerProgress.value, [0, 1], [0.3, 0.7]);

    return {
      opacity,
    };
  });

  return (
    <Animated.View
      style={[
        styles.skeleton,
        {
          width,
          height,
          borderRadius,
        },
        animatedStyle,
        style,
      ]}
    />
  );
}

// ═══════════════════════════════════════════════════════════════
// PRESET COMPONENTS
// ═══════════════════════════════════════════════════════════════

/**
 * Skeleton for text lines
 */
export function SkeletonText({
  width = "100%",
  lines = 1,
  style,
}: {
  width?: number | `${number}%`;
  lines?: number;
  style?: ViewStyle;
}) {
  return (
    <View style={[styles.textContainer, style]}>
      {Array.from({ length: lines }).map((_, index) => (
        <Skeleton
          key={index}
          width={index === lines - 1 && lines > 1 ? "60%" : width}
          height={16}
          borderRadius={RADIUS.sm}
          style={index > 0 ? styles.textLine : undefined}
        />
      ))}
    </View>
  );
}

/**
 * Skeleton for avatars/circular elements
 */
export function SkeletonAvatar({
  size = 48,
  style,
}: {
  size?: number;
  style?: ViewStyle;
}) {
  return (
    <Skeleton
      width={size}
      height={size}
      borderRadius={RADIUS.full}
      style={style}
    />
  );
}

/**
 * Skeleton for cards
 */
export function SkeletonCard({
  width = "100%",
  height = 120,
  style,
}: {
  width?: number | `${number}%`;
  height?: number;
  style?: ViewStyle;
}) {
  return (
    <Skeleton
      width={width}
      height={height}
      borderRadius={RADIUS.lg}
      style={style}
    />
  );
}

// ═══════════════════════════════════════════════════════════════
// STYLES
// ═══════════════════════════════════════════════════════════════

const styles = StyleSheet.create({
  skeleton: {
    backgroundColor: COLORS.SURFACE_HIGH,
  },
  textContainer: {
    gap: 8,
  },
  textLine: {
    marginTop: 8,
  },
});

export default Skeleton;
