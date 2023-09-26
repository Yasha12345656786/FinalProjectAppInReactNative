import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native-gesture-handler";
import HTML from "react-native-render-html";

export default function BeeInfoPage() {
  const [contents, setContents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState()
  const url =
    "https://en.wikipedia.org/w/api.php?action=query&origin=*&prop=extracts&format=json&titles=Bee";
    const extractAPIContents = (json) => {
      const { pages } = json.query;
      return Object.keys(pages).map((id) => pages[id].extract);
    };
  console.log(contents);
    const getContents = async () => {
      let resp;
      let contents = [];
      setLoading(true);
      try {
        resp = await fetch(url);
        const json = await resp.json();
        contents = extractAPIContents(json);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
      setContents(contents);
    };
    useEffect(()=>{
      getContents()
    },[])
  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>An Error Has Occurred :(</Text>;
  return (
    <View>
    <Text>Bee Info Page</Text>
    <Text>Here You Can Learn More About Bees...</Text>
    <ScrollView>
      {contents.map((content, index) => (
       <HTML key={index} source={{html:content}} />
      ))}
    </ScrollView>
  </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
