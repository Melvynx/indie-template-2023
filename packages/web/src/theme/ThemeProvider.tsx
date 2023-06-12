'use client';

import { PropsWithChildren, createContext, useContext } from 'react';
import { useDarkMode } from 'usehooks-ts';

const ThemeContext = createContext<ReturnType<typeof useDarkMode>>({} as any);

export const ThemeProviderBody = ({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) => {
  const values = useDarkMode();

  console.log({ values });

  return (
    <ThemeContext.Provider value={values}>
      <body className={className + ' ' + (values.isDarkMode ? 'dark' : '')}>
        {children}
      </body>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  return context;
};
