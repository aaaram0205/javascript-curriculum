const queryString = new URLSearchParams(window.location.search);
const inputText  = queryString.get('input-text');
const inputHiddens = queryString.getAll('input-hidden');
const inputHidden = inputHiddens[0];

const inputTextObject = document.getElementsByName('input-text')[0];
inputTextObject.value = inputText;
inputTextObject.focus();

const membersGet = sessionStorage.getItem('members');
const membersLogical = membersGet || '[]';
const members = JSON.parse(membersLogical);

const membersCreate = function(form) {
  const inputTextObject = form['input-text'];
  members.push(inputTextObject.value);
  inputTextObject.value = '';
  membersSet();
  return membersRead();
};

const membersRead = function() {
  const tagDivParent = document.getElementById('tag-div-parent');
  const tagDivChild = document.getElementById('tag-div-child');
  tagDivParent.innerHTML = '';
  for (let index in members) {
    const newDivChild = tagDivChild.cloneNode(true);
    tagDivParent.appendChild(newDivChild);
    const membersNameObject = document.getElementsByName('members-name')[index];
    const membersUpdateObject = document.getElementsByName('members-update')[index];
    const membersDeleteObject = document.getElementsByName('members-delete')[index];
    membersNameObject.value = members[index];
    membersUpdateObject.index = index;
    membersDeleteObject.index = index;
  }
  console.log('Readed', members);
  return members;
};

const membersDelete = function(index) {
  members.splice(index, 1);
  membersSet();
  return membersRead();
};

const membersUpdate = function(index) {
  const name = document.getElementsByName('members-name')[index].value;
  members[index] = name;
  membersSet();
  return membersRead();
};

const membersSet = function() {
  const membersSet = JSON.stringify(members);
  sessionStorage.setItem('members', membersSet);
};

membersRead();
