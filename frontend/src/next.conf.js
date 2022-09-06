require('dotenv').config();

module.exports = {

    env:{
        REACT_APP__SANITY_PROJECT_ID : process.env.REACT_APP__SANITY_PROJECT_ID,
        REACT_APP__SANITY_TOKEN : process.env.REACT_APP__SANITY_TOKEN,
    },
}