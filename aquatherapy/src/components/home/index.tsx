import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

const HomeScreen = ({ navigation }: { navigation: any }) => {
  const handleChatNowPress = () => {
    navigation.navigate('TalkWithAqua');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/images/illustration.png')} style={styles.image} />
      <TouchableOpacity style={styles.button} onPress={handleChatNowPress}>
        <Text style={styles.buttonText}>Chat with Aqua</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
