import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProgressScreen() {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="flex-1 p-md">
        <Text className="text-2xl font-space-grotesk-bold text-text-primary mb-sm">
          Tu Progreso
        </Text>
        <Text className="text-base text-text-secondary mb-lg">
          Estadísticas e historial
        </Text>
        {/* TODO: Implement progress stats and history */}
      </View>
    </SafeAreaView>
  );
}
