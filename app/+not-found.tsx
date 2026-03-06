import { View, Text } from "react-native";
import { Link, Stack } from "expo-router";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <View className="flex-1 items-center justify-center bg-background p-md">
        <Text className="text-2xl font-space-grotesk-bold text-text-primary mb-md">
          Página no encontrada
        </Text>
        <Text className="text-base text-text-secondary mb-lg text-center">
          La página que buscas no existe.
        </Text>
        <Link href="/" className="text-primary text-base font-inter-medium">
          Volver al inicio
        </Link>
      </View>
    </>
  );
}
