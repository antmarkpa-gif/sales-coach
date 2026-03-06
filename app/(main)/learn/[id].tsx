import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LessonDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="flex-1 p-md">
        <Text className="text-xl font-space-grotesk-bold text-text-primary mb-md">
          Lección
        </Text>
        <Text className="text-text-secondary">Lesson ID: {id}</Text>
        {/* TODO: Implement lesson content */}
      </View>
    </SafeAreaView>
  );
}
