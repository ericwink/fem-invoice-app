import { writable } from "svelte/store";

export const theme = writable('light')
export const allInvoices = writable([])
export const globalMessage = writable(null)