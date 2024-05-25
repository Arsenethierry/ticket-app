import { ImageBackground, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '@/constants'

const SignIn = () => {
    return (
        <ImageBackground
            source={images.signInBg}
            resizeMode='cover'
            className='h-screen flex-1 justify-end'>
            <SafeAreaView>
            <Text className='text-primary text-2xl'>SignIn</Text>
                <Text className='text-primary text-2xl'>SignIn</Text>
            </SafeAreaView>
        </ImageBackground>
    )
}

export default SignIn