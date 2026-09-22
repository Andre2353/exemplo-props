import React from "react";
import { Card,GreetingText,DIvider } from "../styles/BemvindoStyles";

export default function Bemvindo(props){
    return(
        <Card>
            <GreetingText>
                Bem-vindo(a)<span>{props.nome} {props.sobrenome}</span>
            </GreetingText>
            <DIvider/>
        </Card>
    )
}