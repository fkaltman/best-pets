import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";
import { PetList } from "../components";

interface Pet {
  id: string;
  name: string;
  type: string;
  description: string;
}

const SAMPLE_PETS: Pet[] = [
  {
    id: "1",
    name: "Max",
    type: "Golden Retriever",
    description: "Friendly and energetic, loves fetch and swimming",
  },
  {
    id: "2",
    name: "Luna",
    type: "Cat",
    description: "Calm and affectionate, perfect for apartment living",
  },
  {
    id: "3",
    name: "Charlie",
    type: "Beagle",
    description: "Curious and playful, great for active families",
  },
  {
    id: "4",
    name: "Bella",
    type: "Rabbit",
    description: "Gentle and quiet, ideal for peaceful homes",
  },
  {
    id: "5",
    name: "Rocky",
    type: "German Shepherd",
    description: "Loyal and intelligent, excellent guard dog",
  },
];

export default function Index() {
  const [selectedPet, setSelectedPet] = useState<Pet | null>(null);

  const handlePetPress = (pet: Pet) => {
    setSelectedPet(pet);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Find Your Perfect Pet</Text>
        <Text style={styles.subtitle}>
          Discover the pet that matches your lifestyle
        </Text>
      </View>

      {selectedPet ? (
        <View style={styles.selectedContainer}>
          <Text style={styles.selectedTitle}>You selected:</Text>
          <Text style={styles.selectedName}>{selectedPet.name}</Text>
          <Text style={styles.selectedType}>{selectedPet.type}</Text>
          <Text style={styles.selectedDescription}>
            {selectedPet.description}
          </Text>
          <Text
            style={styles.deselectLink}
            onPress={() => setSelectedPet(null)}
          >
            Choose another pet
          </Text>
        </View>
      ) : (
        <PetList pets={SAMPLE_PETS} onPetPress={handlePetPress} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
  },
  selectedContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  selectedTitle: {
    fontSize: 14,
    color: "#666",
    marginBottom: 8,
  },
  selectedName: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 4,
  },
  selectedType: {
    fontSize: 18,
    color: "#999",
    marginBottom: 16,
  },
  selectedDescription: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    marginBottom: 24,
  },
  deselectLink: {
    fontSize: 16,
    color: "#007AFF",
    fontWeight: "600",
  },
});