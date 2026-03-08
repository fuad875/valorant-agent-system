import React, { use } from 'react';
import AgentIndividual from '../AgentIndividual/AgentIndividual';

const AgentList = ({ agentPromises }) => {
    const allAgent = use(agentPromises) //get the value from promise or fetch
    // console.log(allAgent);
    return (

        <div className='max-w-[1200px] mx-auto grid grid-cols-2'>
            <div className="overflow-x-auto">
                <table className="table table-fixed w-full">
                    <tbody>

                        {
                            allAgent.map(agent => <AgentIndividual agent={agent}></AgentIndividual>)
                        }

                    </tbody>
                </table>
            </div>


            <div>
              
                    <div className="card bg-base-300 rounded-box grid h-20 place-items-center">
                     <span className='font-bold'>Selected Agent(0/5)</span>
                    <button className='btn btn-primary'>Confirm</button>
                    </div>
                    
            </div>

        </div>


    );
};

export default AgentList;