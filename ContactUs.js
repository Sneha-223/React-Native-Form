import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import email from 'react-native-email';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (text) => {
    setName(text);
  };

  const handleMobileChange = (text) => {
    setMobile(text);
  };

  const handleEmailChange = (text) => {
    setEmailAddress(text);
  };

  const handleMessageChange = (text) => {
    setMessage(text);
  };

  const handleSubmit = () => {
    // Validate the form fields
    if (!name.trim() || !mobile.trim() || !emailAddress.trim() || !message.trim()) {
      Alert.alert('All fields are required');
      return;
    }

    if (!/^[a-zA-Z ]+$/.test(name.trim())) {
      Alert.alert('Invalid name');
      return;
    }

    if (!/^\d{10}$/.test(mobile.trim())) {
      Alert.alert('Invalid mobile number');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress.trim())) {
      Alert.alert('Invalid email address');
      return;
    }

    // Send the email
    const emailBody = `
      Name: ${name.trim()}
      Mobile: ${mobile.trim()}
      Email: ${emailAddress.trim()}
      Message: ${message.trim()}
    `;

    email(['heckilpuff@gmail.com'], {
      subject: 'Contact Us Form Submission',
      body: emailBody
    }).catch(() => {
      Alert.alert('Failed to send email. Please try again later.');
    });
  };

  return (
    <View>
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Contact Us</Text>
      <TextInput
        placeholder="Name"
        onChangeText={handleNameChange}
        value={name}
        style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10 }}
      />
      <TextInput
        placeholder="Mobile Number"
        onChangeText={handleMobileChange}
        value={mobile}
        style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10 }}
      />
      <TextInput
        placeholder="Email"
        onChangeText={handleEmailChange}
        value={emailAddress}
        style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10 }}
      />
      <TextInput
        placeholder="Message"
        onChangeText={handleMessageChange}
        value={message}
        multiline={true}
        numberOfLines={4}
        style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10 }}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default ContactForm;
