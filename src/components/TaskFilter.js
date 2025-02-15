import React from "react";
function TaskFilter ({filter, setFilter}){
    return (
        <div className="task-filters">
            <button className={
                filter === "all" ? "active":""}
                onClick={()=>setFilter("all")}
                >
                    All
                </button>

                <button className={
                filter === "completed" ? "active":""}
                onClick={()=>setFilter("completed")}
                >
                    Completed
                </button>

        </div>
    )
}