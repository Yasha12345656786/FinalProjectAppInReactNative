import { View, Text } from 'react-native'
import React from 'react'

export default function TriviaGameMenu() {
  return (
    <SafeAreaView>
<View>
  <Text>Trivia Game</Text>
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