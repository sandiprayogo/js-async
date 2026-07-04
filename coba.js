const login = (username) => {
  const token = ~~[Math.random() * 12345];
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "sandi") {
        resolve({ username, token });
      } else {
        reject("Invalid username");
      }
    }, 2000);
  });
};

const userLogin = async () => {
  const { token } = await login("sandi");
  console.log(token);
};
userLogin();

// login("user123", (data) => {
//   const { username, token } = data;
//   console.log(`Username: ${username}, Token: ${token}`);
// });
