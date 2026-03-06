import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LearnListScreen() {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="flex-1 p-md">
        <Text className="text-2xl font-space-grotesk-bold text-text-primary mb-sm">
          Aprender
        </Text>
        <Text className="text-base text-text-secondary mb-lg">
          Domina las técnicas de cierre
        </Text>
        {/* TODO: Implement lesson list */}
      </View>
    </SafeAreaView>
  );
}
