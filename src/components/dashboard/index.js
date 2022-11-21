import React from "react";
import styled from "styled-components";
import { useUser } from "../context/userContext";

export default function Dashboard(){
    const { state, dispatch } = useUser();

    console.log('this',state.dutieHistory)
    return(
        <Container>
                dashboard
        </Container>
    )
}

const Container =styled.section`

`