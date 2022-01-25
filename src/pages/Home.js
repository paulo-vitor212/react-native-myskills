import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Platform,
    TouchableOpacity
} from 'react-native';

export function Home() {
    const [newSkill, setNewSkill] = useState('');
    const [mySkills, setMySkills] = useState([]);

    const handleNewAddSkill = () => {
        setMySkills(oldState => [...oldState, newSkill]);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome, Paulo</Text>
            <TextInput
                style={styles.input}
                placeholder='New skill'
                placeholderTextColor='#999'
                onChangeText={setNewSkill}
            />

            <TouchableOpacity style={styles.button} activeOpacity={.7} onPress={handleNewAddSkill}>
                <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>

            <Text style={[styles.title, { marginVertical: 50 }]}>
                My skills
            </Text>

            {
                mySkills.map(skill => (
                    <TouchableOpacity style={styles.buttonSkill} key={skill + Math.random()}>
                        <Text style={styles.textSkill}>
                            {skill}
                        </Text>
                    </TouchableOpacity>
                ))
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121015',
        paddingVertical: 70,
        paddingHorizontal: 30,
    },
    title: {
        color: '#FFF',
        fontSize: 24,
        fontWeight: 'bold'
    },
    input: {
        backgroundColor: '#1F1e24',
        color: '#FFF',
        fontSize: 18,
        padding: Platform.OS === 'ios' ? 15 : 10,
        marginTop: 30,
        borderRadius: 7
    },
    button: {
        backgroundColor: '#A370F7',
        padding: 15,
        borderRadius: 7,
        alignItems: 'center',
        marginTop: 30,
    },
    buttonText: {
        fontWeight: 'bold',
        color: '#FFF',
        fontSize: 18,
    },
    buttonSkill: {
        backgroundColor: '#1F1E25',
        padding: 15,
        borderRadius: 50,
        alignItems: 'center',
        marginVertical: 10
    },
    textSkill: {
        color: '#FFF',
        fontSize: 22,
        fontWeight: 'bold'
    }
})