import { recipes as defaultRecipes } from "@/data/mockData";

const STORAGE_KEY = "namao_saved_recipes";

export function loadSavedRecipeIds(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : defaultRecipes.filter(r => r.isSaved).map(r => r.id);
  } catch (e) {
    return defaultRecipes.filter(r => r.isSaved).map(r => r.id);
  }
}

export function saveSavedRecipeIds(ids: string[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
  } catch (e) {
    // ignore
  }
}

export function isRecipeSaved(id?: string) {
  if (!id) return false;
  return loadSavedRecipeIds().includes(id);
}

export function toggleRecipeSaved(id: string) {
  const ids = loadSavedRecipeIds();
  const idx = ids.indexOf(id);
  if (idx >= 0) {
    const next = ids.filter((i) => i !== id);
    saveSavedRecipeIds(next);
    return { saved: false, ids: next };
  } else {
    const next = [...ids, id];
    saveSavedRecipeIds(next);
    return { saved: true, ids: next };
  }
}
