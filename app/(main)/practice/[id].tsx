import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function PracticeSessionScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="flex-1 p-md">
        <Text className="text-xl font-space-grotesk-bold text-text-primary mb-md">
          Sesión de Práctica
        </Text>
        <Text className="text-text-secondary">Scenario ID: {id}</Text>
        {/* TODO: Implement chat UI */}
      </View>
    </SafeAreaView>
  );
}
