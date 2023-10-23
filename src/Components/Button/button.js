import styled, {css} from "styled-components";
import React from "react";
import theme from "Styles/theme";

// 기본 버튼은 렌딩 페이지 버튼인 로그인으로 지정

const SIZES_BTN = {
   sm: css` // 버튼 중에서 작은 사이즈인 질문 답변, 등록페이지 버튼
    --button-font-margin: 0;
    --button-width: 120px;
    --button-font-size: ${theme.FONT_SIZE.nomal};
    --button-font-weight: ${theme.FONT_WEIGHT.medium};
   `,
   md: css` // 중간 크기인 중복확인, 주소검색
    --button-font-margin: 0;
    --button-width: 149px;
    --button-height: 60px;
    --button-font-size: ${theme.FONT_SIZE.large};
    --button-font-weight: ${theme.FONT_WEIGHT.regular};
    --button-border: 1.5px solid rgba(85, 85, 85, 0.33); //왜 안먹지
    --button-border-radius: 0px 10px 0px 0px;
    `,
    lg01: css`
    --button-font-margin: 0;
    --button-width: 410px;
    --button-height: 60px;
    --button-font-size: ${theme.FONT_SIZE.large};
    --button-font-weight: ${theme.FONT_WEIGHT.medium};
    `,
    lg02: css`
    --button-font-margin: 0;
    --button-width: 410px;
    --button-height: 50px;
    --button-font-size: ${theme.FONT_SIZE.nomal};
    --button-font-weight: ${theme.FONT_WEIGHT.bold};
    --button-border-radius: 15px;
    `,
    lg03: css`
    --button-font-margin: 0;
    --button-padding: 0 0 0 25px;
    --button-width: 410px;
    --button-height: 50px;
    --button-font-size: ${theme.FONT_SIZE.nomal};
    --button-font-weight: ${theme.FONT_WEIGHT.bold};
    --button-border-radius: 15px;
    `,
    cr: css`
        --button-font-margin: 0;
        --button-width: 55px;
        --button-height: 55px;
        --button-font-size: ${theme.FONT_SIZE.small};
        --button-font-weight: ${theme.FONT_WEIGHT.bold};
    `
};

const VARIANTS_BTN = {
    question: css` // 질문 답변 페이지
        --button-bg-color: ${theme.PALETTE.white};
        --button-font-color: #8f8f8f;
        --button-border: 1px solid ${theme.PALETTE.black};
        --button-boxShadow: none;

        &:active{
            --button-bg-color: ${theme.PALETTE.subColor1};
            --button-font-color: ${theme.PALETTE.primary};
            --button-border: 1px solid ${theme.PALETTE.primary};
        }
    `,
    calendar: css` // 달력 등록 버튼
        --button-bg-color: ${theme.PALETTE.subColor2};
        --button-font-color: ${theme.PALETTE.black};
        --button-border: none;
        --button-boxShadow: none;
    `,
    enroll: css` //등록하기
        --button-bg-color: ${theme.PALETTE.primary};
        --button-font-color: ${theme.PALETTE.white};
        --button-border: none;
        --button-boxShadow: none;
    `,
    cancel: css` //취소하기
        --button-bg-color: ${theme.PALETTE.subColor1};
        --button-font-color: ${theme.PALETTE.black};
        --button-border: none;
        --button-boxShadow: none;
    `,
    category: css` //등록부분 카테고리
        --button-bg-color:  ${theme.PALETTE.gray[100]};
        --button-font-color: ${theme.PALETTE.black};
        --button-font-align: left;
        --button-border: none;
        --button-boxShadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

        &:active{
            --button-bg-color: ${theme.PALETTE.subColor2};
            --button-font-color: ${theme.PALETTE.white};
        }
    `,
    region: css` // 지역 태그
        --button-bg-color: ${theme.PALETTE.gray[100]};
        --button-font-color: ${theme.PALETTE.black};
        --button-border: none;
        --button-boxShadow: none;

        &:active{
            --button-bg-color: ${theme.PALETTE.subColor2};
            --button-font-color: ${theme.PALETTE.white};
        }
    `,
    check: css` // 중복확인, 주소검색
        --button-bg-color: ${theme.PALETTE.primary};
        --button-font-color: ${theme.PALETTE.white};
        --button-border: none;
        --button-boxShadow: none;
    `,
    login: css` //로그인
        --button-bg-color: ${theme.PALETTE.subColor1};
        --button-font-color: ${theme.PALETTE.primary};
        --button-border: none;
        --button-boxShadow: none;
    `,
    membership: css` //회원가입
        --button-bg-color: ${theme.PALETTE.primary};
        --button-font-color: ${theme.PALETTE.white};
        --button-border: none;
        --button-boxShadow: none;
    `
};

function Button({size, variant, children}){
    const sizeStyle = SIZES_BTN[size];
    const variantStyle = VARIANTS_BTN[variant];

    return (
        <StyledButton $sizeStyle={sizeStyle} $variantStyle={variantStyle}>
            <StyledBtnText>{children}</StyledBtnText>
        </StyledButton>
    );
};

const StyledButton = styled.button`
    ${(p) => p.$sizeStyle};
    ${(p) => p.$variantStyle};

    width: var(--button-width, 146px);
    height: var(--button-height, 40px);
    padding: var(--button-padding, 0px);
    border: var(--button-border, none);
    border-radius: var(--button-border-radius, 50px);
    background: var(--button-bg-color, ${theme.PALETTE.white});
    box-shadow: var(--button-boxShadow, 0px 4px 4px 0px rgba(0, 0, 0, 0.25));
    cursor: pointer;
`;

const StyledBtnText = styled.p`
    margin: var(--button-font-margin, 10px 0);
    text-align: var(--button-font-align, center);
    font-size: var(--button-font-size, ${theme.FONT_SIZE.small});
    font-weight: var(--button-font-weight, ${theme.FONT_WEIGHT.regular});
    color: var(--button-font-color, ${theme.PALETTE.primary});
`;

export default Button;

