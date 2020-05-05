import React, { useState, useEffect } from 'react';

import { Home } from 'styled-icons/boxicons-solid';
import { SearchAlt2 as Search } from 'styled-icons/boxicons-regular';
import { UpArrowAlt as Arrow } from 'styled-icons/boxicons-regular';
import { Bulb as Light } from 'styled-icons/boxicons-regular';
import { Grid } from 'styled-icons/boxicons-solid';

import {
  MenuBarWrapper,
  MenuBarGroup,
  MenuBarItem,
  MenuBarLink,
} from './styles';

const MenuBar = () => {
  const [theme, setTheme] = useState(null);

  const isDarkMode = theme === 'dark';

  useEffect(() => {
    setTheme(window.__theme);
    window.__onThemeChange = () => setTheme(window.__theme);
  }, []);

  return (
    <MenuBarWrapper>
      <MenuBarGroup>
        <MenuBarLink to="/" title="Voltar para Home">
          <MenuBarItem>
            <Home />
          </MenuBarItem>
        </MenuBarLink>

        <MenuBarLink to="/search/" title="Pesquisar">
          <MenuBarItem>
            <Search />
          </MenuBarItem>
        </MenuBarLink>
      </MenuBarGroup>

      <MenuBarGroup>
        <MenuBarItem
          title="Mudar o tema"
          onClick={() => {
            window.__setPreferredTheme(isDarkMode ? 'light' : 'dark');
          }}
          className={theme}
        >
          <Light />
        </MenuBarItem>

        <MenuBarItem title="Mudar visualização">
          <Grid />
        </MenuBarItem>

        <MenuBarItem title="Ir para o topo">
          <Arrow />
        </MenuBarItem>
      </MenuBarGroup>
    </MenuBarWrapper>
  );
};

export default MenuBar;
