// import Axios from 'axios';

const BASE_URL = 'http://localhost:5000/';

export const register = async (firstname, lastname, email, password) => {
  try {
    const url = BASE_URL + 'user/signup';
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: firstname,
        familyName: lastname,
        email,
        password,
        twitterInfo: '',
      }),
    });
    return response.json();
  } catch (err) {
    console.log(err);
  }
};

export const login = async (email, password) => {
  try {
    const url = BASE_URL + 'user/signin';
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    return response.json();
  } catch (err) {
    console.log(err);
  }
};

<<<<<<< HEAD
export const saveTopics = async (topics, userEmail) => {
  try {
    const url = BASE_URL + 'topic/set-topics';
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ topics, userEmail }),
    });
    return response.json();
  } catch (err) {
    console.log(err);
  }
};

export const generateTweetServiceClient = async (user) => {
  try {
    const url = BASE_URL + 'tweets/generate-tweet';
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
=======
export const getUserById = async (id) => {
  try {
    const url = BASE_URL + 'user/' + id;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
>>>>>>> 9f36b5a71c85d1d87734372d9543b2b2bc0032af
    });
    return response.json();
  } catch (err) {
    console.log(err);
  }
};
