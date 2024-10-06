import Medium from '../model/medium.interface';
import ErrorMedium from '../model/errorMedium.interface';

export const fetchMedia = async (): Promise<Medium[] | ErrorMedium[]> => {
  const response = await fetch(
    'https://raw.githubusercontent.com/getsubly/test-data/refs/heads/master/cards.json'
  );
  if (!response.ok) {
    throw new Error('Error fetching data');
  }
  return response.json();
};
