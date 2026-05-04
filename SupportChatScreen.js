import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  TextInput,
  ScrollView,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors, supportChatStyles as styles } from './styles';

const SupportChatScreen = ({ navigation }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: 'هلا أنا في مشكلة بالفاتورة وأحتاج مساعدتكم.',
      sender: 'support',
    },
    {
      id: 2,
      text: 'هل يمكنك إعطائي بتفاصيل أكثر عن المشكلة',
      sender: 'user',
    },
  ]);

  const handleSend = () => {
    const trimmedMessage = message.trim();

    if (!trimmedMessage) {
      return;
    }

    const newMessage = {
      id: Date.now(),
      text: trimmedMessage,
      sender: 'support',
    };

    const autoReply = {
      id: Date.now() + 1,
      text: 'شكرًا لك، تم استلام رسالتك وسيتم الرد عليك قريبًا.',
      sender: 'user',
    };

    setMessages((prev) => [...prev, newMessage, autoReply]);
    setMessage('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.lightBg} />

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <MaterialIcons name="arrow-back" size={30} color={colors.purple} />
      </TouchableOpacity>

      <Text style={styles.title}>راسل فريق الدعم</Text>

      <ScrollView
        style={styles.messagesContainer}
        contentContainerStyle={styles.messagesContent}
        showsVerticalScrollIndicator={false}
      >
        {messages.map((item) => (
          <View
            key={item.id}
            style={
              item.sender === 'support'
                ? styles.supportBubble
                : styles.userBubble
            }
          >
            <Text
              style={
                item.sender === 'support'
                  ? styles.supportText
                  : styles.userText
              }
            >
              {item.text}
            </Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.inputBar}>
        <TouchableOpacity style={styles.iconButton} onPress={handleSend}>
          <MaterialCommunityIcons
            name="send-outline"
            size={22}
            color="#E0D9D9"
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton}>
          <MaterialCommunityIcons
            name="share-variant-outline"
            size={20}
            color="#E0D9D9"
          />
        </TouchableOpacity>

        <TextInput
          style={styles.input}
          placeholder="اكتب رسالتك"
          placeholderTextColor="#9E95AE"
          value={message}
          onChangeText={setMessage}
          textAlign="right"
        />
      </View>
    </SafeAreaView>
  );
};

export default SupportChatScreen;