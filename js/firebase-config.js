// ══════════════════════════════════════════
//  DEVMASTER — FIREBASE CONFIG
// ══════════════════════════════════════════

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCQd2D55Sw37Fa_-zdd3vseDPaXUT2SwHY",
  authDomain: "devmaster-89e32.firebaseapp.com",
  projectId: "devmaster-89e32",
  storageBucket: "devmaster-89e32.firebasestorage.app",
  messagingSenderId: "878385212267",
  appId: "1:878385212267:web:9ea2fab7eb6a61b50e3a2e"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db   = getFirestore(app);
