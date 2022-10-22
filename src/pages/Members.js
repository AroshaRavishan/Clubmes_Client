import React, { Component } from 'react'
import MemberServices from '../services/MemberServices';
import EmployeeService from '../services/MemberServices'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaEye } from "react-icons/fa";




class Members extends Component {
    constructor(props) {
        super(props)

        this.state = {
                members: []
        }
        
        
    }
    componentDidMount(){
        MemberServices.getMembers().then((res) => {
            this.setState({ members: res.data});
        });
    }

    
   

    render() {
        return (
            <div>
            <h2 className='text'> Be a Proud Southerner</h2>
            
            <table id="dtBasicExample" class="table table-striped table-bordered table-sm" cellspacing="0" width="100%">
  <thead>
    <tr>
      <th class="th-sm">id

      </th>
      <th class="th-sm">Membership Code

      </th>
      <th class="th-sm">Name

      </th>
      <th class="th-sm">Age

      </th>
      <th class="th-sm">Address

      </th>
      <th class="th-sm">Actions

      </th>
    </tr>
  </thead>
  

  <tbody>
                                {
                                    this.state.members.map(
                                        member => 
                                        <tr key = {member.id}>
                                            <td> {member.id} </td>
                                             <td> {member.membershipCode} </td>   
                                             <td> {member.name}</td>
                                             <td> {member.age}</td>
                                             <td> {member.addres}</td>
                                             
                                             <td>
                                             <p className='name'>View</p>
                                                <FaEye />
                                             
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>


  <tfoot>
    <tr>
      <th>Id
      </th>
      <th>Membership Code
      </th>
      <th>NAme
      </th>
      <th>Age
      </th>
      <th>Address
      </th>
      <th>Actions
      </th>
    </tr>
  </tfoot>
</table>
</div>        )

    }
}

export default Members;
