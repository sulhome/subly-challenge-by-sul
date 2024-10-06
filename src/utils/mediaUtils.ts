import Medium from '../model/medium.interface';
import ErrorMedium from '../model/errorMedium.interface';

// Returns An array of unique languages.
export const getAvailableLanguages = (media: (Medium | ErrorMedium)[]) => {
  return [...new Set(media.flatMap((medium) => medium.languages))];
};

// Returns a filtered array of media based on language and/or status
export const getFilteredMedia = (
  media: (Medium | ErrorMedium)[],
  selectedStatus: string | null,
  selectedLanguage: string | null
) => {
  return media.filter((medium) => {
    let matchesStatus = true;
    let matchesLanguage = true;

    if (selectedStatus) {
      matchesStatus = medium.status === selectedStatus;
    }

    if (selectedLanguage) {
      matchesLanguage = medium.languages.includes(selectedLanguage);
    }

    return matchesStatus && matchesLanguage;
  });
};
