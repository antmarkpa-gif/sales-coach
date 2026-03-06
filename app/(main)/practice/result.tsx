import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function PracticeResultScreen() {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="flex-1 p-md items-center justify-center">
        <Text className="text-2xl font-space-grotesk-bold text-text-primary mb-md">
          Resultados
        </Text>
        {/* TODO: Implement feedback display */}
        <Text className="text-text-secondary">Feedback placeholder</Text>
      </View>
    </SafeAreaView>
  );
}
