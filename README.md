# ACP Orçamento UI

This project is an Angular-based UI for managing technical and commercial proposals (ACPs). It features a modern, responsive layout and a workflow for selecting products and related items, with a summary table for aggregated selections.

---

![ACP Orçamento UI Screenshot](./screenshot.png)

---

## Features
- **Produtos Table:** List and select products for the proposal.
- **6 Linked Tables:** Each product shows related options (e.g., Embalagem, Químicos, Logística, etc.).
- **ACPs Table:** Aggregates all selected items for the proposal.
- **Global Search:** Quickly filter all left-side tables (except ACPs) with accent-insensitive search.
- **Responsive Layout:** Clean, Protheus-inspired design with sticky headers and soft shadows.
- **Selection Logic:** Per-product selection, with aggregation in the ACPs table.
- **Mock Data:** All tables use realistic mock data for easy testing and demonstration.

## How It Works
1. **Select a Product:** Click a row in the Produtos table.
2. **Select Related Items:** Use the checkboxes in the 6 tables below to select options for the chosen product.
3. **Review ACPs:** The right-side ACPs table shows all selected items for the current proposal.
4. **Search:** Use the search bar to filter items in all left tables (except ACPs).
5. **Confirm:** Click 'Confirmar' to finalize your selections.

## Project Structure
- `src/app/app.component.ts` — Main component logic
- `src/app/app.component.html` — UI layout
- `src/app/app.component.css` — Styles (Protheus palette)
- `src/app/mock-tables.ts` — Mock data for all tables

## Running the Project
1. Install dependencies:
   ```sh
   npm install
   ```
2. Start the development server:
   ```sh
   npm start
   ```
3. Open your browser at [http://localhost:4200](http://localhost:4200)

## Notes
- No backend is required; all data is mocked.
- The UI is fully responsive and works in modern browsers.
- For SSR or Protheus integration, see comments in the code.

---

