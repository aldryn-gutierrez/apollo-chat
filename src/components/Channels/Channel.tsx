import styled from '@emotion/styled';
import React, {ReactElement} from 'react';

const StyleDiv = styled.div`
  position: relative;
  width: inherit;
  padding: 20px 1rem;
  cursor: pointer;
  border-bottom: 1px solid #f0f4f8;
  &:hover {
    background-color: #ffffff; 
    background-image: -webkit-gradient(linear, left top, left bottom, from(#e9eff5), to(#ffffff)); /* Fallback Color */
    background-image: -webkit-linear-gradient(right, #e9eff5, #ffffff); /* Saf4+, Chrome */
    background-image: -moz-linear-gradient(right, #e9eff5, #ffffff); /* Chrome 10+, Saf5.1+, iOS 5+ */   
    background-image: -ms-linear-gradient(right, #e9eff5, #ffffff); /* FF3.6 */
    background-image: -o-linear-gradient(right, #e9eff5, #ffffff); /* IE10 */  
    background-image: linear-gradient(right, #e9eff5, #ffffff); /* Opera 11.10+ */
  }
`

const Channel = ({ name } : { name : string}) : ReactElement => {
  return (
    <StyleDiv>{name}</StyleDiv>
  )
}

export default Channel;