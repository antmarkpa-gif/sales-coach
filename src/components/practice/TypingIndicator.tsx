import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  withDelay,
  withSequence,
} from "react-native-reanimated";
import { COLORS, SPACING, RADIUS, TYPOGRAPHY } from "@/theme/brand";
import { AI_CONFIG } from "@/utils/constants";

// ═══════════════════════════════════════════════════════════════
// TYPES
// ═══════════════════════════════════════════════════════════════

interface TypingIndicatorProps {
  /** When the typing started (to calculate elapsed time) */
  startTime?: Date;
}

// ═══════════════════════════════════════════════════════════════
// ANIMATED DOT
// ═══════════════════════════════════════════════════════════════

function AnimatedDot({ delay }: { delay: number }) {
  const scale = useSharedValue(0.5);
  const opacity = useSharedValue(0.4);

  useEffect(() => {
    scale.value = withDelay(
      delay,
      withRepeat(
        withSequence(
          withTiming(1, { duration: 300 }),
          withTiming(0.5, { duration: 300 })
        ),
        -1
      )
    );
    opacity.value = withDelay(
      delay,
      withRepeat(
        withSequence(
          withTiming(1, { duration: 300 }),
          withTiming(0.4, { duration: 300 })
        ),
        -1
      )
    );
  }, [delay, scale, opacity]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
    opacity: opacity.value,
  }));

  return <Animated.View style={[styles.dot, animatedStyle]} />;
}

// ═══════════════════════════════════════════════════════════════
// COMPONENT
// ═══════════════════════════════════════════════════════════════

/**
 * TypingIndicator Component
 *
 * Shows an animated indicator while Rex (AI) is generating a response.
 * Changes text after 8 seconds to indicate longer processing.
 *
 * @example
 * {isTyping && <TypingIndicator startTime={typingStartTime} />}
 */
export function TypingIndicator({ startTime }: TypingIndicatorProps) {
  const [isThinkingHard, setIsThinkingHard] = useState(false);

  useEffect(() => {
    if (!startTime) return;

    const elapsed = Date.now() - startTime.getTime();
    const remainingTime = AI_CONFIG.thinkingIndicatorDelay - elapsed;

    if (remainingTime <= 0) {
      setIsThinkingHard(true);
      return;
    }

    const timer = setTimeout(() => {
      setIsThinkingHard(true);
    }, remainingTime);

    return () => clearTimeout(timer);
  }, [startTime]);

  return (
    <View style={styles.container}>
      <View style={styles.bubble}>
        <View style={styles.dotsContainer}>
          <AnimatedDot delay={0} />
          <AnimatedDot delay={150} />
          <AnimatedDot delay={300} />
        </View>
      </View>
      <Text style={styles.text}>
        {isThinkingHard
          ? "Rex is thinking hard on this one..."
          : "Rex is thinking..."}
      </Text>
    </View>
  );
}

// ═══════════════════════════════════════════════════════════════
// STYLES
// ═══════════════════════════════════════════════════════════════

const styles = StyleSheet.create({
  container: {
    alignSelf: "flex-start",
    alignItems: "flex-start",
    marginVertical: SPACING.xs,
  },
  bubble: {
    backgroundColor: COLORS.SURFACE_HIGH,
    borderRadius: RADIUS.lg,
    borderBottomLeftRadius: RADIUS.sm,
    paddingVertical: SPACING.md,
    paddingHorizontal: SPACING.lg,
  },
  dotsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: SPACING.xs,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.TEXT_SECONDARY,
  },
  text: {
    ...TYPOGRAPHY.caption,
    color: COLORS.TEXT_MUTED,
    marginTop: SPACING.xs,
  },
});

export default TypingIndicator;
