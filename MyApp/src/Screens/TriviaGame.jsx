import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function TriviaGame(lvl, q, Answers, points, userScore) {
  return (
    <SafeAreaView>
      <Text>TriviaGame</Text>
      


      <View>
        <Text>{lvl}</Text>
        <Text>{userScore}</Text>
      </View>\


      <View>
        <Text>{q}</Text>
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