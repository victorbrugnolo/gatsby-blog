import React from 'react';

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

const MenuBar = () => (
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
      <MenuBarItem title="Mudar o tema">
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

export default MenuBar;
