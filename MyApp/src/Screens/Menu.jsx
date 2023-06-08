import { View, Text, SafeAreaView,TouchableOpacity,StyleSheet,ScrollView} from 'react-native'
import React from 'react'


export default function Menu() {
  return (
    <SafeAreaView>
      <ScrollView>
      <View>
        <TouchableOpacity style={styles.button}>
            <Text>Memory Game</Text>                                    
        </TouchableOpacity>
        </View>
        <View>
        <TouchableOpacity style={styles.button}>
            <Text>Trivia Game</Text>                                  
        </TouchableOpacity>
        </View>
        <View>
        <TouchableOpacity style={styles.button}>
            <Text>Bee's Info Page</Text>
        </TouchableOpacity>
        </View>
        <View>
        <TouchableOpacity style={styles.button}>
            <Text>My Info</Text>
        </TouchableOpacity>
        </View>
        <View>
        <TouchableOpacity style={styles.logout}>
            <Text>LogOut</Text>
        </TouchableOpacity>
        </View>
        </ScrollView>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  logout:{
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    margin:100,
  }
})