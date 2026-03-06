import { View, Text } from "react-native";
import { Link } from "expo-router";

export default function WelcomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-background p-md">
      <Text className="text-3xl font-space-grotesk-bold text-text-primary mb-sm">
        Sales Coach
      </Text>
      <Text className="text-base text-text-secondary mb-xl text-center">
        Practica. Mejora. Cierra más.
      </Text>
      {/* TODO: Implement welcome screen UI */}
      <Link href="/login" className="text-primary text-base">
        Iniciar sesión
      </Link>
    </View>
  );
}
