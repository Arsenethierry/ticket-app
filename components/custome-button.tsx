import { GestureResponderEvent, Text, TouchableOpacity } from "react-native"

type CustomButtonProps = {
    title: string;
    textStyles: string;
    containerStyles?: string;
    isLoading?: boolean;
    handlePress: (event: GestureResponderEvent) => void;
}

const CustomButton = ({ title, textStyles, containerStyles, isLoading = false, handlePress }: CustomButtonProps) => {
    return (
        <TouchableOpacity
            onPress={handlePress}
            className={`bg-primary rounded-xl min-h-[58px] justify-center items-center ${containerStyles} ${isLoading ? "opacity-50" : ""}`}
        >
            <Text className={`text-primary font-psemibold text-lg ${textStyles}`}>{title}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton;