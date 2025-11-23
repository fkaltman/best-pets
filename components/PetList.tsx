import { FlatList, View, StyleSheet } from 'react-native';
import PetCard from './PetCard';

interface Pet {
  id: string;
  name: string;
  type: string;
  description: string;
  image: string;
}

interface PetListProps {
  pets: Pet[];
  onPetPress: (pet: Pet) => void;
}

export default function PetList({ pets, onPetPress }: PetListProps) {
  return (
    <FlatList
      data={pets}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <PetCard pet={item} onPress={() => onPetPress(item)} />
      )}
      contentContainerStyle={styles.container}
      scrollEnabled={true}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});
