const {
  sendForgotPasswordEmail,
  sendVerificationEmail,
} = require("./sendTemplates");

(async () => {
  const user = {
    firstname: "test",
    lastname: "test",
    email: "test@test.com",
  };

  const verifyLink = "/users/validate";
  const resetLink = "/users/forgotpasswordchange";

  await sendVerificationEmail(user, verifyLink);
  await sendForgotPasswordEmail(user, resetLink);
})();
