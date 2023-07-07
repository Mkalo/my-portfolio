import { useState } from 'react';

import { useIsBrowser } from '@redwoodjs/prerender/browserUtils';

export function useTheme() {
  const browser = useIsBrowser();
  if (browser) {
    const [theme, setTheme] = useState<'dark' | 'light'>(
      document.documentElement.classList.contains('dark') ? 'dark' : 'light'
    );

    const toggleTheme = () => {
      const newTheme = theme === 'dark' ? 'light' : 'dark';
      setTheme(newTheme);
      localStorage.setItem('theme', newTheme);
      document.documentElement.classList.remove(theme);
      document.documentElement.classList.add(newTheme);
    };

    return { theme, toggleTheme };
  } else {
    return { theme: 'light', toggleTheme: () => {} };
  }
}
