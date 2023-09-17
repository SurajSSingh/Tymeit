import { localStorageStore } from "@skeletonlabs/skeleton";
import type { Writable } from "svelte/store";

type Note = {
    id: string,
    content: string,
    tags: string[],
};

export const notesStorage: Writable<Note[]> = localStorageStore("notes", []);