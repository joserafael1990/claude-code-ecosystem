# Power BI Data Visualization & Storytelling Standards

This skill outlines the framework for designing intuitive, accessible, and high-impact Power BI reports.

## Visual Selection Strategy
- **Comparison**: Use **Clustered Bar/Column** for categorical comparisons. Use **Line Charts** exclusively for time-series trends. Use **Scatter Plots** to visualize correlations between two numerical variables.
- **Composition**: Use **Treemaps** for hierarchical data. Limit **Pie/Donut** charts to ≤3 segments; otherwise, use a Bar chart.
- **Distribution**: Use **Histograms** or **Box Plots** to show data spread and identify outliers.
- **Relationship**: Use **Sankey Diagrams** for flow analysis (e.g., user journeys) and **Bubble Charts** for multi-dimensional relationship mapping.

## Information Architecture
- **Z-Pattern Layout**: Place the most critical insight/KPI in the top-left corner, following natural eye-scanning patterns.
- **KPI Summary**: Host 3-5 high-level "Big numbers" at the top of the page to provide immediate context before the user dives into detailed visuals.
- **Progressive Disclosure**: Use **Tooltips** and **Drill-through** pages to hide complexity. Keep the main dashboard focused on "What" and use drill-downs for the "Why".
- **Global Navigation**: Keep slicers and filters in a consistent location (standardized Sidebar or Top bar) across all report pages.

## Color & Accessibility
- **Contrast Ratios**: Ensure a minimum contrast ratio of 4.5:1 for all text and critical graphical elements, following WCAG 2.1 AA standards.
- **Color Blindness**: Avoid "Red-Green" only indicators. Use distinct shapes, icons, or patterns together with color (e.g., Up/Down arrows).
- **Semantic Coloring**: Use consistent colors for meaning:
    - **Success/Positive**: Muted Green (#5BD078)
    - **Error/Negative**: Muted Red (#E74C3C)
    - **Primary Action**: Brand Blue (#31B6FD)

## Component Theming (JSON)
- **Standard Themes**: Use a standardized JSON theme file to enforce fonts (e.g., Segoe UI), borders, and data colors across all visuals, ensuring brand consistency and reducing manual formatting time.
