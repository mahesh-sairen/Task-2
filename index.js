
var container = document.querySelector('.container');

// Data for the cards
var cardsData = [
  {
    title: 'ChemicalPersona_Re..',
    status: 'Active',
    deviceID: '#12345678..',
    deviceType: 'TE-RTM',
    associations: 'NoAssociations',
    actionUpdates: 'Active'
  },
  {
    title: 'NewDevice_RealTime',
    status: 'Active',
    deviceID: '#12345678..',
    deviceType: 'TE-RTM',
    associations: 'NoAssociations',
    actionUpdates: 'Active'
  },
  {
    title: 'TESiteAsoc-Connect',
    status: 'Active',
    deviceID: '#12345678..',
    deviceType: 'TE-RTM',
    associations: 'NoAssociations',
    actionUpdates: 'Active'
  }
  {
    title: 'TESiteAsoc-Connect',
    status: 'Active',
    deviceID: '#12345678..',
    deviceType: 'TE-RTM',
    associations: 'NoAssociations',
    actionUpdates: 'Active'
  }
];

// Function to create a card element
function createCard(data) {
  var card = document.createElement('div');
  card.classList.add('box');

  var title = document.createElement('p1');
  title.style.textAlign = 'left';
  title.style.color = 'lightseagreen';
  title.textContent = data.title + '&emsp;&emsp;';
  
  var status = document.createElement('span');
  status.style.color = 'darkgreen';
  status.textContent = data.status;
  
  title.appendChild(status);
  card.appendChild(title);

  var deviceID = document.createElement('p1');
  deviceID.style.textAlign = 'left';
  deviceID.textContent = 'Device ID&emsp;&emsp;&emsp;' + data.deviceID;
  card.appendChild(deviceID);

  var deviceType = document.createElement('p1');
  deviceType.style.textAlign = 'left';
  deviceType.textContent = 'Device Type&emsp;&emsp;&emsp;&emsp;' + data.deviceType;
  card.appendChild(deviceType);

  var associations = document.createElement('p1');
  associations.style.textAlign = 'left';
  associations.style.color = 'darkblue';
  associations.textContent = 'ASSOCIATIONS';
  card.appendChild(associations);

  var customer = document.createElement('p1');
  customer.style.textAlign = 'left';
  customer.textContent = 'Customer&emsp;&emsp;' + data.associations;
  card.appendChild(customer);

  var actionUpdates = document.createElement('p1');
  actionUpdates.style.textAlign = 'left';
  actionUpdates.style.color = 'darkblue';
  actionUpdates.textContent = 'ACTION UPDATES';
  card.appendChild(actionUpdates);

  var eyeIcon = document.createElement('img');
  eyeIcon.src = 'images/eye.png';
  eyeIcon.alt = 'eye';
  card.appendChild(eyeIcon);

  var checkboxDiv = document.createElement('div');
  var checkbox1 = document.createElement('input');
  checkbox1.type = 'checkbox';
  checkbox1.id = 'checkbox1';
  checkboxDiv.appendChild(checkbox1);
  checkboxDiv.innerHTML += '&emsp;';
  card.appendChild(checkboxDiv);

  var switchLabel = document.createElement('label');
  switchLabel.classList.add('switch');
  var switchInput = document.createElement('input');
  switchInput.type = 'checkbox';
  switchInput.checked = true;
  var switchSlider = document.createElement('span');
  switchSlider.classList.add('slider', 'round');
  switchLabel.appendChild(switchInput);
  switchLabel.appendChild(switchSlider);
  checkboxDiv.innerHTML += '&emsp;';
  card.appendChild(switchLabel);

  var actionIconsDiv = document.createElement('div');
  var activeText = document.createElement('p');
  activeText.textContent = data.status;
  actionIconsDiv.appendChild(activeText);
  actionIconsDiv.innerHTML += '&emsp;';
  
  var editIcon = document.createElement('img');
  editIcon.src = 'images/edit.png';
  editIcon.alt = 'edit';
  actionIconsDiv.appendChild(editIcon);

  var deleteIcon = document.createElement('img');
  deleteIcon.src = 'images/delete.png';
  deleteIcon.alt = 'delete';
  actionIconsDiv.appendChild(deleteIcon);

  var moreIcon = document.createElement('img');
  moreIcon.src = 'images/more.png';
  moreIcon.alt = 'more';
  actionIconsDiv.appendChild(moreIcon);

  card.appendChild(actionIconsDiv);

  return card;
}
for (var i = 0; i < 4; i++) {
  var card = createCard(cardsData[i]);
  container.appendChild(card);
}
