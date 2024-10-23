import { css } from 'styled-components';

export const flexMixin = (
  direction = `row`,
  align = `stretch`,
  justify = `start`,
  gap = 0,
  wrap = `nowrap`
) => {
  return css`
    display: flex;
    flex-direction: ${direction};
    align-items: ${align};
    justify-content: ${justify};
    gap: ${gap};
    flex-wrap: ${wrap};
  `;
};

export const gap_padding_radius = `20px`;
