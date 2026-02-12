import { Container } from "./styles"




function DefaultContainer({ children, ...props }){
    return(
        <Container {...props}>{children}</Container>
    )
}


export default DefaultContainer