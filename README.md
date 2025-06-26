# ACP Orçamento UI

This project is an Angular-based UI for managing technical and commercial proposals (ACPs). It features a modern, responsive layout and a workflow for selecting products and related items, with a summary table for aggregated selections.

---

![image](https://github.com/user-attachments/assets/8b433efa-af37-4d0a-8518-738d1c262385)

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

## Notes
- No backend is required; some data is mocked.
- The UI is fully responsive and works in modern browsers.

 ## Protheus integration
- A crucial feature for protheus integration is a key storaged in sesssion, named 'orcamento'.
- uses protheus-lib-core. Referenced in (https://tdn.totvs.com.br/display/public/framework/Protheus-lib-core)
- uses advplToJS function, inside /src/assets/preload
- uses custom advpl function,as:
  
Static Function JsToAdvpl(oWebChannel,cType,cContent)
	oWebChannel:AdvPLToJS('orcamento',[number])
Return .T.



