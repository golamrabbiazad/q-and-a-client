/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

type Props = {
  children: React.ReactNode;
};

export const PageTitle = ({ children }: Props) => {
  return (
    <h2
      css={css`
        font-size: 15px;
        font-weight: bold;
        margin: 10px 0px 5px;
        text-align: center;
        text-transform: uppercase;
      `}
    >
      {children}
    </h2>
  );
};
