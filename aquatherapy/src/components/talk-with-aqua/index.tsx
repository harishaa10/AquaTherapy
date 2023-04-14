import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles';
import { getAnswer } from '../../services/api';

const TalkWithAqua = () => {
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState<Array<string>>([]);
  const scrollViewRef = useRef<ScrollView>(null);

  const handleSend = async () => {

    // Trim the input value
    const trimmedInputValue = inputValue.trim();

    if (trimmedInputValue === '') {
      return;
    }
  
    // Clear the input field
    setInputValue('');
  
    // Call the chatbot API to get the response
    const aquaMessage = await getAnswer(trimmedInputValue);
  
    // Add the chatbot's response to the messages array
    setMessages([...messages, trimmedInputValue, aquaMessage]);
  };
  

  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
  }, [messages]);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.chatBox} ref={scrollViewRef}>
        {messages.map((message, index) => {
          const isAqua = index % 2 === 0;

          console.log('isAqua', isAqua);
          console.log(message);

          return (
            <View
              key={index}
              style={isAqua ? styles.aquaMessageContainer : styles.messageContainer}
            >
              <Text style={isAqua ? styles.aquaMessageText : styles.messageText}>{message}</Text>
            </View>
          );
        })}
      </ScrollView>

      <View style={styles.chatInputContainer}>
        <TextInput
          style={styles.chatInput}
          placeholder="Type your message here..."
          placeholderTextColor="#A9A9A9"
          value={inputValue}
          onChangeText={setInputValue}
          onSubmitEditing={handleSend}
        />

        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TalkWithAqua;
