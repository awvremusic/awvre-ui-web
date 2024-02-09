import { useMediaQuery } from "./useMediaQuery";

export const usePrefersColorScheme = () => {
    return useMediaQuery('(prefers-color-scheme: dark)') ? 'dark' : 'light';
}