/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Image from "next/image";
import user from "../../public/assets/user.svg";

export const UserIcon = () => (
  <Image
    src={user}
    alt="User"
    css={css`
      width: 12px;
      opacity: 0.6;
    `}
  />
);
