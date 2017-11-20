import React from "react";

class RegistrationForm extends React.Component {
  render() {
    return (
      <form>
        <input type="text" name="text" />
        <input type="password" name="password" />
        <button type="submit" />
      </form>
    );
  }
}

export default RegistrationForm;
