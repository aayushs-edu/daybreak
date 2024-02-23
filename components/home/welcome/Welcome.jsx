import { useState } from 'react';
import { 
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList  
} from 'react-native';
import GradientText from './GradientText';
import { useRouter } from 'expo-router';

import styles from './welcome.style';
import { icons, SIZES } from '../../../constants';


const Welcome = () => {
  const router = useRouter();

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.welcomeMessage}>Welcome,</Text>
        <GradientText text="Aayush" style={styles.userName}></GradientText> 
      </View>
    </View>
  );
};

export default Welcome;