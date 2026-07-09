const login = (username) => {
  const token = ~~[Math.random() * 12345];
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ username, token });
    }, 1000);
  });
};

// const userLogin = async (username) => {
//   try {
//     const user = await login(username);
//     console.log(`User ${user.username} logged in with token: ${user.token}`);
//   } catch (error) {
//     console.error("Login failed:", error);
//   }
// };

const userLogin = (username, callback) => {
  login(username)
    .then((user) => {
      console.log(`User ${user.username} logged in with token: ${user.token}`);
      if (callback) callback(null, user);
    })
    .catch((error) => {
      console.error("Login failed:", error);
      if (callback) callback(error);
    });
};

userLogin("john_doe");
