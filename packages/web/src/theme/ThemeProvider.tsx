'use client';

import clsx from 'clsx';
import { PropsWithChildren, createContext, useContext } from 'react';
import { useDarkMode } from 'usehooks-ts';

const ThemeContext = createContext<ReturnType<typeof useDarkMode> | null>(null);

export const ThemeProviderBody = ({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) => {
  const values = useDarkMode();

  return (
    <ThemeContext.Provider value={values}>
      <body
        className={clsx(className, {
          dark: values.isDarkMode,
        })}
      >
        {children}
      </body>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
};
