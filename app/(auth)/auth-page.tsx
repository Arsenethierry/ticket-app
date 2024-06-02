import { ImageBackground, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Text, TouchableOpacity, Alert, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '@/constants';

import FormField from '@/components/form-field';
import CustomButton from '@/components/custome-button';

const AuthPage = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSignup, setIsSignup] = useState<boolean>(false);

    const [form, setForm] = useState({
        email: "",
        password: "",
        confirmPwd: "",
    });
    const handleSubmit = async () => {
        if (!form.email || !form.password) {
            Alert.alert('Error', 'Please fill all the fields')
        }

        setIsSubmitting(true);

    }
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <ImageBackground
                source={images.signInBg}
                resizeMode='cover'
                className='h-screen flex-1 justify-end px-5 pb-10'>
                <KeyboardAvoidingView behavior='padding'>
                    <SafeAreaView>
                        <View className='flex flex-row justify-evenly'>
                            <CustomButton
                                handlePress={() => setIsSignup(false)}
                                title='Sign In'
                                textStyles={`${!isSignup ? 'text-primary' : 'text-[#3B3E59]'} font-pbold`}
                                containerStyles='bg-transparent'
                            />
                            <CustomButton
                                handlePress={() => setIsSignup(true)}
                                title='Sign Up'
                                textStyles={`${isSignup ? 'text-primary' : 'text-[#3B3E59]'} font-pbold`}
                                containerStyles='bg-transparent'
                            />
                        </View>
                        <FormField
                            placeholder="Enter Email"
                            otherStyles='mt-4'
                            value={form.email}
                            handleChangeText={(e) => setForm({ ...form, email: e })}
                        />
                        <FormField
                            placeholder="Password"
                            otherStyles='mt-4'
                            handleChangeText={(e) => setForm({ ...form, password: e })}
                            type="password"
                            value={form.password}
                        />
                        {isSignup ? (
                            <FormField
                                placeholder="Comfirm Password"
                                otherStyles='mt-4'
                                handleChangeText={(e) => setForm({ ...form, confirmPwd: e })}
                                type="password"
                                value={form.password}
                            />
                        ) : null}
                        <TouchableOpacity>
                            <Text className='text-[#3B3E59] ml-auto my-1'>Recover Password ?</Text>
                        </TouchableOpacity>
                    </SafeAreaView>

                    <CustomButton
                        handlePress={handleSubmit}
                        title={`${isSignup ? 'Sign Up' : 'Sign In'}`}
                        textStyles='text-[#04181D] font-pbold'
                        isLoading={isSubmitting}
                    />
                </KeyboardAvoidingView>
            </ImageBackground>
        </TouchableWithoutFeedback>
    )
}

export default AuthPage