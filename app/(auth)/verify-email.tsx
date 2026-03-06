import { View, Text } from "react-native";

export default function VerifyEmailScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-background p-md">
      <Text className="text-2xl font-space-grotesk-bold text-text-primary mb-md">
        Verificar Email
      </Text>
      {/* TODO: Implement email verification UI */}
      <Text className="text-text-secondary text-center">
        Revisa tu correo para verificar tu cuenta.
      </Text>
    </View>
  );
}
