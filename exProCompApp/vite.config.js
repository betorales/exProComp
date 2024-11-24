import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import { loadEnv } from 'vite';
import dotenv from 'dotenv'
dotenv.config()

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [react()],
    // Se dejan la variables de ambiente dentro del config, porque en el .env no las detecta de forma correcta
    define: {
      'import.meta.env.VITE_API_KEY': JSON.stringify("AIzaSyAOcqUqhonqNPpVXVmanXQCMXEaed30B0k"),
      'import.meta.env.VITE_AUTH_DOMAIN': JSON.stringify("examenprocomp.firebaseapp.com"),
      'import.meta.env.VITE_PROJECT_ID': JSON.stringify("examenprocomp"),
      'import.meta.env.VITE_STORAGE_BUCKET': JSON.stringify("examenprocomp.firebasestorage.app"),
      'import.meta.env.VITE_MESSAGING_SENDER_ID': JSON.stringify("577857390296"),
      'import.meta.env.VITE_APP_ID': JSON.stringify("1:577857390296:web:894f32c93e329e7ecef9ad"),
    }
  };
});
