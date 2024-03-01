import styled from 'styled-components';
export const HeaderContainer=styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 3.2rem;
  .container{
    display: flex;
    gap: 2rem;
  }
    span{
      display: flex;
      align-items: center;
      color: ${(props)=>props.theme["--purple"]};
      gap: 0.2rem;
      font-size: 1.4rem;
      background-color:${(props)=>props.theme["--purple-light"]};
      border-radius: 8px;
      padding: 0.8rem;
    }
  button{
    color: ${(props)=>props.theme["--yellow-dark"]} ;
    background-color: ${(props)=>props.theme["--yellow-light"]};
    border: none;
    border-radius: 8px;
    padding: 0.8rem;
  }
`