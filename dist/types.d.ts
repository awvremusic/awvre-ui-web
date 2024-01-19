import * as styled_components from 'styled-components';
import * as styled_components_dist_types from 'styled-components/dist/types';
import React from 'react';

type FooterProps = {
    text?: string;
    animationDuration?: number;
    backgroundColor?: string;
    imageUrl?: string;
    className?: string;
};

declare const CustomFooter: styled_components.IStyledComponent<"web", styled_components_dist_types.Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, FooterProps>>;

type SpinnerProps = {
    className?: string;
    width?: number;
    height?: number;
};

declare const Spinner: React.FC<SpinnerProps>;

declare const useIsMobile: () => boolean;

declare const AWVRE_GREEN = "#81E85C";
declare const AWVRE_TAG_IMAGE_URL = "https://media.graphassets.com/4ADfMh3Q0u78rXBAZoSe";

export { AWVRE_GREEN, AWVRE_TAG_IMAGE_URL, CustomFooter, Spinner, useIsMobile };
