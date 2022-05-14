import { StyledButton, StyledCard } from "components/styled/Core.styles";
import { Link } from "react-router-dom";

const Card = ({ children, background }) => {
    return <StyledCard margin="5px" padding="20px">

        {children}

        <StyledButton margin="5px">  <Link to="/twitter">Lets create!</Link></StyledButton>

    </StyledCard>
}

export default Card;