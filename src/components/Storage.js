import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import React from "react";

const firebaseConfig = {
  apiKey: "AIzaSyCDDgBvnsrDkSUex9bRbYES_Zkh-ZRNm-s",

  authDomain: "matthyscv.firebaseapp.com",

  projectId: "matthyscv",

  storageBucket: "matthyscv.appspot.com",

  messagingSenderId: "563031124487",

  appId: "1:563031124487:web:134ea85ddfe3b673dd58a2",

  measurementId: "G-1KEHSGHG97",
};

const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);
const starsRef = ref(storage, "cv.pdf");

const Storage = () => {
  let urlCv = "#";
  if (urlCv === "#" || urlCv === "") {
    getDownloadURL(starsRef).then((urlCv) => {
      const varBa = document.getElementById("myimg");
      if (varBa != null) {
        varBa.setAttribute("href", urlCv);
        // this.setUrl();
      }
    });
  }
  return (
    <a
      className="text-center text-xl border-purple-500 border-2 pl-4 pr-4 pt-2 pb-2 text-white rounded-md hover:bg-purple-500"
      href={urlCv}
      target="_blank"
      id="myimg"
      rel="noreferrer"
    >
      Mon CV
    </a>
  );
};

export default Storage;
