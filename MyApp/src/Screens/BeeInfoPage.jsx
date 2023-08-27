import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {base_api} from '../../utils/api';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function BeeInfoPage() {
  return (
    <SafeAreaView>
      <ScrollView>
          <View>
            <TouchableOpacity>
              <Text>

              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>
                
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>
                
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>
                
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>
                
              </Text>
            </TouchableOpacity>
          </View>
      </ScrollView>
    </SafeAreaView>
  )
}