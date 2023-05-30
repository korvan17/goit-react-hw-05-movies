import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const InfoMovie = styled.article`
    padding: 20px;
    display: flex;
    gap: 20px;
    align-items: center;
`

export const ButtonBack = styled(Link)`
  display: block;
  margin-bottom: 10px;
`;

export const Poster = styled.img`
    /* float: left;
  margin-right: 10px; */
`

export const AddInfo = styled.div`
    padding-left: 80px;
`