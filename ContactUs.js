import React, { useState } from 'react';
import { Image, StyleSheet, View, Text, TextInput, Button, Alert } from 'react-native';
import email from 'react-native-email';
import { Colors } from 'react-native/Libraries/NewAppScreen';

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
            <View style={style.column}>
                <View style={style.container}>
                    <View style={style.row}>
                        <Image
                            style={style.smallLogo}
                            source={require('./logo.jpeg')}
                        />
                        <Text style={{ color: '#C41E3A', fontSize: 38, fontWeight: 'bold', marginTop: 10 }}>Redpositive</Text>
                    </View>
                </View>

                <View >
                    <Text style={{ color: Colors.black, fontSize: 38, fontWeight: 'bold', marginTop: 70, marginBottom: 2, textAlign: 'center' }}>Contact Us</Text>
                    <Text style={{ color: '#C0C0C0', fontSize: 15, fontWeight: 'bold', marginBottom: 40, textAlign: 'center' }}>Enter your details and submit to send us an email!</Text>

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
                    <Button color="#ff5c5c" title="Submit" onPress={handleSubmit} />
                </View>

            </View>
        </View>
    );
};

const style = StyleSheet.create({
    smallLogo: {
        width: 70,
        height: 70,
    },
    column: {
        flexDirection: 'column',
        alignItems: 'center',
        width: '80%',
        // borderWidth: 1,
        // borderColor: 'blue',
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: -70,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    label: {
        marginVertical: 5,
        fontSize: 14,
        color: '#C0C0C0',
    },
    inputContainer: {
        height: 55,
        backgroundColor: '#E5E4E2',
        flexDirection: 'row',
        paddingHorizontal: 15,
        borderWidth: 0.5,
    },
});


export default ContactForm;
