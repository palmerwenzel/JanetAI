use tauri::{Manager, Listener};
use tauri_plugin_global_shortcut::GlobalShortcutExt;

// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .setup(|app| {
            // Try to register global shortcut, ignore if already registered
            if let Err(e) = app.global_shortcut().register("CommandOrControl+Space") {
                println!("Global shortcut registration failed (may already be registered): {}", e);
            }
            
            let app_handle = app.handle().clone();
            app.listen("shortcut", move |_event| {
                if let Some(window) = app_handle.get_webview_window("main") {
                    if window.is_visible().unwrap_or(false) {
                        window.hide().unwrap();
                    } else {
                        // Center the window before showing
                        if let Some(monitor) = window.current_monitor().unwrap() {
                            let monitor_size = monitor.size();
                            let window_size = window.outer_size().unwrap();
                            let x = (monitor_size.width - window_size.width) / 2;
                            let y = (monitor_size.height - window_size.height) / 2;
                            window.set_position(tauri::LogicalPosition::new(x, y)).unwrap();
                        }
                        window.show().unwrap();
                        window.set_focus().unwrap();
                    }
                }
            });
            Ok(())
        })
        .plugin(tauri_plugin_opener::init())
        .plugin(tauri_plugin_global_shortcut::Builder::new().build())
        .invoke_handler(tauri::generate_handler![greet])
        .on_window_event(|window, event| match event {
            tauri::WindowEvent::Focused(false) => {
                window.hide().unwrap();
            }
            _ => {}
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
