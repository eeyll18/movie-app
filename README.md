# Next.js MovieApp

This project is a simple movie listing application built with Next.js, TypeScript, and Tailwind CSS. Its primary goal is to practice using these technologies, fetch data from a MockAPI, present it in a clean interface, and utilize Next.js features such as the App Router, Server Components, Static Site Generation (SSG), and dynamic routing.

## ✨ Features

*   **Movie Listing:** Lists movies fetched from MockAPI on the homepage as cards.
*   **Detail Page:** Each movie has a separate detail page.
*   **Responsive Design:** Interface compatible with all screen sizes, built with Tailwind CSS.
*   **Loading States:** Shows loading animations to the user while data is being fetched.
*   **SEO Friendly:** Dynamic meta tags are generated for movie detail pages (`generateMetadata`).
*   **Image Optimization:** Images are optimized using the `next/image` component, and placeholder images are supported.
*   **Static Site Generation (SSG):** Movie detail pages are statically generated at build time using `generateStaticParams`.
*   **Data Revalidation:** The movie list is updated at regular intervals (`revalidate`).
*   **Modern JavaScript/TypeScript:** Type safety is ensured with TypeScript.

## 🛠️ Technologies Used

*   **Next.js 13+ (App Router)**
*   **React 18**
*   **TypeScript**
*   **Tailwind CSS**
*   **MockAPI** (As a backend data source)

## 🔮 Future Enhancements / To-Do

This project was primarily initiated to practice and explore Next.js (App Router) and TypeScript. While the core functionality of listing and detailing movies is in place using mock data, there are several areas for future improvement and expansion:

### Frontend & UI/UX

*   **Advanced Styling & Theming:**
    *   Implement a more polished and visually appealing design. Currently, styling is basic Tailwind CSS.
*   **Improved User Experience:**
    *   Implement client-side filtering (by genre, year, rating) and sorting opções for the movie list.
    *   Add pagination or infinite scrolling for large movie lists.
    *   Enhance loading states with more engaging skeletons or animations.
*   **Search Functionality:** Add a search bar to find movies by title or director.

### Backend & Data

*   **Real Movie Data Integration:**
    *   Replace MockAPI with a real movie database API.
*   **Proper Backend Implementation:**
    *   If user accounts or more complex data interactions are desired, develop a dedicated backend service 
    *   Implement database storage for user data and movie interactions.

### Next.js & TypeScript Enhancements

*   **Advanced Next.js Features:**
*   **TypeScript Refinements:**
*   **Testing:**

This list provides a roadmap for potential future work. Contributions and suggestions are always welcome!

## 🚀 Getting Started

Follow the steps below to run this project on your local machine.

### Prerequisites

*   Node.js (v18 or higher recommended)
*   npm, yarn, or pnpm

### Installation

1.  **Clone the project:**
    ```bash
    git clone https://github.com/eeyll18/movie-app.git
    cd movie-app
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    # yarn install
    # or
    # pnpm install
    ```

3.  **Set Up Environment Variables:**
    Create a file named `.env.local` in the project's root directory and add your MockAPI endpoint:
    ```env
    MOCKAPI_BASE_URL=YOUR_MOCKAPI_ENDPOINT_URL_HERE
    ```
    Ensure you have an endpoint in MockAPI that matches the `Movie` type.

4.  **Start the Development Server:**
    ```bash
    npm run dev
    # or
    # yarn dev
    # or
    # pnpm dev
    ```
    The application will run by default at `http://localhost:3000`.

### Build Process

To build the production version of the project:
```bash
npm run build

