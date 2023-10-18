import { useNavigate } from "react-router-dom"

export const ModuleCard = ({module}) => {

    const navigate = useNavigate();

    const redirect = () => {
        navigate(module.dir, {
        });
    }

    return (
        <div className="col p-1 animate__animated animate__rubberBand">
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-1">
                        <h2 className="p-5">{module.id}</h2>
                    </div>

                    <div className="col mt-3">
                        <div className="card-body">
                            <h5>{module.title}</h5>
                            <p>{module.description}</p>
                        </div>
                    </div>

                    <div className="col-2 p-5">
                        <button 
                        className="btn btn-primary" 
                        onClick={redirect}
                        >
                            Comenzar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
