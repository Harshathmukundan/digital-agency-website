# Digital Marketing Agency Website

This is a 2-page responsive website for a fictional digital marketing agency named "Grow". The project is built with a modern tech stack including Next.js and TailwindCSS, with a focus on a clean user interface, smooth animations, and a professional design that includes both light and dark modes.

## Pages
- **Home Page (`/`)**: Features a hero section, services overview, portfolio highlights, and a testimonial slider.
- **About Us Page (`/about`)**: Includes the agency's mission/vision, a team showcase, key statistics, and a call-to-action.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Styling**: [TailwindCSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Theming**: `next-themes` for light and dark mode toggle
- **Icons**: `lucide-react`
- **Fonts**: Google Fonts (`Inter` and `Poppins`)

## Design Choices

### 1. Fonts
The typography is designed for clarity and a modern aesthetic:
- **Headings**: The **Poppins** font is used for all major headings (`font-heading`) to give a bold and professional feel.
- **Body Text**: The **Inter** font is used for all body and paragraph text (`font-sans`), chosen for its excellent readability on screens.

### 2. Colors
The color scheme is professional and vibrant, utilizing a primary accent of purple and indigo to convey creativity and trustworthiness.
- **Light Mode**: Features a clean white background (`--background: 0 0% 100%`) with dark text for maximum contrast and readability.
- **Dark Mode**: Uses a deep blue-slate background (`--background: 222.2 84% 4.9%`) with light text. The purple and indigo accents (`--primary: 262 83% 58%`) are used to create a visually appealing and modern dark theme.

### 3. UI/UX
The user experience is enhanced with several features:
- **Responsiveness**: All pages and components are fully responsive and optimized for desktop, tablet, and mobile views.
- **Hover Effects**: Interactive elements like navigation links, buttons, and cards feature smooth transitions on hover to provide visual feedback.
- **Loading Skeletons**: To improve perceived performance, the Services and Testimonials sections display skeleton loaders while the content is (simulated) loading.
- **Layout**: The header features a balanced, centered navigation bar, and the footer content is consistently left-aligned for a clean, organized appearance.

## How to Run Locally

To run this project on your local machine, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd digital-agency-website
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.