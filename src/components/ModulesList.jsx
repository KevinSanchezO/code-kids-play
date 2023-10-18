import { modules } from "../data/modules"
import { ModuleCard } from "./ModuleCard"

export const ModulesList = () => {

    return (
        <div>
            {modules.map((module) => {
                return <ModuleCard key={module.id} module={module}/>
            })}
        </div>
    )

}
