# PowerShell UI & User Experience Standards

This skill outlines the standards for designing and building graphical (GUI) and terminal (TUI) user interfaces for PowerShell tools.

## Architectural Patterns
- **Separation of Concerns**: Strictly separate business logic (in `.psm1` modules) from UI presentation (in `.ps1` scripts or `.xaml` files). The UI should simply be a consumer of the underlying logic modules.
- **Responsive Threading**: Never block the UI thread with long-running tasks. Use `Runspaces`, `Jobs`, or `WPF Dispatchers` to execute heavy automation in the background while keeping the interface responsive.
- **Event-Driven Design**: Use event handlers (e.g., `.Add_Click({})`) to trigger logic. Avoid strictly linear script execution flow within a GUI.

## WPF & XAML (Modern Desktop)
- **XAML Definition**: Load XAML layout from external files or here-strings. Avoid determining layout via code-behind unless dynamic generation is required.
- **Data Binding**: Leverage WPF data binding where possible to link UI controls to PowerShell objects (`[PSCustomObject]`, `[ObservableCollection]`).
- **Styling**: Use centralized `ResourceDictionary` definitions for styles and templates to maintain consistency across the tool.
- **MahApps.Metro**: For "modern" Windows tools, prefer frameworks like MahApps.Metro to provide a unified, professional aesthetic over native WinForms controls.

## WinForms (Legacy/Simple)
- **Use Case**: Reserve WinForms `[System.Windows.Forms]` for simple input dialogs, message boxes, or tools where the .NET runtime overhead of WPF is undesirable.
- **Forms & Controls**: Manually instantiate and configure controls (`Button`, `TextBox`, `Label`). Ensure proper anchoring/docking for resize behavior.
- **Modal vs. Modeless**: Explicitly choose between `.ShowDialog()` (blocking) and `.Show()` (non-blocking) based on the workflow requirements.

## Terminal User Interfaces (TUI)
- **Cross-Platform**: Prioritize TUIs (`ConsoleGuiTools`, `Terminal.Gui`) for tools that must run on Linux/macOS or via SSH.
- **Interactive Menus**: Use `Out-GridView -PassThru` for simple selection lists. For more complex inputs, verify availability of `host` UI methods.
- **Progress**: Always provide feedback via `Write-Progress` or custom progress bars during long operations.
