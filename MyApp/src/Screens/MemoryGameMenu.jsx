import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { useNavigation } from "@react-navigation/native";
export default function MemoryGameMenu() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Memory Game</Text>
      </View>
      <View style={styles.menuItem}>
        <TouchableOpacity 
        style={styles.menuButton}
        onPress={()=>navigation.navigate('MemoryGame')}
        >
          <Text style={styles.buttonText}>New Game</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.menuItem}>
        <TouchableOpacity 
        style={styles.menuButton}
        onPress={()=>navigation.navigate('MemoryGameLeaderBoard')}
        >
          <Text style={styles.buttonText}>Leaderboard</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', 
  },
  titleContainer: {
    marginBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  menuItem: {
    marginVertical: 10,
  },
  menuButton: {
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#007bff', 
    borderRadius: 5,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
