import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'

export default function MemoryGameMenu() {
  return (
    <SafeAreaView>
    <View>
      <Text>Memory Game</Text>
    </View>
    <View>
        <TouchableOpacity>
            <Text>New Game</Text>
        </TouchableOpacity>
    </View>
    <View>
        <TouchableOpacity>
            <Text>LeadersBoard</Text>
        </TouchableOpacity>
    </View>
    <View>
        <TouchableOpacity>
            <Text>Main Menu</Text>
        </TouchableOpacity>
    </View>

    </SafeAreaView>
  )
}