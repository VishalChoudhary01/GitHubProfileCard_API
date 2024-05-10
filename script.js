const myGitHubAPI_link = fetch(`https://api.github.com/users/vishalchoudhary01`)
  .then((res) => res.json())
  .then((data) => {
    const {
      login,
      avatar_url,
      html_url,
      followers,
      following,
      public_repos,
      updated_at,
      name,
      repos_url,
    } = data;
    // profile image and link
    const profileImgLink = document.querySelector(".profileImage");
    const anchor = document.createElement("a");
    anchor.setAttribute("href", html_url);
    anchor.setAttribute("target","_blank");
    anchor.innerHTML=`<img alt="githubImage" src=${avatar_url}/>`
    profileImgLink.appendChild(anchor);

    // content
    const profileName=document.querySelector(".Name_github_name");
    profileName.innerHTML=`<h2>${name}</h2>
    <h3>${login}</h3>`

    // Updated Repo ID number
    const repoUpdateID=document.querySelector(".repoNumber_updated");
    let date=new Date(updated_at)
    repoUpdateID.innerHTML=`
    <p><span id="repoLabel">Public Repo : </span>${public_repos}</p>
    <p id="date"><span id="dateLabel" >Last Update :</span> <span id="dateNum"> ${date.toLocaleString()}</span></p>
    `

    //followers
    const followersNum=document.querySelector(".followersFollowing");
    followersNum.innerHTML=`<p class="follower"><span>Follower : </span><span>${followers}</span></p>
    <p class="following"><span>Following : </span><span>${following}</span></p>`
    
    
});

/*
avatar_url: "https://avatars.githubusercontent.com/u/114379216?v=4"
html_url: "https://github.com/VishalChoudhary01"

created_at: "2022-09-26T04:51:03Z"

followers: 1   following:3   id: 114379216

login:"VishalChoudhary01"

name: "Vishal Kumar Choudhary"

public_repos: 18

repos_url: "https://api.github.com/users/VishalChoudhary01/repos"
 
updated_at:"2024-05-02T04:22:04Z"

url: "https://api.github.com/users/VishalChoudhary01"

*/
