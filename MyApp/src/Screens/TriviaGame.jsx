import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function TriviaGame() {
  return (
    <SafeAreaView>
      <Text>TriviaGame</Text>
      


      <View>
        <Text>Level</Text>
        <Text>Time</Text>
        <Text>Score</Text>
        <Text>Question</Text>
      </View>

      <View>
        <TouchableOpacity>
            <Text>
                Answer 1
            </Text>
        </TouchableOpacity>

        <TouchableOpacity>
            <Text>
                Answer 2
            </Text>
        </TouchableOpacity>

        <TouchableOpacity>
            <Text>
                Answer 3
            </Text>
        </TouchableOpacity>

        <TouchableOpacity>
            <Text>
                Answer 4
            </Text>
        </TouchableOpacity>

      </View>


    </SafeAreaView>
  )
}