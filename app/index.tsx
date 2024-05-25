import { View, Text, Image, ImageBackground } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '@/constants'
import { StatusBar } from 'expo-status-bar'
import CustomButton from '@/components/custome-button'
import { router } from 'expo-router'

const HomeScreen = () => {
  return (
    <ImageBackground
      source={images.getStartedImg}
      resizeMode='cover'
      className='h-screen flex-1 justify-end py-5 px-2'>
      <SafeAreaView className='space-y-4 mb-10'>
        <Text className='text-[#F4A951] text-3xl font-pbold'>Grab {'\n'} Your Ticket</Text>
        <Text className='text-[#96B4B8] font-pregular text-sm'>Discover the latest and most popular concerts, and easily purchase tickets in just a few taps. Join us and experience the convenience of buying concert tickets online!</Text>
        <View>
          <CustomButton
            handlePress={() => router.push("/sign-in")}
            title='Get Started'
            textStyles='text-[#04181D]'
          />
        </View>
        <StatusBar style="light" />
      </SafeAreaView>
    </ImageBackground>
  )
}

export default HomeScreen