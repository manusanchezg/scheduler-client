export const capitalizeFirstLetter = (text: string): string => {
    if (text.length === 0) {
        return text; // Return the original string if it's empty
    }

    const firstLetterCapitalized = text.charAt(0).toUpperCase();
    const restOfText = text.slice(1);

    return firstLetterCapitalized + restOfText;
}