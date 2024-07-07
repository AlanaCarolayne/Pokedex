import styled from "styled-components"

    const Progress  = styled.progress`
    border: none;
     height: 10px;
     width: 250px;
     box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
     margin-bottom: 3px;
     margin-left: 3px;
     &::-webkit-progress-bar{
       background-color: #e0e0e0;
       border-radius: 10px;
     }
     &::-webkit-progress-value{
       border-radius: 10px;
       background-color: ${(props) => props.color || 'green'};
     }
   `

export default Progress