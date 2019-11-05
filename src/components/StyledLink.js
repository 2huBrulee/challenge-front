import { Link } from "@reach/router";
import styled from "styled-components";

const StyledLink = styled(Link)`
    text-decoration: none;
    &:focus, &:visited, &:link, &:active {
        text-decoration: none;
    };
`;

export default StyledLink;