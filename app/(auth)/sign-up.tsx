import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '@/constants'

const SignIn = () => {
    return (
        <ImageBackground source={images.getStartedImg} resizeMode='cover' className='h-screen'>
            <SafeAreaView>
                <Text className='text-white'>SignIn</Text>
            </SafeAreaView>
        </ImageBackground>
    )
}

export default SignIn