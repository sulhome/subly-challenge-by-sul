import { getAvailableLanguages, getFilteredMedia } from './mediaUtils';
import Medium from '../model/medium.interface';
import ErrorMedium from '../model/errorMedium.interface';

describe('mediaUtils', () => {
  const media: (Medium | ErrorMedium)[] = [
    {
      id: '1',
      name: 'Media 1',
      cover: 'readyCover.jpg',
      languages: ['en', 'fr'],
      status: 'ready',
      createdAt: '2024-10-04',
      updatedAt: '2024-10-06',
    },
    {
      id: '2',
      name: 'Media 2',
      cover: 'transcribingCover.jpg',
      languages: ['en', 'es'],
      status: 'transcribing',
      createdAt: '2024-10-04',
      updatedAt: '2024-10-06',
    },
    {
      id: '3',
      name: 'Media 3',
      cover: 'errorCover.jpg',
      languages: ['de', 'fr'],
      status: 'error',
      createdAt: '2024-10-04',
      updatedAt: '2024-10-06',
      errorMessage: 'Failed to process',
    },
  ];

  describe('getAvailableLanguages', () => {
    it('should return unique languages from media data', () => {
      const result = getAvailableLanguages(media);
      expect(result).toEqual(['en', 'fr', 'es', 'de']);
    });

    it('should return an empty array if there are no languages', () => {
      const result = getAvailableLanguages([]);
      expect(result).toEqual([]);
    });
  });

  describe('getFilteredMedia', () => {
    it('should return all media when no filters are applied', () => {
      const result = getFilteredMedia(media, null, null);
      expect(result).toEqual(media);
    });

    it('should filter media by status', () => {
      const result = getFilteredMedia(media, 'ready', null);
      expect(result).toEqual([media[0]]);
    });

    it('should filter media by language', () => {
      const result = getFilteredMedia(media, null, 'fr');
      expect(result).toEqual([media[0], media[2]]);
    });

    it('should filter media by both status and language', () => {
      const result = getFilteredMedia(media, 'ready', 'fr');
      expect(result).toEqual([media[0]]);
    });

    it('should return an empty array if no media matches the filters', () => {
      const result = getFilteredMedia(media, 'ready', 'de');
      expect(result).toEqual([]);
    });
  });
});
