
function createElemWithText(
  nameOfElToBeCreated = "p",
  textContentOfCreatedEl = "",
  className = ""
) {
  // create the new HTML element

  let newlyCreatedElWithText = document.createElement(nameOfElToBeCreated);

  // add textContent (text) to element created above
  newlyCreatedElWithText.textContent = textContentOfCreatedEl;

  newlyCreatedElWithText.className = className;

  return newlyCreatedElWithText;
}
const createSelectOptions = async users => {
  users = await fetch(`https://jsonplaceholder.typicode.com/users`);
  if (!users) {
    return; 
    let i = user.id; 
  data.ForEach(users) {
    document.createElement(option);
  }
      
      
    }
     
    /*
e. Loops through the users data
f. Creates an option element for each user with document.createElement()
g. Assigns the user.id to the option.value
h. Assigns the user.name to the option.textContent
i. Return an array of options elements*/

  }
};
function toggleCommentSection(postId) {
  // Selects the section element with the data-post-id attribute
  // equal to the postId received as a parameter

  let section = document.querySelector(`section[data-post-id="${postId}"]`);
  // verify if section exist
  if (section) {
    // toggle the class `hide` on the section element
    section.classList.toggle("hide");
  }
  // return the section element
  return section;
}
function deleteChildElements(parentElement) {
  // Define a child variable as parentElement.lastElementChild
  let child = parentElement.lastElementChild;
  // while the child exist
  while (child) {
    // remove the child
    parentElement.removeChild(child);
    // Reassign child to parentElement.lastElementChild in the loop
    child = parentElement.lastElementChild;
  }
  // return the parent element
  return parentElement;
}
let parentElement = document.getElementById("container");
deleteChildElements(parentElement);
// this function gets 1 parameter named "postId"
function toggleCommentButton(postID) {
  // if postID is not received, return
  if (!postID) {
    return;
  }

  // select button having its value of "data-post-id" attribute = value of "postId"
  const btnSelectedEl = document.querySelector(
    `button[data-post-id = "${postID}"`
  );
  if (btnSelectedEl != null) {
    // if the textContent of button is 'Show Comments', change it to "Hide Comments", otherwise change to "Show Comments" by making use of ternary operator
    btnSelectedEl.textContent === "Show Comments"
      ? (btnSelectedEl.textContent = "Hide Comments")
      : (btnSelectedEl.textContent = "Show Comments");
  }

  // returning the selected button element
  return btnSelectedEl;
}
const addButtonListeners = () => {
  let myMainElem = document.querySelector("main");
  let buttonsList = myMainElem.querySelectorAll("button");
  if (buttonsList) {
    for (let i = 0; i < buttonsList.length; i++) {
      let myButton = buttonsList[i];
      let postId = myButton.dataset.postId;
      myButton.addEventListener("click", function(event) {
        toggleComments(event, postId), false;
      });
    }
    return buttonsList;
  }
};

const removeButtonListeners = () => {
  let myMainElem = document.querySelector("main");
  let buttonsList = myMainElem.querySelectorAll("button");
  console.log(buttonsList);
  if (buttonsList) {
    for (let i = 0; i < buttonsList.length; i++) {
      let myButton = buttonsList[i];
      let postId = myButton.dataset.postId;
      postId = myButton.dataset.postId;
      myButton.removeEventListener("click", function(event) {
        toggleComments(event, postId), false;
      });
    }
    return buttonsList;
  }
};
function createComments() {}
function populateSelectMenu(users) {
  if (!users) return;
  let menu = document.querySelector("#selectMenu");
  let options = createSelectOptions(users);

  for (let i = 0; i < options.length; i++) {
    let option = options[i];
    menu.append(option);
  }
  return menu;
}

let getUsers = async () => {
  let retrieve;
  try {
    retrieve = await fetch("https://jsonplaceholder.typicode.com/users");
  } catch (error) {
    console.log(error);
  } 

  // return information
  return await retrieve.json();
}; // end getUsers

let getUserPosts = async userId => {
  // if userId has nothing
  if (!userId) return;

  let retrieve;
  try {
    retrieve = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}/posts`
    );
  } catch (error) {
    // end try
    console.log(error);
  } // end catch

  // return information
  return retrieve.json();
}; // end getUserPosts

let getUser = async userId => {
  // if userId has nothing
  if (!userId) return;

  let retrieve;

  // try to fetch data for userId
  try {
    retrieve = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
  } catch (error) {
    // end try
    console.log(error);
  } // end catch

  // return information
  return retrieve.json();
}; // end getUser
const getPostComments = async (postID) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/https://jsonplaceholder.typicode.com/comments?postId=${postID}`);
  return await response.json(); 
};
const displayComments = async posts => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/https://jsonplaceholder.typicode.com/comments?postId=${postID}`);
  return await response.json(); 
};
const createPosts = async (postID) => {
   document.createDocumentFragment()

};
const displayPosts = async posts => {
  let myMain = document.querySelector("main");
  let element = posts
    ? await createPosts(posts)
    : document.querySelector("main p");
  myMain.append(element);
  return element;
};


function toggleComments(event, postId) {
  if (!event || !postId) {
    return undefined;
  }
  event.target.listener = true;
  let section = toggleCommentSection(postId);
  let button = toggleCommentButton(postId);
  return [section, button];
}

const refreshPosts = async posts => {
  if (!posts) {
    return undefined;
  }
  let buttons = removeButtonListeners();
  let myMain = deleteChildElements(document.querySelector("main"));
  let fragment = await displayPosts(posts);
  let button = addButtonListeners();
  return [buttons, myMain, fragment, button];
};
const selectMenuChangeEventHandler = async e => {
  let userId = e?.target?.value || 1;
  let posts = await getUserPosts(userId);
  let refreshPostsArray = await refreshPosts(posts);
  return [userId, posts, refreshPostsArray];
};
const initPage = async () => {
  let users = await getUsers();
  let select = populateSelectMenu(users);
  return [users, select];
};

function initApp() {
  initPage();
  let select = document.getElementById("selectMenu");
  select.addEventListener("change", selectMenuChangeEventHandler, false);
}

document.addEventListener("DOMContentLoaded", initApp);
