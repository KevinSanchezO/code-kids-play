import { useNavigate } from "react-router-dom";

export const ButtonGroup = ({prev, next, prevText, nextText}) => {

    const navigate = useNavigate();

    const navigatePrev = () => {
        navigate(prev);
    }

    const navigateNext = () => {
        navigate(next);
    }

    return (
        <div className="btn-group" role="group" aria-label="Basic example">
            <button 
            type="button" 
            className="btn btn-dark"
            onClick={navigatePrev}>
                {prevText}
            </button>

            <button 
            type="button" 
            className="btn btn-success">
                Completar sección
            </button>
            
            <button 
            type="button" 
            className="btn btn-dark"
            onClick={navigateNext}>
                {nextText}
            </button>
        </div>
    )
}
