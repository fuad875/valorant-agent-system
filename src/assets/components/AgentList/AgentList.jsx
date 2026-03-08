import React, { use } from 'react';
import AgentIndividual from '../AgentIndividual/AgentIndividual';

const AgentList = ({ agentPromises, handleSelectedAgent, selectedAgents,handleShowAgent,showAgent}) => {
    const allAgent = use(agentPromises) //get the value from promise or fetch
    // console.log(allAgent);
    return (

        <div className='max-w-[1200px] mx-auto grid grid-cols-2'>
            <div className="overflow-x-auto">
                <table className="table table-fixed w-full">
                    <tbody>

                        {
                            allAgent.map(agent =>
                                <tr onClick={() => handleSelectedAgent(agent)} className={`cursor-pointer ${selectedAgents.find(a=>a.id === agent.id) ? "bg-green-100" : " "}`}  >
                                    <AgentIndividual agent={agent}></AgentIndividual>
                                </tr>


                            )}

                    </tbody>
                </table>
            </div>


            <div>

                <div className="card bg-base-300 rounded-box grid h-20 place-items-center">
                    <span className='font-bold'>Selected Agent({selectedAgents.length}/5)</span>

                    <div className="flex gap-2 flex-wrap justify-center">
                        {selectedAgents.map(agent => (
                            <div key={agent.id} className="flex flex-col items-center gap-1 bg-gray-100 p-2 rounded-lg">
                                <img src={agent.agent_image} alt={agent.name} className="w-12 h-12 rounded-full"/>
                                <span className="font-semibold">{agent.name}</span>
                            </div>
                        ))}
                    </div>

                    <button onClick={()=>handleShowAgent()} className={` btn btn-primary ${selectedAgents.length === 0 ? "btn-disabled" : ""}`}>Confirm</button>
                </div>

            </div>

        </div>


    );
};

export default AgentList;