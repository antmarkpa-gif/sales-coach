import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Animated, {
  useAnimatedStyle,
  withRepeat,
  withTiming,
  useSharedValue,
  withSequence,
} from "react-native-reanimated";
import { COLORS, SPACING, RADIUS, TYPOGRAPHY } from "@/theme/brand";
import type { AIMessageRole } from "@/types/app.types";

// ═══════════════════════════════════════════════════════════════
// TYPES
// ═══════════════════════════════════════════════════════════════

interface ChatBubbleProps {
  /** Message content */
  content: string;
  /** Message sender: user or AI (Rex) */
  role: AIMessageRole;
  /** Timestamp of the message */
  timestamp: Date;
  /** Whether this is a streaming message (shows cursor) */
  isStreaming?: boolean;
}

// ═══════════════════════════════════════════════════════════════
// COMPONENT
// ═══════════════════════════════════════════════════════════════

/**
 * ChatBubble Component
 *
 * Displays a message in the practice chat interface.
 * User messages appear on the right with primary color.
 * AI (Rex) messages appear on the left with surface color.
 *
 * @example
 * <ChatBubble
 *   content="Está muy caro para lo que ofrece."
 *   role="assistant"
 *   timestamp={new Date()}
 * />
 */
export function ChatBubble({
  content,
  role,
  timestamp,
  isStreaming = false,
}: ChatBubbleProps) {
  const isUser = role === "user";

  // Blinking cursor animation for streaming
  const cursorOpacity = useSharedValue(1);

  React.useEffect(() => {
    if (isStreaming) {
      cursorOpacity.value = withRepeat(
        withSequence(
          withTiming(0, { duration: 500 }),
          withTiming(1, { duration: 500 })
        ),
        -1
      );
    }
  }, [isStreaming, cursorOpacity]);

  const cursorStyle = useAnimatedStyle(() => ({
    opacity: cursorOpacity.value,
  }));

  const formattedTime = timestamp.toLocaleTimeString("es-MX", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <View
      style={[styles.container, isUser ? styles.userContainer : styles.aiContainer]}
    >
      <View
        style={[styles.bubble, isUser ? styles.userBubble : styles.aiBubble]}
      >
        <Text style={[styles.content, isUser ? styles.userContent : styles.aiContent]}>
          {content}
          {isStreaming && (
            <Animated.Text style={[styles.cursor, cursorStyle]}>▊</Animated.Text>
          )}
        </Text>
      </View>
      <Text
        style={[
          styles.timestamp,
          isUser ? styles.userTimestamp : styles.aiTimestamp,
        ]}
      >
        {formattedTime}
      </Text>
    </View>
  );
}

// ═══════════════════════════════════════════════════════════════
// STYLES
// ═══════════════════════════════════════════════════════════════

const styles = StyleSheet.create({
  container: {
    marginVertical: SPACING.xs,
    maxWidth: "80%",
  },
  userContainer: {
    alignSelf: "flex-end",
    alignItems: "flex-end",
  },
  aiContainer: {
    alignSelf: "flex-start",
    alignItems: "flex-start",
  },
  bubble: {
    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.md,
    borderRadius: RADIUS.lg,
  },
  userBubble: {
    backgroundColor: COLORS.PRIMARY,
    borderBottomRightRadius: RADIUS.sm,
  },
  aiBubble: {
    backgroundColor: COLORS.SURFACE_HIGH,
    borderBottomLeftRadius: RADIUS.sm,
  },
  content: {
    ...TYPOGRAPHY.body,
  },
  userContent: {
    color: COLORS.SECONDARY,
  },
  aiContent: {
    color: COLORS.TEXT_PRIMARY,
  },
  timestamp: {
    ...TYPOGRAPHY.caption,
    marginTop: SPACING.xs,
  },
  userTimestamp: {
    color: COLORS.TEXT_MUTED,
  },
  aiTimestamp: {
    color: COLORS.TEXT_MUTED,
  },
  cursor: {
    color: COLORS.TEXT_PRIMARY,
    marginLeft: 2,
  },
});

export default ChatBubble;
