import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import React from "react";
import app from "../src/firebase.config";

const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);
const starsRef = ref(storage, "cv.pdf");
const urlCv = "ete";

export const Storage = () => {
  let urlCv = "#";
  //   if (urlCv === "#" || urlCv === "") {
  //     getDownloadURL(starsRef).then((urlCv) => {
  //       const varBa = document.getElementById("myimg");
  //       if (varBa != null) {
  //         varBa.setAttribute("href", urlCv);
  //         // this.setUrl();
  //       }
  //     });
  //   }
  return (
    <a href={urlCv} target="_blank" id="myimg">
      Download
    </a>
  );
};