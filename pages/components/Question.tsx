/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { QuestionData } from "../../mocks/QuestionsData";
import { gray2, gray3 } from "../../styles/Styles";

type Props = {
  data: QuestionData;
  showContent?: boolean;
};

export const Question = ({ data, showContent = true }: Props) => {
  return (
    <div
      css={css`
        padding: 10px 0;
        font-size: 19px;
      `}
    >
      <div>{data.title}</div>
      {showContent && (
        <div
          css={css`
            padding-bottom: 10px;
            font-size: 15px;
            color: ${gray2};
          `}
        >
          {data.content.length > 50
            ? `${data.content.substring(0, 50)}...`
            : data.content}
        </div>
      )}
      <div
        css={css`
          font-size: 12px;
          font-style: italic;
          color: ${gray3};
        `}
      >
        {`Asked by ${data.userName} on
              ${data.created.toLocaleDateString()} ${data.created.toLocaleTimeString()}`}
      </div>
    </div>
  );
};
