import {
  collection,
  addDoc,
  serverTimestamp,
  Timestamp,
} from "firebase/firestore";
import { db } from "@/lib/firebase";

export interface EarlyAccessSubmission {
  name: string;
  email: string;
  role: string;
  interests: string[];
  submittedAt?: Timestamp;
}

export interface EarlyAccessFormData {
  name: string;
  email: string;
  role: string;
  interests: string[];
}

export const submitEarlyAccessForm = async (
  formData: EarlyAccessFormData
): Promise<string> => {
  try {
    const submission: EarlyAccessSubmission = {
      ...formData,
      submittedAt: serverTimestamp() as Timestamp,
    };

    const docRef = await addDoc(collection(db, "early-access"), submission);
    console.log("Early access form submitted with ID: ", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error submitting early access form: ", error);
    throw new Error("Failed to submit form. Please try again.");
  }
};

export const validateFormData = (formData: EarlyAccessFormData): boolean => {
  const { name, email, role } = formData;

  if (!name.trim() || !email.trim() || !role.trim()) {
    return false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return false;
  }

  return true;
};
