import { ImgBackground } from "./styles"



function DefaultImgBackground({ children, ...props }){


    return (
        <ImgBackground {...props}>{children}</ImgBackground>
    )
}

export default DefaultImgBackground