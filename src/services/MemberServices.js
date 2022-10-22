import axios from 'axios';

const MEMBERS_API_BASE_URL = "http://clubemes-001-site1.atempurl.com/api/Members";

class MembersService {

    getMembers(){
        return axios.get(MEMBERS_API_BASE_URL );
    }

}

export default new MembersService();