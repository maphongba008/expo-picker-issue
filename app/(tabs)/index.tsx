import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  const [uri, setUri] = useState<string>('');
  return (
    <View style={{flex: 1, paddingTop: 100, paddingHorizontal: 20}}>
      <TouchableOpacity  onPress={async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ['images'],
          allowsEditing: true,
          aspect: [1, 1],
          allowsMultipleSelection: false,
        })
        setUri(result.assets?.[0]?.uri ?? '');
      }}>
        <Text>Pick</Text>
      </TouchableOpacity>
      {!!uri && <Image style={{width: 100, height: 100}} source={{uri}} />}
    </View>
  );
}

