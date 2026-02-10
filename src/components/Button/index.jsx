import PropTypes from 'prop-types'; 
import { Button } from './styles'


function DefaultButton({ children, ...props }){


    return(
        <Button {...props}>{children}</Button>
    )
}

DefaultButton.PropTypes = {
    children: PropTypes.string
}



export default DefaultButton