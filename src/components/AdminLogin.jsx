import React, { useState } from "react";
import { Amplify } from "aws-amplify";
import config from "../amplifyconfiguration.json";

Amplify.configure(config);

import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

function AdminLogin({ signOut, user }) {
  return (
    <div style={styles.container}>
      <Heading level={1}>Hello {user.username}</Heading>
      <Button onClick={signOut}>Sign out</Button>
      <h2>Amplify Todos</h2>
    </div>
  );
}

export default withAuthenticator(AdminLogin);
