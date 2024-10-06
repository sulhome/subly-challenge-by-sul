# Subly Challenge by Sul Aga

## About

This project is a solution for the **Subly Challenge** implemented by **Sul Aga**. It provides a media management interface with filtering capabilities based on media status and language. The app is built using **React**, **React Query**, and **React Bootstrap**, and it retrieves media data from an external API.

The app features different components to display media in various states (Ready, Transcribing, Error), and it offers filtering options for media status and languages. The project adheres to best practices with reusable components and includes unit tests for core functionalities.

## How to Run the Application

### Prerequisites

- **Node.js**: Ensure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).

### Steps

1. **Clone the repository**:
    ```bash
    git clone https://github.com/sulhome/subly-challenge-by-sul.git
    cd subly-challenge-by-sul
    ```

2. **Install dependencies**:
   After navigating to the project directory, install the project dependencies using npm or yarn:
    ```bash
    npm install
    # or if using yarn
    yarn install
    ```

3. **Run the development server**:
   Once the dependencies are installed, run the development server:
    ```bash
    npm start
    # or if using yarn
    yarn start
    ```

4. **Access the application**:
   Open your browser and navigate to:
    ```
    http://localhost:3000
    ```

   The application will automatically reload if you make changes to the code.

### Building the application for production

To create a production build of the application, use the following command:
```bash
npm run build
```

## App Architecture

The app is organized into several key folders to keep the project modular and maintainable:

- **components**: Contains all reusable React components such as cards (`ReadyCard`, `TranscribingCard`, `ErrorCard`), the `Header`, `LoadingIndicator`, and `ServiceError`. These components are used throughout the app to build the UI.

- **enums**: Contains the `CardStatus` enum used to define the different media statuses like `Ready`, `Transcribing`, and `Error`.

- **model**: Contains TypeScript interface definitions for media objects (`Medium`) and error objects (`ErrorMedium`). These interfaces define the shape of data used across the app.

- **services**: Contains the service layer (`mediaService.ts`) which handles the fetching of media data from the external API.

- **utils**: Contains utility functions for filtering media by language and status. These functions (`getAvailableLanguages`, `getFilteredMedia`) encapsulate logic that is reused throughout the app.

## Main Components

- **App.tsx**: The main component of the app where the media data is fetched, filtered, and passed down to the respective components for rendering. It also manages state for the selected media status and language.

- **Header**: A reusable component that includes filtering controls for media status and language, allowing users to filter the displayed media.

- **ReadyCard, TranscribingCard, ErrorCard**: These components are responsible for displaying media in different states. Each card handles the rendering of media-specific information such as name, cover image, and error messages (in the case of `ErrorCard`).

- **LoadingIndicator**: Displays a loading spinner when the media data is being fetched.

- **ServiceError**: Displays an error message when the media data fails to load.

## Unit Tests

The app includes unit tests for utility functions and core components using **Jest** and **React Testing Library**. The following functionalities are covered:

- **mediaUtils.ts**: Contains tests for `getAvailableLanguages` (ensuring unique language extraction) and `getFilteredMedia` (ensuring correct filtering by status and language).

- **components**: Includes tests for components like `Header`, `StatusFilter`, and `LanguageFilter` to ensure they render correctly and handle user interactions (such as filtering and selecting media statuses).

- **App.test.tsx**: Tests for the main `App.tsx` component include:
    - **Loading State**: Ensures that the `LoadingIndicator` is shown when the media data is being fetched.
    - **Error State**: Ensures that the `ServiceError` component is displayed when there is an error fetching the media.
    - **Rendering Cards**: Tests that media cards (`ReadyCard`, `TranscribingCard`, `ErrorCard`) are rendered correctly based on the fetched data.
    - **Filtering Functionality**: Ensures that filtering by status and language updates the displayed media correctly.


Run the unit tests using:

```bash
npm test
```

## Improvement Points

Here are some potential areas for future development and improvements:

- **Pagination**: Currently, the app displays all the media in a single view. Implementing pagination would enhance performance and user experience, especially with large datasets.

- **Sorting Options**: Add sorting functionality to allow users to sort media by name, creation date, or status.

- **Error Handling**: Improve error handling by providing more detailed error messages and the ability to retry fetching the media data in case of failure.

- **Internationalization (i18n)**: Add support for multiple languages to enhance usability for non-English speakers.

- **Styling Improvements**: Fine-tune the UI and consider implementing more sophisticated animations or transitions when filtering and displaying media.