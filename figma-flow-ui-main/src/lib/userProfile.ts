import { userProfile as defaultUserProfile } from "@/data/mockData";

const STORAGE_KEY = "namao_user_profile";

export type UserProfile = typeof defaultUserProfile;

export function loadUserProfile(): UserProfile {
  if (typeof window === "undefined") return defaultUserProfile;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : defaultUserProfile;
  } catch (e) {
    return defaultUserProfile;
  }
}

export function saveUserProfile(profile: UserProfile) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
  } catch (e) {
    // ignore
  }
}

export function resetUserProfile() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (e) {
    // ignore
  }
}
