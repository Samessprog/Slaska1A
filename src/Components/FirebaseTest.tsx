// FirebaseTest.tsx
import React, { useEffect } from "react";
import { database } from "../../firebase"; // Zaimportuj bazę danych z Firebase
import { ref, get } from "firebase/database"; // Importowanie funkcji z Firebase

const FirebaseTest = () => {
  // Funkcja do odczytu danych z bazy
  const readData = () => {
    const dataRef = ref(database, "products"); // Ścieżka do bazy
    get(dataRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log("Dane z bazy:", snapshot.val());
        } else {
          console.log("Brak danych w bazie");
        }
      })
      .catch((error) => {
        console.error("Błąd odczytu danych:", error);
      });
  };

  useEffect(() => {
    console.log("Odczytuję dane z Firebase...");
    readData();
  }, []);

  return (
    <div>
      <h1>Sprawdzanie połączenia z Firebase</h1>
      <p>Dane zostaną wyświetlone w konsoli.</p>
    </div>
  );
};

export default FirebaseTest;
