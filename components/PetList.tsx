import { FlatList, StyleSheet } from "react-native";
import { Pet } from "../types/types";
import PetCard from "./PetCard";

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
