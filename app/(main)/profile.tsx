import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileScreen() {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="flex-1 p-md">
        <Text className="text-2xl font-space-grotesk-bold text-text-primary mb-sm">
          Perfil
        </Text>
        <Text className="text-base text-text-secondary mb-lg">
          Configuración y suscripción
        </Text>
        {/* TODO: Implement profile settings */}
      </View>
    </SafeAreaView>
  );
}
