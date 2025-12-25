# Campus Energy Dashboard

## Problem Statement:
University campuses are massive consumers of energy, often operating inefficiently due to a lack of granular, real-time data. Students and facility managers lack visibility into specific block usage, leading to unchecked waste, high costs, and a significant carbon footprint. Without clear data, it is impossible to identify leaks, spikes, or inefficient behaviors.

## Solution:
We realized that to truly reduce energy consumption, we needed to make energy data visible, understandable, and actionable. We needed a tool that not only reports numbers but also identifies anomalies and visualizes the environmental impact in a way that resonates with the community.

**Campus Energy Dashboard** is our answer. We’ve designed a platform that turns raw inputs into meaningful insights. By providing a clean, modern interface with immediate feedback on costs, carbon emissions, and efficiency rankings, we empower the campus community to make smarter, more sustainable decisions.

## What it does
The Campus Energy Dashboard converts static energy meter readings into a dynamic intelligence hub. It allows users to input daily usage data and instantly visualize the performance of different campus blocks (Lecture Halls, Labs, Hostels, etc.). It features **Smart Anomaly Detection** to flag unusual spikes, a **Sustainability Report** that translates kWh into trees required for carbon offsetting, and a **Cost Simulator** based on tiered pricing models. It serves as a central nervous system for campus energy management.

## How I built it
The dashboard is built using modern web standards to ensure performance, responsiveness, and maintainability.

**a) Frontend:**
- Powered by **Vite** and **React 19** for a lightning-fast, reactive user experience.
- **Tailwind CSS** provides a custom, utility-first design system featuring an eco-friendly Emerald/Teal color palette.
- **React Three Fiber (@react-three/fiber)** & **Drei** are used to render the immersive "Neural Network" hero visualization in the demo section.
- **GSAP (GreenSock)** powers high-performance animations for the interactive elements.
- **Lucide React** provides clean, consistent iconography.

**b) Logic & Core:**
- Written entirely in **TypeScript** for robust type safety and reliability.
- The core analytical engine (ported and enhanced from C) runs client-side, performing real-time scaling of data, CO2 calculations, and predictive forecasting without server latency.
- Custom **React Hooks** (`useEnergyData`) manage the complex state of energy readings, alerts, and rankings.

**c) Development Tools:**
- **VS Code** with **ESLint** and **Prettier** ensured code quality and consistency.
- **GitHub** for version control and collaboration.

## Challenges I ran into
a) **Porting Legacy Logic:** Translating the original C-based procedural logic into a reactive, state-driven React paradigm required careful restructuring of how data flows through the application.

b) **Advanced 3D Integration:** Integrating the custom shader-based "Neural Network" background (using Three.js) while maintaining high frame rates and ensuring it didn't distract from the core dashboard data was a fine balancing act.

c) **Anomaly Detection Tuning:** Defining what constitutes an "anomaly" required fine-tuning the algorithms to distinguish between normal peak usage and actual efficiency issues (set to >40% of average).

## Accomplishments that I'm proud of
a) **Smart Insights:** We went beyond simple charts to implement "Smart Alerts" that actually detect and flag anomalies, adding real intelligence to the system.

b) **Visual Excellence:** The UI achieves a balance between "Academic Elegance" and modern tech, using glassmorphism and smooth transitions to make energy data look beautiful.

c) **Sustainability Focus:** We successfully integrated environmental metrics (CO2 & Trees), making the abstract concept of "kilowatt-hours" tangible and relatable.

d) **Seamless Demo Integration:** We successfully merged a high-end 3D generative art demo with a functional utility dashboard in a single cohesive app.

## What I learned
a) **State Management Complexity:** Managing dependent states (input data -> affecting averages -> affecting rankings -> affecting alerts) taught us the power of React's `useMemo` for derived state performance.

b) **The Power of Feedback:** We learned that showing users the *cost* and *environmental impact* of their usage is a far more powerful motivator than just showing raw numbers.

c) **TypeScript Benefits:** Strict typing saved us countless hours by preventing data structure mismatches between our calculation engine and the UI components.

## What's next for Campus Energy Dashboard
a) **IoT Integration:** Connecting directly to smart meters for automated, second-by-second data ingestion.

b) **Gamification:** Implementing a "Green Points" system where blocks compete weekly to reduce their carbon footprint.

c) **Predictive AI:** Replacing the simple linear forecast with a Machine Learning model that accounts for weather, holidays, and class schedules.

d) **Mobile App:** wrapping the responsive web design into a native wrapper for push notifications on alerts.

## Built With
react
vite
typescript
tailwindcss
three.js
react-three-fiber
gsap
lucide-react
eslint
