import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function TabOneScreen() {
    return (
        <View className="flex-1 items-center justify-center bg-white">
            <Text className="font-bold text-xl">Graduation Project</Text>
            <Text className="text-xl">Arabic Sign Language</Text>
            <View className="mt-4 bg-black rounded-md shadow-md shadow-black">
                <Text className="text-white text-xl p-2">Hello World</Text>
            </View>
            {/* <StatusBar style="auto" /> */}
        </View>
    );
}
