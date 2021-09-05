import React, { useEffect, useState } from "react";

import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonSlides, IonSlide } from "@ionic/react";
import axios from "axios";

const slideOpts = {
  initialSlide: 1,
  speed: 400,
};

const Home: React.FC = () => {
  // parameters
  const [categories, setCategories] = useState([]);
  const [highlights, setHighlights] = useState([]);
  const [features, setFeatured] = useState([]);
  useEffect(() => {
    axios.get("https://devdactic.fra1.digitaloceanspaces.com/foodui/home.json").then((response) => {
      console.log(response.data);
      setCategories(response.data.categories);
    });
  }, []);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonSlides pager={true} options={slideOpts}>
          <IonSlide>
            <h1>Slide 1</h1>
          </IonSlide>
          <IonSlide>
            <h1>Slide 2</h1>
          </IonSlide>
          <IonSlide>
            <h1>Slide 3</h1>
          </IonSlide>
        </IonSlides>
      </IonContent>
    </IonPage>
  );
};

export default Home;
