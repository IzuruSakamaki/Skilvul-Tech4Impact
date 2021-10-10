const getGitHubUser = async (USERNAME) => {
    try {
        if (USERNAME == "") {
            return null
        }
  
        const users = await fetch(`https://api.github.com/users/${USERNAME}`,
        {method: 'GET'});
        const json = await users.json()
        const data = await json;
  
        if (data.login) {
            return `object`;
        }
  
        return 'not found';
  
    } catch (error) {
        console.log(error);
    }
  }
  const printGitHubUser = async () => {
    const mojombo = await getGitHubUser("mojombo");
    const orange = await getGitHubUser("");
    const rudiTabuti = await getGitHubUser("rudi.tabuti");
  
    console.log(mojombo);
    console.log(orange);
    console.log(rudiTabuti);
  }
  
  printGitHubUser();