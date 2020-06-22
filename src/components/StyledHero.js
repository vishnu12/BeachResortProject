import styled from 'styled-components'
import defImg from '../images/room-1.jpeg';


const StyledHero=styled.div`
min-height: 60vh;
  background: url(${props=>props.img?props.img:defImg}) center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default StyledHero;
