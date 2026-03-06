import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="flex-1 p-md">
        <Text className="text-2xl font-space-grotesk-bold text-text-primary mb-sm">
          Bienvenido
        </Text>
        <Text className="text-base text-text-secondary">
          Tu dashboard de Sales Coach
        </Text>
        {/* TODO: Implement dashboard UI */}
      </View>
    </SafeAreaView>
  );
}
