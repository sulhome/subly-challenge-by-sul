import { fetchMedia } from './mediaService';
import Medium from '../model/medium.interface';
import ErrorMedium from '../model/errorMedium.interface';

describe('fetchMedia', () => {
  beforeEach(() => {
    jest.spyOn(global, 'fetch');
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should return Medium[] when the fetch is successful', async () => {
    const mockMedia: Medium[] = [
      {
        id: '1',
        name: 'Media 1',
        cover: 'https://somedomain.com/media1.jpg',
        languages: ['en', 'fr'],
        status: 'ready',
        createdAt: '2024-01-01T00:00:00Z',
        updatedAt: '2024-01-01T00:00:00Z',
      },
    ];

    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(mockMedia),
    });

    const result = await fetchMedia();
    expect(result).toEqual(mockMedia);
  });

  it('should throw an error when the fetch fails', async () => {
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: false,
    });

    await expect(fetchMedia()).rejects.toThrow('Error fetching data');
  });

  it('should return ErrorMedium[] when the API returns error data', async () => {
    const mockErrorData: ErrorMedium[] = [
      {
        id: '1',
        name: 'Media error',
        cover: 'https://somedomain.com/media-error.jpg',
        languages: ['en'],
        status: 'error',
        createdAt: '2024-01-01T00:00:00Z',
        updatedAt: '2024-01-01T00:00:00Z',
        errorMessage: 'Media not found',
      },
    ];

    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(mockErrorData),
    });

    const result = await fetchMedia();
    expect(result).toEqual(mockErrorData);
  });
});
