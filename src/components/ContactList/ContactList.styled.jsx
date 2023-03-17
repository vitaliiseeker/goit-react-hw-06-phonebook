import styled from 'styled-components';
import { ReactComponent as IconSvg } from "../../images/iconPhone.svg";
import Avatar from "react-avatar";

export const Wrap = styled.div`
padding: 5px;
/* max-width: 600px; */

padding: 20px;
border: 1px solid #808080;
border-radius: 6px;
`;

export const Item = styled.li`
display: flex;
align-items: center;
gap: 8px;
padding: 5px;
`;

export const Name = styled.span`
/* width: 180px; */
`;

export const Number = styled.span`
/* width: 120px; */
margin-right: 15px;
`;

export const Link = styled.a`
position: relative;
text-decoration: none;
color: inherit;
`;

export const IconSvgLink = styled(IconSvg)`
fill: #2DC100;
transition-property: transform, fill;
transition: var(--animation);

&:hover,
&:focus {
  transform: scale(1.1);
  fill: #008000;
}
`;

export const Avatarstyled = styled(Avatar)`
cursor: pointer;
transition-property: transform;
transition: var(--animation);

&:hover,
&:focus {
  transform: scale(1.1);
}
`;


