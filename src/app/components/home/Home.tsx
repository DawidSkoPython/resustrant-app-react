import React, { useEffect, useState } from "react";

import { IonPage, IonHeader, IonToolbar, IonTitle } from "@ionic/react";
import axios from "axios";

const Home: React.FC = () => {
  // parameters
  const [categories, setCategories] = useState([]);
  const [highlights, setHighlights] = useState([]);
  const [features, setFeatured] = useState([]);
  useEffect(() => {
    axios.get("https://devdactic.fra1.digitaloceanspaces.com/foodui/1.json").then((response) => {
      console.log(response.data);
    });
  }, []);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
    </IonPage>
  );
};

export default Home;
