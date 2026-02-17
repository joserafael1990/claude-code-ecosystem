# WinForms Professional Design Patterns

This skill outlines the standards for modern Windows Forms (WinForms) development, focusing on High DPI support, asynchronous patterns, and data binding.

## Modern Initialization (.NET 9+)
- **DPI Awareness**: Always call `Application.SetHighDpiMode(HighDpiMode.SystemAware)` before running the main form to ensure correct rendering on high-resolution displays.
- **Visual Styles**: Enable visual styles to use the latest OS controls.
- **Color Mode**: Use `SystemColorMode.System` to respect the user's Light/Dark mode preference.

## Threading & Async
- **UI Thread Safety**: Never access UI controls from a background thread. Use `control.InvokeAsync()` (available in .NET 9+) or `Invoke()` for thread-safe updates.
- **Async/Await**: Avoid `Task.Result` or `Task.Wait()` on the UI thread to prevent deadlocks. Use `async void` only for event handlers.

## Performance & Layout
- **Layout Suspension**: Wrap batch control updates in `SuspendLayout()` and `ResumeLayout()` to minimize redraws and flicker.
- **Dispose Pattern**: Explicitly dispose of GDI+ objects (Brushes, Pens, Bitmaps) and unmanaged resources in the `Dispose(bool disposing)` method.

## Data Binding (MVVM)
- **Object Data Sources**: Use `BindingSource` components to bind controls to POCO view models. This enables a clean separation of concerns similar to WPF's MVVM pattern.
- **INotifyPropertyChanged**: Ensure ViewModels implement `INotifyPropertyChanged` so UI updates automatically when data changes.
