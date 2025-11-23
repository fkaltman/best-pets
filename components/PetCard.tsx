import { View, Text, Pressable, StyleSheet, Image } from 'react-native';

interface Pet {
  id: string;
  name: string;
  type: string;
  description: string;
  image: string;
}

interface PetCardProps {
  pet: Pet;
  onPress: () => void;
}

export default function PetCard({ pet, onPress }: PetCardProps) {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.card}>
        <Image
          source={{ uri: pet.image }}
          style={styles.image}
        />
        <View style={styles.content}>
          <Text style={styles.name}>{pet.name}</Text>
          <Text style={styles.type}>{pet.type}</Text>
          <Text style={styles.description}>{pet.description}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    marginBottom: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  content: {
    padding: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  type: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  description: {
    fontSize: 13,
    color: '#888',
  },
});
