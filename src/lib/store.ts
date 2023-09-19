import { localStorageStore } from "@skeletonlabs/skeleton";
import { readonly, type Readable, type Writable } from "svelte/store";

type Tracker = {name: string, data: number | string};
type People = string;
type Context = {name: string, days: number};

type Note = {
    id: string,
    content: string,
    trackers: Tracker[],
    people?: People[],
    context?: Context[],
    stopwatches?: string[],
};

type Settings = {
    confimered: boolean,
};

type Page = {
    name: string,
    path: string,
    directlyShow: boolean,
};

export const notesStorage: Writable<Note[]> = localStorageStore("notes", []);
export const userSettings: Writable<Settings | null> = localStorageStore("settings", null);
export const routes: Readable<Page[]> = readonly(localStorageStore("pages", [
    { name: 'Track', path: '/track', directlyShow: true},
    { name: 'Timeline', path: '/timeline', directlyShow: true},
    { name: 'Dashboard', path: '/dashboard' , directlyShow: true},
    { name: 'Goals', path: '/goals' , directlyShow: false},
    { name: 'Reminders', path: '/reminders' , directlyShow: false},
    { name: 'Settings', path: '/settings' , directlyShow: false}
]));