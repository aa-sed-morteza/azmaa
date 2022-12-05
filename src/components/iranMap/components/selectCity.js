import React from "react";
import styled from "styled-components";
import { useUser } from "../../context/userContext";
import Tehran from "./tehran";


export default function SelectCity(){
    const {state,dispatch}=useUser();
    return(
        <Container>
            {state.provinceSearch.name == "تهران" && <Tehran/>}
        </Container>
    )
}

const Container =styled.div`
`