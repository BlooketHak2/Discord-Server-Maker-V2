import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  doc,
  updateDoc,
  deleteDoc,
  getDoc
} from "firebase/firestore";

import { db } from "./firebase";

/**
 * CREATE TEMPLATE (full discord server blueprint)
 */
export const createTemplate = async (user, data) => {
  return await addDoc(collection(db, "templates"), {
    name: data.name,
    channels: data.channels || [],
    roles: data.roles || [],
    user_id: user.uid,
    createdAt: new Date(),
    updatedAt: new Date(),
    published: true
  });
};

/**
 * GET USER TEMPLATES
 */
export const getUserTemplates = async (user) => {
  const q = query(
    collection(db, "templates"),
    where("user_id", "==", user.uid)
  );

  const snap = await getDocs(q);

  return snap.docs.map(d => ({
    id: d.id,
    ...d.data()
  }));
};

/**
 * UPDATE TEMPLATE (edit channels, roles, permissions)
 */
export const updateTemplate = async (id, data) => {
  const ref = doc(db, "templates", id);

  return await updateDoc(ref, {
    ...data,
    updatedAt: new Date()
  });
};

/**
 * DELETE TEMPLATE
 */
export const deleteTemplate = async (id) => {
  const ref = doc(db, "templates", id);
  return await deleteDoc(ref);
};