import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ElevatedCard = ({ phone, email, city, state }) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardContent}>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Phone:</Text>
          <Text style={styles.text}>{phone}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.text}>{email}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>City:</Text>
          <Text style={styles.text}>{city}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>State:</Text>
          <Text style={styles.text}>{state}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 3,
    marginVertical: 10,
    padding: 15,
  },
  cardContent: {
    gap: 10,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  text: {
    fontSize: 16,
    color: 'black',
  },
});

export default ElevatedCard;
