import type { ITest } from "../types"

const KEY = 'daysix-ls'

export function saveToLS(tests: ITest[]) {
    try {
        localStorage.setItem(KEY, JSON.stringify([...tests]));
    } catch (error) {
        console.error(error);
        window.alert("Error saving to local storage. Please try again.");
    }
}

export function loadFromLS() {
    let tests: ITest[] = [];

    try {
        const testsStr = localStorage.getItem(KEY);
        tests = testsStr ? JSON.parse(testsStr) : [];
    } catch (error) {
        console.error(error);
        window.alert("Error loading from local storage. Please try again.");
    }

    return tests;
}