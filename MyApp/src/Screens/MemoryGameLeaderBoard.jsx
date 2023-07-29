import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const MemoryGameLeaderboard = ({ data }) => {
  // Sample data format for the leaderboard (you can replace this with your actual data)
  // data = [
  //   { username: 'User1', score: 100 },
  //   { username: 'User2', score: 90 },
  //   { username: 'User3', score: 80 },
  //   ...
  // ];

  const renderLeaderboardItem = ({ item, index }) => (
    <View style={styles.leaderboardItem}>
      <Text style={styles.rank}>{index + 1}</Text>
      <Text style={styles.username}>{item.username}</Text>
      <Text style={styles.score}>{item.score}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Leaderboard</Text>
      <FlatList
        data={data}
        renderItem={renderLeaderboardItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.leaderboardList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0', // Set the background color
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  leaderboardList: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  leaderboardItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#fff', // Set the item background color
    borderRadius: 5,
    elevation: 2, // Add some shadow for a raised effect
  },
  rank: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  username: {
    flex: 1,
    fontSize: 18,
    marginLeft: 10,
  },
  score: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default MemoryGameLeaderboard;