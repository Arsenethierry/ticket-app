
import { View, Text, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import icons from '@/constants/icons';

type FormFieldProps = {
    otherStyles: string;
    placeholder: string;
    type?: "text" | "password";
    props?: any;
    value: string;
    handleChangeText: (e: string) => void;
}

const FormField = ({ otherStyles, placeholder, type = "text", value, handleChangeText, ...props }: FormFieldProps) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    return (
        <View className={`space-y-2 ${otherStyles}`}>
            <View
                className="w-full h-14 px-4 bg-transparent rounded-2xl border-2 border-primary focus:border-teal-500 flex flex-row items-center"
            >
                <TextInput
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor={"#3B3E59"}
                    onChangeText={handleChangeText}
                    secureTextEntry={type === "password" && !showPassword}
                    className="flex-1 text-white font-psemibold text-base"
                    {...props}
                />

                {type === "password" && (
                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                        <Image
                            source={!showPassword ? icons.eye : icons.eyeHide}
                            className="w-6 h-6"
                            resizeMode='contain'
                        />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    )
}

export default FormField