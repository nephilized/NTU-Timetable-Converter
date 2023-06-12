import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import './HowToUse.css';
import example from './example.png';



function HowToUse() {

    const gapi = window.gapi;
    const google = window.google;
    const CLIENT_ID = '130489118806-juf763haldq86apl81rsncerur8so7b4.apps.googleusercontent.com';
    const API_KEY = 'AIzaSyCNRuNOnAiJrYC49ftOccdwJ6yHau01XFE';
    const DISCOVERY_DOC = 'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest';
    const SCOPES = "https://www.googleapis.com/auth/calendar";
  
    const accessToken = localStorage.getItem('access_token');
    const expiresIn = localStorage.getItem('expires_in');

    let gapiInited = false, gisInited = false, tokenClient;

    useEffect(() => {
        //const expiryTime = new Date().getTime() + expiresIn * 1000;
        gapiLoaded()
        gisLoaded()
    }, [gapiLoaded, gisLoaded])

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = (e) => {
            const fileContent = e.target.result;

            //Get the table element by its ID
            const parser = new DOMParser();
            const htmlDocument = parser.parseFromString(fileContent, 'text/html');
            const table = htmlDocument.querySelector('table');

            const extractedInfo = [];

            for (let i = 0; i < 17; i++) {
                const element = table.children[0].children[0].children[0].children[0].children[0].children[i];

                for (let i = 0; i < element.children.length; i++) {
                    const child = element.children[i];
                    const element2 = child.children[0]    
                    if (child.tagName === 'TD' && child.getAttribute('bgcolor') === 'white' && element2.getAttribute('color') !== 'RED'){
                        const info = child.textContent.trim();

                        if (i === 1) {
                            if (info.includes(';')) {
                                const infoParts = info.split(';');
                                infoParts.pop()
                                infoParts.forEach(part => {
                                    const match = part.match(/Wk(\d+(,\d+)*|\d+-\d+)/);
                                    const match1 = part.match(/Wk(\d+)-(\d+)/);
                                    if (match) {
                                        if (match[1].includes(',')) {
                                            const weekNumbers = match[1].split(',').map(Number);
                                            extractedInfo.push(...weekNumbers.map(number => `${part.trim()} Wk${number} monday`));
                                        } else if (match1) {
                                            const start = parseInt(match1[1]);
                                            const end = parseInt(match1[2]);
                                          
                                            for (let i = start; i <= end; i++) {
                                              extractedInfo.push(part.replace(match1[0], `Wk${i}`) + ' monday');
                                            }
                                          }
                                    } else if (!info.includes('Wk')) {
                                        const weekNumbers = Array.from({ length: 14 }, (_, index) => index + 1);
                                        weekNumbers.forEach(number => {
                                            extractedInfo.push(`${info.trim()} Wk${number} monday`);
                                        });
                                    } else {
                                        extractedInfo.push(part.trim() + ' monday');
                                    }
                                });
                            } else {
                                extractedInfo.push(info + ' monday');
                            }
                        } else if (i === 2) {
                            if (info.includes(';')) {
                                const infoParts = info.split(';');
                                infoParts.pop();
                                infoParts.forEach(part => {
                                    const match = part.match(/Wk(\d+(,\d+)*|\d+-\d+)/);
                                    const match1 = part.match(/Wk(\d+)-(\d+)/);
                                    if (match) {
                                        if (match[1].includes(',')) {
                                            const weekNumbers = match[1].split(',').map(Number);
                                            extractedInfo.push(...weekNumbers.map(number => `${part.trim()} Wk${number} tuesday`));
                                        } else if (match1) {
                                            const start = parseInt(match1[1]);
                                            const end = parseInt(match1[2]);
                                          
                                            for (let i = start; i <= end; i++) {
                                              extractedInfo.push(part.replace(match1[0], `Wk${i}`)+ ' tuesday');
                                            }
                                          }
                                    } else if (!info.includes('Wk')) {
                                        const weekNumbers = Array.from({ length: 14 }, (_, index) => index + 1);
                                        weekNumbers.forEach(number => {
                                            extractedInfo.push(`${info.trim()} Wk${number} tuesday`);
                                        });
                                    } else {
                                        extractedInfo.push(part.trim() + ' tuesday');
                                    }
                                });
                            } else {
                                extractedInfo.push(info + ' tuesday');
                            }
                        } else if (i === 3) {
                            if (info.includes(';')) {
                                const infoParts = info.split(';');
                                infoParts.pop();
                                infoParts.forEach(part => {
                                    const match = part.match(/Wk(\d+(,\d+)*|\d+-\d+)/);
                                    const match1 = part.match(/Wk(\d+)-(\d+)/);
                                    if (match) {
                                        if (match[1].includes(',')) {
                                            const weekNumbers = match[1].split(',').map(Number);
                                            extractedInfo.push(...weekNumbers.map(number => `${part.trim()} Wk${number} wednesday`));
                                        } else if (match1) {
                                            const start = parseInt(match1[1]);
                                            const end = parseInt(match1[2]);
                                          
                                            for (let i = start; i <= end; i++) {
                                              extractedInfo.push(part.replace(match1[0], `Wk${i}`) + ' wednesday');
                                            }
                                          }
                                    } else if (!info.includes('Wk')) {
                                        const weekNumbers = Array.from({ length: 14 }, (_, index) => index + 1);
                                        weekNumbers.forEach(number => {
                                            extractedInfo.push(`${info.trim()} Wk${number} wednesday`);
                                        });
                                    } else {
                                        extractedInfo.push(part.trim() + ' wednesday');
                                    }
                                });
                            } else {
                                extractedInfo.push(info + ' wednesday');
                            }
                        } else if (i === 4) {
                            if (info.includes(';')) {
                                const infoParts = info.split(';');
                                infoParts.pop();
                                infoParts.forEach(part => {
                                    const match = part.match(/Wk(\d+(,\d+)*|\d+-\d+)/);
                                    const match1 = part.match(/Wk(\d+)-(\d+)/);
                                    if (match) {
                                        if (match[1].includes(',')) {
                                            const weekNumbers = match[1].split(',').map(Number);
                                            extractedInfo.push(...weekNumbers.map(number => `${part.trim()} Wk${number} thursday`));
                                        } else if (match1) {
                                            const start = parseInt(match1[1]);
                                            const end = parseInt(match1[2]);
                                          
                                            for (let i = start; i <= end; i++) {
                                              extractedInfo.push(part.replace(match1[0], `Wk${i}`) + ' thursday');
                                            }
                                          }
                                    } else if (!info.includes('Wk')) {
                                        const weekNumbers = Array.from({ length: 14 }, (_, index) => index + 1);
                                        weekNumbers.forEach(number => {
                                            extractedInfo.push(`${info.trim()} Wk${number} thursday`);
                                        });
                                    } else {
                                        extractedInfo.push(part.trim() + ' thursday');
                                    }
                                });
                            } else {
                                extractedInfo.push(info + ' thursday');
                            }
                        } else if (i === 5) {
                            if (info.includes(';')) {
                                const infoParts = info.split(';');
                                infoParts.pop();
                                infoParts.forEach(part => {
                                    const match = part.match(/Wk(\d+(,\d+)*|\d+-\d+)/);
                                    const match1 = part.match(/Wk(\d+)-(\d+)/);
                                    if (match) {
                                        if (match[1].includes(',')) {
                                            const weekNumbers = match[1].split(',').map(Number);
                                            extractedInfo.push(...weekNumbers.map(number => `${part.trim()} Wk${number} friday`));
                                        } else if (match1) {
                                            const start = parseInt(match1[1]);
                                            const end = parseInt(match1[2]);
                                          
                                            for (let i = start; i <= end; i++) {
                                              extractedInfo.push(part.replace(match1[0], `Wk${i}`) + ' friday');
                                            }
                                          }
                                    } else if (!info.includes('Wk')) {
                                        const weekNumbers = Array.from({ length: 14 }, (_, index) => index + 1);
                                        weekNumbers.forEach(number => {
                                            extractedInfo.push(`${info.trim()} Wk${number} friday`);
                                        });
                                    } else {
                                        extractedInfo.push(part.trim() + ' friday');
                                    }                            
                                });
                            } else {
                                extractedInfo.push(info + ' friday');
                            }
                        } else if (i === 6) {
                            if (info.includes(';')) {
                                const infoParts = info.split(';');
                                infoParts.pop();
                                infoParts.forEach(part => {
                                    const match = part.match(/Wk(\d+(,\d+)*|\d+-\d+)/);
                                    const match1 = part.match(/Wk(\d+)-(\d+)/);
                                    if (match) {
                                        if (match[1].includes(',')) {
                                            const weekNumbers = match[1].split(',').map(Number);
                                            extractedInfo.push(...weekNumbers.map(number => `${part.trim()} Wk${number} saturday`));
                                        } else if (match1) {
                                            const start = parseInt(match1[1]);
                                            const end = parseInt(match1[2]);
                                          
                                            for (let i = start; i <= end; i++) {
                                              extractedInfo.push(part.replace(match1[0], `Wk${i}`) + ' saturday');
                                            }
                                          }
                                    } else if (!info.includes('Wk')) {
                                        const weekNumbers = Array.from({ length: 14 }, (_, index) => index + 1);
                                        weekNumbers.forEach(number => {
                                            extractedInfo.push(`${info.trim()} Wk${number} saturday`);
                                        });
                                    } else {
                                        extractedInfo.push(part.trim() + ' saturday');
                                    }                                                      
                                });
                            } else {
                                extractedInfo.push(info + ' saturday');
                            }
                        } else {
                            continue;
                        }
                    }
                }

            }

            var filteredList = extractedInfo.filter(function(element) {
                return element !== '';
              });

            for (var i = 0; i < filteredList.length; i++) {
                filteredList[i] = filteredList[i].replace(/[-;,]/g, " ");
            }

            //Call the createEvent function here passing the examples array
            createEvent(filteredList);


            console.log(filteredList);

        }
        reader.readAsText(file);
    };

    function gapiLoaded() {
        gapi.load('client', initializeGapiClient);
    }

    async function initializeGapiClient() {
        await gapi.client.init({
          apiKey: API_KEY,
          discoveryDocs: [DISCOVERY_DOC],
        });
        gapiInited = true;
    
        if (accessToken && expiresIn) {
          gapi.client.setToken({
            access_token: accessToken,
            expires_in: expiresIn,
          });
        }
    }

    function gisLoaded() {
        tokenClient = google.accounts.oauth2.initTokenClient({
          client_id: CLIENT_ID,
          scope: SCOPES,
          callback: '', // defined later
        });
    
        gisInited = true;
    }

    function handleAuthClick() {
        tokenClient.callback = async (resp) => {
          if (resp.error) {
            throw (resp);
          }
          const { access_token, expires_in } = gapi.client.getToken();
          localStorage.setItem('access_token', access_token);
          localStorage.setItem('expires_in', expires_in)
        };
    
        if (!(accessToken && expiresIn)) {
          // Prompt the user to select a Google Account and ask for consent to share their data
          // when establishing a new session.
          tokenClient.requestAccessToken({ prompt: 'consent' });
          document.getElementById('authorize_button').hidden = true;
          document.getElementById('signout_button').hidden = false;
          console.log('authorized');

        } else {
          // Skip display of account chooser and consent dialog for an existing session.
          tokenClient.requestAccessToken({ prompt: '' });
          document.getElementById('authorize_button').hidden = true;
          document.getElementById('signout_button').hidden = false;
        }

    }

    function handleSignoutClick() {
        const token = gapi.client.getToken();
        if (token !== null) {
          google.accounts.oauth2.revoke(token.access_token);
          gapi.client.setToken('');
          localStorage.clear();
          document.getElementById('signout_button').hidden = true;
          document.getElementById('authorize_button').hidden = false;
        }

    }

    const createEvent = async (eventData) => {

        const delay = ms => new Promise(
            resolve => setTimeout(resolve, ms)
        );

        try {
            //Iterate over the eventData array and create events for each entry
            for (let i = 0; i < eventData.length; i++) {
                const eventDetails = eventData[i];
                // Extracting "SW2_1" as the location
                const locationMatch = eventDetails.match(/\b(SW[\d_]+)\b/);
                const location = locationMatch ? locationMatch[1] : "";

                // Extracting start time and end time
                const timeMatch = eventDetails.match(/(\d{4})to(\d{4})/);
                const startTime = timeMatch ? timeMatch[1] : "";
                const endTime = timeMatch ? timeMatch[2] : "";

                console.log("Location:", location);
                console.log("Start Time:", startTime);
                console.log("End Time:", endTime);

                //Define the event details
                const event = {
                    summary: eventDetails.match(/^(\S+\s+\S+\s+\S+)/),
                    location: location,
                    description: eventDetails.match(/^(\S+\s+\S+\s+\S+)/),
                    start: {
                        dateTime: getEventStartDate(eventDetails, startTime).toISOString(),
                        timeZone: 'Asia/Singapore',
                    },
                    end: {
                        dateTime: getEventEndDate(eventDetails, endTime).toISOString(),
                        timeZone: 'Asia/Singapore',
                    },
                };

                var request = gapi.client.calendar.events.insert({
                    'calendarId': 'primary',
                    'resource': event,
                    'sendUpdates': 'all',
                })

                request.execute((event)=>{
                    console.log(event);
                },(error)=>{
                  console.error(error);
                });

                await delay(250);
            }
        } catch(error) {
            console.error('Error creating event: ', error);
        }
    }

    function getEventStartDate(event, startTime){
        const startDate = new Date();
        let week;
        let day;

        //Calculate the base date as 14th August of the current year (Week 1 Monday)
        startDate.setFullYear(startDate.getFullYear(), 7, 14); //Month is zero based

        //Find the week of the event

        //Split the event string into an array of words
        var words = event.split(' ');

        //Iterate through words array in reverse order
        for (var i = words.length - 1; i >= 0; i--) {
            //Check if current word contains Wk
            if (words[i].includes("Wk")) {
                //Extract the number from the current word
                var extractedNumber = words[i].match(/\d+/g);
                
                //Put the number to week
                week = extractedNumber[extractedNumber.length - 1];

                week = parseInt(week);

                // Check if the week is in the range 8 to 14
                if (week >= 8 && week <= 14) {
                    week++;
                }

                break;
            }
        }

        //Find the day 

        //Get the last word
        var lastWord = words[words.length - 1].toLowerCase();

        //Assign a number based on the day

        if (lastWord === 'monday'){
            day = 0;
        } else if (lastWord === 'tuesday') {
            day = 1;
        } else if (lastWord === 'wednesday') {
            day = 2;
        } else if (lastWord === 'thursday') {
            day = 3;
        } else if (lastWord === 'friday') {
            day = 4;
        } else if (lastWord === 'saturday') {
            day = 5;
        } else {
            day = 0;
        }

        //Calculate the new event date
        const eventStartDate = new Date(startDate);
        eventStartDate.setDate(startDate.getDate() + (week - 1) * 7 + day);

        //Add time 
        eventStartDate.setHours(Number(startTime.substr(0, 2)));
        eventStartDate.setMinutes(Number(startTime.substr(2, 2)));

        return eventStartDate;
    }

    function getEventEndDate(event, endTime) {
        const endDate = new Date();
        let week;
        let day;

        //Calculate the base date as 14th August of the current year (Week 1 Monday)
        endDate.setFullYear(endDate.getFullYear(), 7, 14); //Month is zero based

        //Find the week of the event

        //Split the event string into an array of words
        var words = event.split(' ');

        //Iterate through words array in reverse order
        for (var i = words.length - 1; i >= 0; i--) {
            //Check if current word contains Wk
            if (words[i].includes("Wk")) {
                //Extract the number from the current word
                var extractedNumber = words[i].match(/\d+/g);
                
                //Put the number to week
                week = extractedNumber[extractedNumber.length - 1];

                week = parseInt(week);

                // Check if the week is in the range 8 to 14
                if (week >= 8 && week <= 14) {
                    week++;
                }

                break;
            }
        }

        //Find the day 

        //Get the last word
        var lastWord = words[words.length - 1].toLowerCase();

        //Assign a number based on the day

        if (lastWord === 'monday'){
            day = 0;
        } else if (lastWord === 'tuesday') {
            day = 1;
        } else if (lastWord === 'wednesday') {
            day = 2;
        } else if (lastWord === 'thursday') {
            day = 3;
        } else if (lastWord === 'friday') {
            day = 4;
        } else if (lastWord === 'saturday') {
            day = 5;
        } else {
            day = 0;
        }

        //Calculate the new event date
        const eventEndDate = new Date(endDate);
        eventEndDate.setDate(endDate.getDate() + (week - 1) * 7 + day);

        //Add time 
        eventEndDate.setHours(Number(endTime.substr(0, 2)));
        eventEndDate.setMinutes(Number(endTime.substr(2, 2)));

        return eventEndDate;
    }

    return(
        <div>
            <Navbar />

            <input className = 'upload' type = 'file' onChange = {handleFileUpload} accept = '.html' />
            <button className = 'authorize_button' id="authorize_button" hidden={accessToken && expiresIn} onClick={handleAuthClick}>Login</button>
            <button className = 'signout_button' id="signout_button" hidden={!accessToken && !expiresIn}   onClick={handleSignoutClick}>Sign Out</button>
            <p className = 'caption1'> Please follow the steps below to convert your NTU timetable into your Google Calendar  </p>
            <p className = 'caption2'> 1. Go to NTU STARS and right click on your timetable and save as html file </p>
            <img src = {example} className = 'example' alt = 'example' />
            <p className = 'caption3'> 2. Press the Login Button to provide permissions to access your Google Calendar  </p>
            <p className = 'caption4'> 3. Upload the file that you have saved by pressing the Choose File button</p>
            <p className = 'caption5'> 4. Wait for 30 seconds and your entire timetable will be transferred to your Google Calendar</p>
            <p className = 'caption6'> 5. Sign out after verifying that your timetable is on your Google Calendar</p>

        </div>
    )
}

export default HowToUse;
