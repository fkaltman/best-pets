import { View, Text, StyleSheet, Pressable, ScrollView, useWindowDimensions } from "react-native";
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
    type: "Dog",
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
    type: "Dog",
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
    type: "Dog",
    description: "Loyal and intelligent, excellent guard dog",
  },
  {
    id: "6",
    name: "Spike",
    type: "Reptile",
    description: "Bearded dragon, calm and easy to handle",
  },
  {
    id: "7",
    name: "Sly",
    type: "Reptile",
    description: "Ball python, docile and low-maintenance",
  },
  {
    id: "8",
    name: "Sheldon",
    type: "Reptile",
    description: "Leopard gecko, curious and interactive",
  },
];

const PET_TYPES = ["All", "Dog", "Cat", "Rabbit", "Reptile"];

export default function Index() {
  const { width } = useWindowDimensions();
  const [selectedPet, setSelectedPet] = useState<Pet | null>(null);
  const [selectedType, setSelectedType] = useState<string>("All");

  const containerWidth = width > 600 ? 600 : width;

  const filteredPets =
    selectedType === "All"
      ? SAMPLE_PETS
      : SAMPLE_PETS.filter((pet) => pet.type === selectedType);

  const handlePetPress = (pet: Pet) => {
    setSelectedPet(pet);
  };

  return (
    <View style={styles.container}>
      <View style={[styles.innerContainer, { width: containerWidth, alignSelf: "center" }]}>
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
        <>
          <View style={styles.filterContainer}>
            {PET_TYPES.map((type) => (
              <Pressable
                key={type}
                onPress={() => setSelectedType(type)}
                style={[
                  styles.filterButton,
                  selectedType === type && styles.filterButtonActive,
                ]}
              >
                <Text
                  style={[
                    styles.filterButtonText,
                    selectedType === type && styles.filterButtonTextActive,
                  ]}
                >
                  {type}
                </Text>
              </Pressable>
            ))}
          </View>
          <PetList pets={filteredPets} onPetPress={handlePetPress} />
        </>
      )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  innerContainer: {
    flex: 1,
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
  filterContainer: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
    gap: 8,
  },
  filterButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: "#f0f0f0",
    borderWidth: 1,
    borderColor: "#ddd",
  },
  filterButtonActive: {
    backgroundColor: "#007AFF",
    borderColor: "#007AFF",
  },
  filterButtonText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#666",
  },
  filterButtonTextActive: {
    color: "#fff",
  },
});