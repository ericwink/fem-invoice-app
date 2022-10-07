import { writable } from "svelte/store";

export const theme = writable('light')
export const allInvoices = writable(['empty'])
export const globalMessage = writable(null)