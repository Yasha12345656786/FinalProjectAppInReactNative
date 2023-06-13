import { View, Text } from 'react-native'
import React from 'react'

export default function UserInfo() {
  return (
    <>
    <View>
      <Text> Hello Username...</Text>
    </View>
    <View>
      <Text>Username: someusername</Text>
    </View>
    <View>
      <Text>Email: someEmail</Text>
    </View>
    <View>
      <Text>Password: somePassword</Text>
    </View>
    <TouchableOpacity>
      <Text>
        Edit Info
      </Text>
    </TouchableOpacity>
    <TouchableOpacity>
      <Text>
        Log Out
      </Text>
    </TouchableOpacity>
    </>
  )
}