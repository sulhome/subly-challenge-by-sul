import Medium from './medium.interface';

export default interface ErrorMedium extends Medium {
  errorMessage: string;
}
