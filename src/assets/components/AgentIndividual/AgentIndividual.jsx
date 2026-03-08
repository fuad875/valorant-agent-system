import React from 'react';

const AgentIndividual = ({agent}) => {
    return (
        <div>
               {/* row 1 */}
              <tr >
               
                <td className="w-1/2">
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={agent.agent_image}
                          alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="bg-amber-200 font-bold p-2 rounded-xl">Name:{agent.name}</div>
                      <div className="text-sm opacity-50">{agent.origin}</div>
                    </div>
                  </div>
                </td>
                <td className="">
                <p className='bg bg-green-400 text-center font-bold rounded'>Role</p>
                  <span>{agent.role}</span>
                 </td> 

                <td className="w-1/2 ">
                 <div className=" text-center ">
                <p className='bg bg-green-400 text-center font-bold rounded'>Abilities</p>
                <span className='badge badge-primary badge-sm'>{agent.abilities.q} </span>
                <br />
                  <span className="badge badge-primary badge-sm ">{agent.abilities.e}</span>
                 
                <br />
                  <span className="badge badge-primary badge-sm ">{agent.abilities.c}</span>
                  </div>
                 </td> 
                 

              </tr>
            </div>
        
    );
};

export default AgentIndividual;